
export default function (urlCnx, token) {

    const that = this;

    let $token = { url: urlCnx, tok: "", dt: "" }
    let $UrlCnx = urlCnx;


    if (typeof token === "string")
        $token.tok = token
    else if (typeof token === "object")
        $token = { ...$token, ...token }


    let $Limits = {
        "X-CALL-BYIP-REMAIN": 0,
        "X-CALL-METHODS": []
    }

    /********************************************************** */
    /*         Méthodes privées                                 */
    /********************************************************** */


    // Met à jour le Token API
    const APISetToken = function (obj, sUrl) {


        obj = { Token: "", dt: "", ...obj }

        that.$token = {
            url: sUrl,
            tok: obj.Token,
            dt: obj.ExpirationDate
        }

    }


    //Objet d'erreur générique
    const errObj = {
        "ResultInfos": {
            "ApiMessage": "",
            "ErrorMessage": "Une erreur est survenue",
            "ErrorNumber": 0,
            "Success": false
        },
        "ResultData": {},
        "ResultMetaData": {}
    };

    //Fait un appel à l'api
    // appel resolve/reject avec le retour de l'api
    const APICall = async function (obj, sMethAPI, meth) {

        //Copy obj
        let currErr = that.GetEmptyError();
        if (CheckLimit(sMethAPI) <= 0) {
            currErr.ResultInfos.ErrorMessage = "trop d'appl pour  " + sMethAPI.toString()
         //   return currErr;
        }


        //Méthodes autorisées
        let methods = ['POST', 'GET', 'PUT', 'DELETE'];
        if (methods.indexOf(meth.toUpperCase()) == -1) {
            currErr.ResultInfos.ErrorMessage = "'meth' parameter invalid, must be in " + methods.toString()
            return currErr;
        }

        //Entête
        var myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json')


        //Auth        if ($token && $token.tok.length > 0)
        myHeaders.append("x-auth", $token.tok)


        //Content JSON
        if (typeof obj === "object") {
            myHeaders.append('Content-Length', JSON.stringify(obj).length);
            myHeaders.append('Content-Type', 'application/json');
        }

        var paramFetch = {
            method: meth.toUpperCase(),
            headers: myHeaders,
            mode: 'cors',
        };


        if (typeof obj === "object")
            paramFetch.body = JSON.stringify(obj);


        let response = errObj;
        try {
            response = await fetch($UrlCnx + "/" + sMethAPI, paramFetch);
        }
        catch (err) {
            //erreur de fetch
            currErr.ResultInfos.ErrorMessage = "Erreur sur fetch " + JSON.stringify(err);
            return currErr;
        }
        finally {

            //Limits & X-Infos
            if (response && response.headers) {

                var arr = response.headers;
                var headerMap = {};
                arr.forEach(function (val, key) {
                    //Ne retourne que les header x-
                    if (key.toUpperCase().indexOf("X-") === 0)
                        headerMap[key.toUpperCase()] = val;
                });

                // Met à jour les limites de l'API
                UpdateLimits(headerMap, sMethAPI.toUpperCase())
            }
        }

        let res = await response.json()

        return res

    }


    //gestion du retour API
    const HandleResult = (res) => {
        res = { ...that.GetEmptyError(), ...res }
        if (IsSucces(res))
            return res.ResultData
        else
            throw res.ResultInfos
    }


    //Test si le retour de l'appel est Ok
    const IsSucces = function (oRes) {
        return (oRes.ResultInfos && oRes.ResultInfos.Success);
    }


    //Met à jour les limites
    const UpdateLimits = (map, sMetName) => {

        if (map.hasOwnProperty("X-CALL-BYIP-REMAIN") && map.hasOwnProperty("X-CALL-MAX") && map.hasOwnProperty("X-CALL-REMAIN")) {
            $Limits["X-CALL-BYIP-REMAIN"] = map["X-CALL-BYIP-REMAIN"]
            let myMeth = $Limits["X-CALL-METHODS"].find(zz => zz["X-CALL-METHOD"] == sMetName.toUpperCase())
            if (typeof myMeth == "undefined") {
                myMeth = { "X-CALL-METHOD": sMetName.toUpperCase() }
                $Limits["X-CALL-METHODS"].push(myMeth)
            }

            myMeth["X-CALL-MAX"] = map["X-CALL-MAX"]
            myMeth["X-CALL-REMAIN"] = map["X-CALL-REMAIN"]
        }
    }

    /// Retourne le nombre d'appel restant pour la méthode demandée
    /// Vérifie la date de dernière maj, si le compteur est 0 ou negatif
    /// mais la date de derni_re maj > 15 s, alors retourne x
    const CheckLimit = (sMethodeName) => {
        if (typeof sMethodeName === "string")
            return 5
    }

    /********************************************************** */
    /*         Méthodes publiques d'appel API                             */
    /********************************************************** */


    // Appel API pour récupérer un token
    this.APIGetToken = async function (objConnect) {


        let resultCallAuth = HandleResult(await APICall(objConnect, "Authenticate/Token", "POST"));


        //appel methode privé setToken
        APISetToken(resultCallAuth, $UrlCnx)

        return resultCallAuth

    }

    //Appel pour toutes méthodes
    this.ApiGenericCall = async (sMeth, sMethAPI, oObj) => HandleResult(await APICall(oObj, sMethAPI, sMeth))

    ///Récupère une fiche
    this.ApiGetFile = async (nTab, nFileId) => HandleResult(await APICall(null, "Search/" + nTab + "/" + nFileId, "GET"))

    //Recherche les tickets perm
    // appel resolve/reject avec le retour de l'api
    this.APIGetList = async function (nDescIdTab, listDescId, nPage, filterId) {

        let mademande = {
            "RowsPerPage": 20,
            "NumPage": nPage,
            "ListCols": listDescId,
            "FilterId" : filterId
        };

        let res = await APICall(mademande, "Search/" + nDescIdTab, "POST")
        return HandleResult(res)
    }

    //Création / Maj De fiches			
    this.ApiUpdateFile = async function (nDescIdTab, fields, nFileId) {

        let mademande = {
            "Fields": fields
        };

        let url = "CUD/" + nDescIdTab + (nFileId != 0 ? nFileId : "");

        return HandleResult(await APICall(mademande, url, "POST"))

    }

    ///Supprime une fiche
    this.ApiDeleteFile = async (nTab, nFileId) => HandleResult(await APICall(null, "CUD/Delete/" + nTab + "/" + nFileId, "DELETE"))

    ///Retourne la liste des bases disponibles
    this.ApiGetDBList = async (objConnect) => HandleResult(await APICall(objConnect, "Authenticate/ListDB", "POST"))


    /********************************************************** */
    /* Méthodes Utilitaires                                     */
    /********************************************************** */
    this.GetEmptyError = () => JSON.parse(JSON.stringify(errObj))

    //Retourne les limites 
    this.GetLimits = () => $Limits;

    //Retourne le token
    this.GetToken = () => $token;

    /********************************************************** */

}

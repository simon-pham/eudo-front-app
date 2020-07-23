<template>
  <v-app :ripple="false">
    <edn-list-mod
      ref="infScroll"
      :headers="headers"
      :listMaxLength="listMaxLength"
      :nbItemToAdd="nbItemToAdd"
      v-if="users"
      :items="users"
      :page="1"
      :monevent="toto"
    ></edn-list-mod>
  </v-app>
</template>

<script>
import apiModule from "@/modules/api.js";

export default {
  name: "App",

  data() {
    return {
      civility: ["M.", "Mme"],
      msgRequis: "Champs requis !",
      citiesList: [],
      loading: false,
      inptNum: null,
      mail: "",
      checked: true,
      switched: true,
      allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
      inptText: "efef",
      dateInpt: "",
      inptMemo: "",
      ingredient: [],
      recette: ["Cat 3", "Cat 4", "Cat 5"],
      cat: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"],
      selectedCat: "Cat 1",
      radioSelect: null,
      selectedColor: "",
      radios: [
        {
          label: "Choix 1",
          value: "1",
        },
        {
          label: "Choix 2",
          value: "2",
        },
      ],
      contentAbc: "abcdefghijklmnopqtrsuvwxyz",
      date: "",
      time: "",
      phone: "",
      urlString: "www.google.com",
      urlErrorUpdate: false,

      //Datas du mode liste
      users: [],
      nbItemToAdd: 3,
      listMaxLength: 20,
      infinityList: [],
      baseNb: 0,
      scrollTime: 0,
      //Header du mode liste
      headers: [
        { text: "Mail", value: "Email" },
        { text: "Prénom", value: "FirstName" },
        { text: "Nom", value: "LastName" },
      ],
    };
  },
  methods: {
    async toto(mapage) {
      if (mapage < 0) mapage = 0;

      let myApi = new apiModule(
        "https://ww2.eudonet.com/eudoapi",
        "asH1XaS/nVQmqREI4UyYjkZIatlAIEpvWe9gMsXPPH2qyWT3TRss4UMvxWcSYFkT6NYATttwNaFrmJmKjrQU8C3/ts2QFdjEwGZEmkGRtl6OKIyEIAPk4rNi8rhpF/7o6Keg1wukC4EIw1bFM2Kk4iRgWV6pnQ0hPHBzqQleXm7biu1fJnsDylIT2AQo6prj"
      );

      let resp = await myApi.APIGetList(
        200,
        [201, 202, 212, 275, 237],
        mapage,
        5867
      );

      resp.Rows.forEach((element) => {
        var a = element.Fields[0].Value;
        var b = element.Fields[1].Value;
        var c = element.Fields[2].Value;

        var myPP = {
          LastName: a,
          FirstName: b,
          Email: c,
        };

        this.users.push(myPP);
        if (this.users.length > 40) {
          this.users.shift(0);
        }
      });
    },

    updateTime() {
      this.time = "09:00";
    },
    Validate() {
      this.$refs.form.validate();
    },
    Reset() {
      this.$refs.form.reset();
    },
    testUrl(event) {
      console.log(event);
    },
  },
};
</script>

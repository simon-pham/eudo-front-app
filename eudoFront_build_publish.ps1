cd E:\Projets\_Eudo\2019\eudo-front-app\src\components

vue build --target lib --name eudoFront eudo-front.js

npm config set registry=http://eudopublish.eudonet.com:51200/npm/Eudonet-npm/

npm publish

npm config set registry=https://registry.npmjs.org/

git push http://eudotfs.levallois.eudoweb.com/DefaultCollection/eudo-front master
git push https://github.com/Flatoupix/eudo-front-app master
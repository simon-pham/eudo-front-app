# EUDO-FRONT

## Installation du composant

```node
npm config set registry=http://eudopublish.eudonet.com:51200/npm/Eudonet-npm/

npm install eudo-front
```

## Initialisation du composant

```js
//vuetify.js
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import eudoFront from 'eudo-front'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify)
Vue.use(eudoFront);

export default new Vuetify({
  iconfont: 'mdi',
  theme: {
    themes: {
      light: {
        //Pour l'instant il faut faire ces décalartions manuellement.
        primary: '#bb1515',
        secondary: '#c4c4c4',
      },
    },
  },
});

```

Il faut bien prendre en considération que eudoFront n'est qu'un plugin de Vuetify à ce stade.
N'éspérez pas utiliser eudo-front sur un projet from scratch.



## LISTE DES COMPOSANTS

- Éléments de mise en page
  - Espace libre
  - Ligne libre
  - Ligne blanche
  - Etiquette
  - Séparateur
- Les caractères
  - `Champs`
  - `Catalogue`
  - `Choix multiple`
  - `Mémo`
- Les numériques
  - `Numériques`
- Les temporels
  - `Date`
- Les cliquables
  - Logique
  - `Bouton`
- Les coordonnées
  - `Téléphone`
  - `E-Mail`
  - Réseau social
  - Géolocalisation
- Les visuels
  - Image
  - Graphique
  - Page Web
  - Lien Web
  - Fichier
- Les utilisateurs
  - Utilisateurs
  - Groupe

---

## Champs `<edn-field/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |
|   **primary:**   | `String` |
|  **secondary:**  | `String` |

#### Exemple :

```html
<edn-field :label="Prénom" :required="true" />
```

---

## Catalogue `<edn-cat/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |
|   **primary:**   | `String` |
|  **secondary:**  | `String` |
|   **catalog:**   | `Array`  |

#### Exemple

```html
<edn-cat :label="Ville" :catalog="cities" />
```

---

## Catalogue multiple `<edn-catX/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |
|   **primary:**   | `String` |
|  **secondary:**  | `String` |
|   **catalog:**   | `Array`  |

#### Exemple

```html
<edn-cat :label="Passions" :catalog="passions" />
```

---

## Mémo `<edn-memo/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |
|   **primary:**   | `String` |
|  **secondary:**  | `String` |
|    **html:**     |  `Bool`  |

#### Exemple

```html
<edn-memo :label="Description" />
```

---
## Bouton `<edn-btn/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
|    **label:**    | `String` |
|     **id:**      | `Number` |
|   **primary:**   | `String` |
|  **secondary:**  | `String` |

#### Exemple

```html
<edn-btn :label="Valider" />
```

---

## Numérique `<edn-num/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |
|   **primary:**   | `String` |
|  **secondary:**  | `String` |

#### Exemple

```html
<edn-num :label="Âge" />
```

---

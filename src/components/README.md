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
  - `Heure`
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

#### Exemple

```html
<edn-num :label="Âge" />
```

---

## Date `<edn-date/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |

#### Exemple

```html
<edn-date :label="Choississez votre date de rendez-vous" />
```

---
## Heure `<edn-time/>`

|    Paramètre     |   Type   |
| :--------------: | :------: |
|   **tooltip:**   | `String` |
| **placeholder:** | `String` |
|    **label:**    | `String` |
|  **required:**   |  `Bool`  |
|     **id:**      | `Number` |
|    **order:**    | `Number` |
|  **charsMax:**   | `Number` |

#### Exemple

```html
<edn-date :label="Choississez votre heure de rendez-vous" />
```

---


# Changelog

@0.1.3
- Complément de documentation

@0.1.2
- bugfixes

@0.1.1
- bugfixes

@0.1.0
- Passage à Vuetify 2.0
- Ajout de l'edn color picker

@0.0.6
- Bugfixes

@0.0.5
- Bugfixes

@0.0.4
- Bugfixes

@0.0.3
- Bugfixes

@0.0.2
- Correction de bug d'import de dépendances

@0.0.1
- Initialisation du package de référence
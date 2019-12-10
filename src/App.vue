<template>
  <v-app :ripple="false">
    <form ref="form">
      <v-container>
        <v-row class="align-center justify-space-around">

        <edn-load message="edn-load" form="double" anim="dots"></edn-load>
        <edn-load message="edn-load" form="simple" anim="blink"></edn-load>
        </v-row>
        <edn-num label="edn-num" v-model="inptNum" tooltip="NOMBRE"></edn-num>
        <edn-field label="edn-field" v-model="inptText"></edn-field>
        <edn-cat label="edn-cat" v-model="selectedCat" :items="cat"></edn-cat>
        <edn-cat-x
          label="edn-cat-x'"
          v-model="ingredient"
          :items="recette"
          tooltip="Selection de catégories"
        ></edn-cat-x>
        <edn-date v-model="date" label="edn-date" />
        <edn-time v-model="time" label="edn-time" />
        <edn-memo label="edn-memo" v-model="inptMemo" :size="'normal'"></edn-memo>
        <edn-mail label="edn-mail" />
        <edn-phone label="edn-phone" v-model="phone"></edn-phone>
        <edn-check label="edn-check"></edn-check>
        <edn-switch label="edn-switch"></edn-switch>
        <edn-radio label="edn-radio" :radios="radios"></edn-radio>
        <edn-color label="edn-color"></edn-color>
          <v-row class="justify-center align-self-center">

          <edn-btn submit>Valider</edn-btn>
          <edn-btn @click.native="resetForm" alternate>Annuler</edn-btn>
          </v-row>
          
      </v-container>
    </form>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      civility: ['M.', 'Mme'],
      citiesList: [],
      loading: false,
      inptNum: '',
      inptText: '',
      inptMemo: '',
      ingredient: [],
      recette: [
        'Cat 1', 
        'Cat 2', 
        'Cat 3', 
        'Cat 4', 
        'Cat 5', 
        ],
      cat: [
        'Cat 1', 
        'Cat 2', 
        'Cat 3', 
        'Cat 4', 
        'Cat 5', 
        ],
      selectedCat: '',
      radios: [
        {
          label: 'Choix 1',
          value: '1',
        },
        {
          label: 'Choix 2',
          value: '2',
        },
      ],
      copied: false,
      contentAbc: 'abcdefghijklmnopqtrsuvwxyz',
      date: null,
      time: null,
      phone: String,
    }
  },
};
</script>

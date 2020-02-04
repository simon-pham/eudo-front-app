<template>
  <v-app :ripple="false">
    <form ref="form">
      <v-container @click.ctrl="fill()">
        <v-row class="align-center justify-space-around">
          <edn-load message="edn-load" form="double" anim="dots"></edn-load>
          <edn-load message="edn-load" form="simple" anim="blink"></edn-load>
          <edn-load message="edn-load" form="fill"></edn-load>
        </v-row>
        <edn-num
          label="edn-num"
          v-model="inptNum"
          tooltip="NOMBRE"
          required="Mange des pommes !"
        ></edn-num>
        <edn-field
          label="edn-field"
          v-model="inptText"
          :required="'Merci !'"
        ></edn-field>
        <edn-cat label="edn-cat" v-model="selectedCat" :items="cat" :required="'Il faut remplir les champs !'"></edn-cat>
        <edn-cat-x
          label="edn-cat-x"
          v-model="ingredient"
          :items="recette"
          tooltip="Selection de catégories"
        
        ></edn-cat-x>
        <edn-date v-model="date" label="edn-date" :required="true"/>
        <edn-time v-model="time" label="edn-time" :required="true"/>
        <edn-memo
          label="edn-memo"
          v-model="inptMemo"
          :size="'normal'"
        
        ></edn-memo>
        <edn-mail label="edn-mail" v-model="mail" :required="true"/>
        <edn-phone label="edn-phone" v-model="phone" :required="true"></edn-phone>
        <edn-check label="edn-check" v-model="checked" :required="true"></edn-check>
        <edn-switch label="edn-switch" v-model="switched" :required="true"></edn-switch>
        <edn-radio
          label="edn-radio"
          :radios="radios"
          v-model="radioSelect"
        
        ></edn-radio>
        <edn-color label="edn-color" v-model="selectedColor"></edn-color>
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
      civility: ["M.", "Mme"],
      citiesList: [],
      loading: false,
      inptNum: null,
      mail: "",
      checked: true,
      switched: true,
      inptText: "",
      inptMemo: "",
      ingredient: [],
      recette: ["Cat 3", "Cat 4", "Cat 5"],
      cat: ["Cat 1", "Cat 2", "Cat 3", "Cat 4", "Cat 5"],
      selectedCat: "",
      radioSelect: null,
      selectedColor: "",
      radios: [
        {
          label: "Choix 1",
          value: "1"
        },
        {
          label: "Choix 2",
          value: "2"
        }
      ],
      copied: false,
      contentAbc: "abcdefghijklmnopqtrsuvwxyz",
      date: "",
      time: "",
      phone: ""
    };
  },
  methods: {}
};
</script>

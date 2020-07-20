<template>
  <v-app :ripple="false">
    <!-- <logo class="mx-auto" :style="{ width: '30em' }"></logo> -->
    <v-form ref="form">
      <v-container
        @click.ctrl="updateTime()"
        @click.alt="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-row class="align-center justify-space-around">
          <edn-load message="edn-load" form="double" anim="dots"></edn-load>
          <edn-load message="edn-load" form="simple" anim="blink"></edn-load>
          <edn-load message="edn-load" form="fill"></edn-load>
        </v-row>
        <edn-num label="edn-num" v-model="inptNum" tooltip="NOMBRE"></edn-num>
        <edn-field label="edn-field" v-model="urlString"></edn-field>
        <edn-url label="edn-url" v-model="urlString" readonly></edn-url>
        <edn-cat label="edn-cat" v-model="selectedCat" :items="cat"></edn-cat>
        <edn-cat-x
          label="edn-cat-x"
          v-model="ingredient"
          :items="recette"
          tooltip="Selection de catégories"
        ></edn-cat-x>
        <edn-date v-model="dateInpt" label="edn-date" :popup="true" required />
        <edn-time
          v-model="time"
          label="edn-time"
          required="Ce champs doit être rempli !"
        />
        <v-row class="align-center justify-center">
          <edn-date
            v-model="dateInpt"
            :popup="false"
            :allowed-dates="allowedDates"
            class="mx-3"
          />
          <edn-time
            class="mx-3"
            v-model="time"
            label="Choisissez une plage horaire"
            tripStyle
            :slots="[
              '00:20',
              '00:40',
              '01:20',
              '01:40',
              '02:40',
              '03:40',
              '04:40',
              '05:40',
              '06:40'
            ]"
          />
        </v-row>
        <edn-memo
          label="edn-memo"
          v-model="inptMemo"
          :size="'normal'"
          html
          :required="'Un string'"
        ></edn-memo>
        <edn-mail label="edn-mail" v-model="mail" :required="true" />
        <edn-phone label="edn-phone" v-model="phone"></edn-phone>
        <edn-check
          label="edn-check"
          v-model="checked"
          :required="true"
        ></edn-check>
        <edn-switch label="edn-switch" v-model="switched"></edn-switch>
        <edn-radio
          label="edn-radio"
          :radios="radios"
          v-model="radioSelect"
        ></edn-radio>
        <edn-color label="edn-color" v-model="selectedColor"></edn-color>
        <v-row class="justify-center align-self-center">
          <edn-btn class="mx-2" validation="skin2019" @click="Validate()"
            >Valider</edn-btn
          >
          <edn-btn class="mx-2" validation @click="Validate()">Valider</edn-btn>
          <edn-btn class="mx-2" @click="Reset()">Reset</edn-btn>
          <edn-btn class="mx-2" color="secondary" @click="Reset()"
            >Reset</edn-btn
          >
        </v-row>
        <edn-list-mod
          ref="infScroll"
          :headers="headers"
          :listMaxLength="listMaxLength"
          :nbItemToAdd="nbItemToAdd"
          v-if="users"
          :items="users"
        ></edn-list-mod>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
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
      allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0,
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
          value: "1"
        },
        {
          label: "Choix 2",
          value: "2"
        }
      ],
      contentAbc: "abcdefghijklmnopqtrsuvwxyz",
      date: "",
      time: "",
      phone: "",
      urlString: "www.google.com",
      urlErrorUpdate: false,

      //Datas du mode liste
      users: require("./components/assets/localDatas.json"),
      nbItemToAdd: 3,
      listMaxLength: 20,
      infinityList: [],
      baseNb: 0,
      scrollTime: 0,
      //Header du mode liste
      headers: [
        {
          text: "UserHotcom",
          align: "start",
          sortable: false,
          value: "UserHotcom.Login"
        },
        { text: "Portable", value: "Portable" },
        { text: "Mail", value: "Email" },
        { text: "Prénom", value: "FirstName" },
        { text: "Nom", value: "LastName" },
        { text: "Trigramme", value: "Trigramme" }
      ]
    };
  },
  methods: {
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
    }
  }
};
</script>

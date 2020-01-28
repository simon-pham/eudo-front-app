<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="fade-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="$attrs.label"
        readonly
        :value="date ? $moment(date).format(format) : ''"
        v-on="on"
    :rules="$attrs.required ? [value => !!value || typeof $attrs.required == 'string' && $attrs.required!='' ? $attrs.required:'Veuillez remplir ce champs.'] : []"

      ></v-text-field>
    </template>
    <v-date-picker
      :color="colors.primary"
      no-title
      scrollable
      v-bind="$attrs"
      v-model="date"
      :locale="'Fr'"
      :first-day-of-week="1"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date), handleInput()"
        >OK</v-btn
      >
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    format: {
      type: String,
      default: () => "DD-MM-YYYY",
    },
    value:String
  },
  data() {
    return {
      menu: null,
      date: this.value,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary
      }
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.date);
    }
  },
  mounted() {
    this.$vuetify.theme.currentTheme.primary;
  }
};
</script>
<style lang="stylus"></style>
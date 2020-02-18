<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="content"
    transition="fade-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="content"
        :disabled="$attrs.disabled"
        readonly
        :label="$attrs.label"
        v-on="on"
        :rules="rules"
      ></v-text-field>
    </template>

    <v-time-picker
      :color="colors.primary"
      :format="'24hr'"
      v-bind="$attrs"
      @click:minute="$refs.menu.save(content)"
      close-on-content-click="false"
      v-model="content"
    >
    </v-time-picker>
  </v-menu>
</template>


<script>
import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  mixins: [ednRequired,ednVModel],
  data() {
    return {
      menu: null,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary
      }
    };
  },
};
</script>


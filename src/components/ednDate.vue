<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="content"
    transition="fade-transition"
    offset-y
    min-width="290px"
    v-if="$attrs.popup == true || $attrs.popup === ''"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :disabled="$attrs.disabled"
        readonly
        :label="$attrs.label"
        :value="content ? $format($parseISO(content), format) : ''"
        v-on="on"
        :rules="rules"
      ></v-text-field>
    </template>
    <v-date-picker
      :color="colors.primary"
      no-title
      scrollable
      v-bind="$attrs"
      v-model="content"
      :locale="'Fr'"
      :first-day-of-week="1"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Annuler</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(content)">OK</v-btn>
    </v-date-picker>
  </v-menu>
  <v-date-picker
    v-else
    :color="colors.primary"
    no-title
    scrollable
    v-bind="$attrs"
    v-model="content"
    :locale="'Fr'"
    :first-day-of-week="1"
    class="tripStyle"
  ></v-date-picker>
</template>
<script>
import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";
import { format, parseISO } from "date-fns";

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  props: {
    format: {
      type: String,
      default: () => "dd-MM-yyyy"
    }
  },
  data() {
    return {
      menu: null,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary
      }
    };
  },
  mounted() {
    this.$vuetify.theme.currentTheme.primary;
    this.$format = format;
    this.$parseISO = parseISO;
  },
  methods: {}
};
</script>
<style lang="stylus">
div.tripStyle {
  div.v-date-picker {
    &-header {
      background-color: #fafafa;
    }

    &-table {
      th {
        color: black;
      }

      @import 'assets/cstmVbtn';

      background-color: #fafafa;
      height: 275px;
    }
  }
}
</style>
<template>
  <v-text-field v-model="content" v-mask="mask" type="tel" v-bind="$attrs" :rules="rules"
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;"
            >mdi-help-circle-outline</v-icon
          >
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-text-field>
</template>

<script>
import VueTheMask from "vue-the-mask";
import Vue from "vue";

import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

Vue.use(VueTheMask);

export default {
  inheritAttrs: false,
  mixins:[ednRequired,ednVModel],
  data() {
    return {
      mask: "##.##.##.##.##"
    };
  }
};
</script>

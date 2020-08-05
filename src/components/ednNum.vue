<template>
  <v-text-field
    type="number"
    ref="input"
    v-model="content"
    v-bind="$attrs"
    :rules="rules"
    v-mask="$attrs.mask"
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor: pointer;"
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

Vue.use(VueTheMask);

import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  methods: {
    numCheck() {
      let evt = window.event;
      let val = evt.key;
      if (val.match(this.regEx)) {
        this.$emit("input", this.numberInput);
        return val;
      } else {
        evt.preventDefault();
      }
    },
  },
};
</script>

<template>
  <v-text-field
    type="number"
    ref="input"
    v-model="numberInput"
    v-bind="$attrs"
    :rules="rules"
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

Vue.use(VueTheMask);

import { ednRequired } from "./mixins/ednRequired";
export default {
  inheritAttrs: false,
  mixins: [ednRequired],
  props: {
    value: "",
    mask: {
      type: String,
      default: () => "##.##.##.##.##"
    }
  },
  data() {
    return {
      regEx: /[0-9+-.,]/,
      numberInput: this.value
    };
  },
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
    }
  }
};
</script>

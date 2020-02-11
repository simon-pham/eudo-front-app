<template>
  <v-text-field v-model="inputEl" type="text" v-bind="$attrs" :rules="rules">
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
import { ednRequired } from "./mixins/ednRequired";
export default {
  mixins: [ednRequired],
  props: {
    value: String
  },
  inheritAttrs: false,
  data() {
    return {
      inputEl: this.value
    };
  },

  watch: {
    inputEl(val) {
      this.$emit("input", val);
    }
  },
  mounted() {
    this.rules.push(
      v =>
        /^$|^.*@.*\..*$/.test(v) || "Vous devez entrer une adresse mail valide."
    );
  }
};
</script>

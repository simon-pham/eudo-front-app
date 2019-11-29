<template>
  <v-text-field v-model="inputEl" v-mask="mask" type="tel" v-bind="$attrs">
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
import Vue from "Vue";

Vue.use(VueTheMask);

export default {
  inheritAttrs: false,
  data() {
    return {
      inputEl: this.value,
      mask: "##.##.##.##.##"
    };
  },
  watch: {
    inputEl(val) {
      this.$emit("input", val);
    }
  }
};
</script>

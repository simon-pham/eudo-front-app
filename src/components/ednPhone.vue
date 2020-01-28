<template>
  <v-text-field v-model="inputEl" v-mask="mask" type="tel" v-bind="$attrs" 
    :rules="$attrs.required ? [value => !!value || typeof $attrs.required == 'string' && $attrs.required!='' ? $attrs.required:'Veuillez remplir ce champs.'] : []"
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

export default {
  inheritAttrs: false,
  props:{
    value:String
  },
  data() {
    return {
      inputEl: this.value,
      mask: "##.##.##.##.##"
    };
  },
  watch: {
    inputEl() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<template>
  <v-text-field v-model="inputEl" type="text" v-bind="$attrs" :rules="emailRules">
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
export default {
  props: {
    value:String
  },
  inheritAttrs: false,
  data() {
    return {
      inputEl: this.value,
      emailRules: [
        v =>
          /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
            v
          ) || "Le champs e-mail n'est pas valide"
      ],
    };
  },
  watch: {
    inputEl(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<template>
  <v-radio-group v-model="inputEl" :mandatory="false" v-bind="$attrs">
    <v-radio
      :ripple="false"
      :color="$vuetify.theme.currentTheme.primary"
      :checked="radio.checked"
      :radios="radios"
      v-for="(radio, id) in radios"
      :key="id"
      :label="radio.label"
      :value="radio.value + id"
    ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  props: {
    radios: {
      type: Array,
      default: () => []
    }
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
  }
};
</script>

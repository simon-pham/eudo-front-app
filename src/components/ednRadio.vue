<template>
  <v-radio-group v-model="content" :mandatory="false" v-bind="$attrs">
    <v-radio
      :ripple="false"
      :color="$vuetify.theme.currentTheme.primary"
      :checked="radio.checked"
      :radios="radios"
      v-for="(radio, id) in radios"
      :key="id"
      :label="radio.label"
      :value="radio.value"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ednVModel } from "./mixins/ednVModel";


export default {
  mixins: [ednVModel],
  props: {
    radios: {
      type: Array,
      default: () => []
    }
  },
  inheritAttrs: false,
};
</script>

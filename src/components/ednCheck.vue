<template>
  <v-checkbox :ripple="false" v-model="inputEl" v-bind="$attrs" :color="$vuetify.theme.currentTheme.primary" 
  
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;">mdi-help-circle-outline</v-icon>
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-checkbox>
</template>

<script>
import { ednRequired } from "./mixins/ednRequired";


export default {
  inheritAttrs: false,
    mixins:[ednRequired],

   props: {
    value: false
  },
  data() {
    return {
      inputEl: this.value,
    }
  },
  watch: {
    inputEl() {
      this.$emit('input', this.inputEl)
    },
  },
}
</script>

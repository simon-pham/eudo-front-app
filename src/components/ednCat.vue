<template>
  <!-- Ajout d'un icon de développement du catalogue -->
  <v-select v-model="selectedItem" :items="items" type="text" v-bind="$attrs" 
    :rules="$attrs.required ? [value => !!value || typeof $attrs.required == 'string' && $attrs.required!='' ? $attrs.required:'Veuillez remplir ce champs.'] : []"
  
  >
    <template v-slot:append-outer-icon v-if="tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;">mdi-help-circle-outline</v-icon>
        </template>
        {{ tooltip }}
      </v-tooltip>
    </template>
  </v-select>
</template>

<script>
import { VSelect } from 'vuetify/lib'

export default {
  component: {
    VSelect,
  },
  inheritAttrs: false,
  props: {
    tooltip: String,
    items: Array,
    value:""
  },
  data() {
    return {
      selectedItem: this.value,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary,
      },
    }
  },
  watch: {
    selectedItem(val) {
      this.$emit('input', val)
    },
  },
}
</script>

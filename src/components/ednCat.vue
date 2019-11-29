<template>
  <!-- Ajout d'un icon de développement du catalogue -->
  <v-select v-model="selectedItem" :items="items" type="text" v-bind="$attrs">
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
  },
  data() {
    return {
      selectedItem: this.value,
      colors: {
        primary: this.$vuetify.theme.primary,
        secondary: this.$vuetify.theme.secondary,
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

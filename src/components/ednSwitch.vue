<template>
  <v-switch :ripple="false" v-model="content" v-bind="$attrs" :color="$vuetify.theme.currentTheme.primary" 
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;">mdi-help-circle-outline</v-icon>
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-switch>
</template>

<script>
import { ednVModel } from "./mixins/ednVModel";

export default {  
  mixins: [ednVModel],
  inheritAttrs: false,
}
</script>

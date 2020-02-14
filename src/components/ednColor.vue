<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="fade-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="color"
        :label="$attrs.label"
        v-on="on"
        :rules="rules"
        :disabled="$attrs.disabled"
        :readonly="$attrs.readonly"
      >
        <template v-slot:prepend>
          <v-icon :color="color">mdi-square</v-icon>
        </template>
      </v-text-field>
    </template>
    <v-color-picker
      v-model="color"
      :mode="'hexa'"
      v-bind="$attrs"
      :hideModeSwitch="true"
    >
    </v-color-picker>
  </v-menu>
</template>
<script>
import { ednRequired } from "./mixins/ednRequired";

export default {
  inheritAttrs: false,
  mixins: [ednRequired],

  props: {
    value: {
      type: String,
      default: () => "#FFFFFF"
    }
  },
  data() {
    return {
      menu: null,
      color: this.value,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary
      }
    };
  },
  watch: {
    color() {
      this.$emit("input", this.color);
    }
  }
};
</script>


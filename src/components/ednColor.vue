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
      <v-text-field v-model="color" :label="$attrs.label" v-on="on">
        <template v-slot:append>
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
export default {
  inheritAttrs: false,
  data() {
    return {
      menu: null,
      color: "#FFFFFF",
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary
      }
    };
  },
  watch: {
    picker(val) {
      this.$emit("input", val);
    }
  }
};
</script>


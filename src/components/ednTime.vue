<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="time"
    transition="fade-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="time"
        :label="$attrs.label"
        readonly
        v-on="on"
      ></v-text-field>
    </template>

    <v-time-picker
      :color="colors.primary"
      :format="'24hr'"
      v-bind="$attrs"
      @click:minute="$refs.menu.save(time)"
      close-on-content-click="false"
      v-model="time"
    >
    </v-time-picker>
  </v-menu>
</template>
<script>
export default {
  inheritAttrs: false,
   props: {
    value: String
  },
  data() {
    return {
      menu: null,
      time: this.value,
      colors: {
        primary: this.$vuetify.theme.currentTheme.primary,
        secondary: this.$vuetify.theme.currentTheme.secondary
      }
    };
  },
  watch: {
    time() {
      this.$emit("input", this.time);
    }
  }
};
</script>


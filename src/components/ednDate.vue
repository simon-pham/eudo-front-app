<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="fade-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field v-model="date" :label="$attrs.label" readonly v-on="on"></v-text-field>
    </template>
    <v-date-picker
      :color="colors.primary"
      no-title
      scrollable
      v-bind="$attrs"
      v-model="date"
      :locale="'Fr'"
      :first-day-of-week="1"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      menu: null,
      time: null,
      date: null,
      colors: {
        primary: this.$vuetify.theme.primary,
        secondary: this.$vuetify.theme.secondary,
      },
    }
  },
  watch: {
    picker(val) {
      this.$emit('input', val)
    },
  },
  mounted() {
    this.$vuetify.theme.primary
  },
}
</script>
<style lang="stylus"></style>
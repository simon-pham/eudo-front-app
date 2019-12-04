<template>
  <v-switch v-model="inputEl" v-bind="$attrs" :color="$vuetify.theme.currentTheme.primary">
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
export default {
  inheritAttrs: false,
  data() {
    return {
      inputEl: this.value,
    }
  },
  watch: {
    inputEl(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<template>
  <v-select
    v-model="selectedItem"
    :items="items"
    multiple
    type="text"
    v-bind="$attrs"
  >
    <template v-slot:append v-if="tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;"
            >mdi-help-circle-outline</v-icon
          >
        </template>
        {{ tooltip }}
      </v-tooltip>
    </template>
  </v-select>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    tooltip: String,
    items: Array
  },
  data() {
    return { selectedItem: this.value };
  },
  watch: {
    selectedItem(val) {
      this.$emit("input", val);
    }
  }
};
</script>

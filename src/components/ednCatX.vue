<template>
  <edn-cat
    multiple
    v-bind="$attrs"
    :items="$attrs.items"
    v-model="inputEl"
  ></edn-cat>
</template>
<script>
export default {
  inheritAttrs: false,
  components: {},
  props: {},
  data() {
    return {
      inputEl: this.value
    };
  },
  watch: {
    inputEl(val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang='stylus'></style>
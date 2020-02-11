<template>
  <edn-cat
    multiple
    v-bind="$attrs"
    :items="$attrs.items"
    v-model="inputEl"
    :rules="rules"

  ></edn-cat>
</template>
<script>
import { ednRequired } from "./mixins/ednRequired";


export default {
  inheritAttrs: false,
    mixins:[ednRequired],

  props: {
    value:Array
  },
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
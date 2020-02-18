<template>
  <edn-cat
    multiple
    v-bind="$attrs"
    :items="$attrs.items"
    v-model="content"
    :rules="rules"
  ></edn-cat>
</template>
<script>
import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  props: {
    value: Array
  }
};
</script>
<template>
  <edn-cat
    multiple
    v-bind="$attrs"
    :items="$attrs.items"
    v-model="inputEl"
    :rules="$attrs.required ? [value => !!value || typeof $attrs.required == 'string' && $attrs.required!='' ? $attrs.required:'Merci de faire un choix.'] : []"

  ></edn-cat>
</template>
<script>
export default {
  inheritAttrs: false,
  components: {},
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
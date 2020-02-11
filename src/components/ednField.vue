<template>
  <v-text-field
    type="text"
    v-model="content"
    v-bind="$attrs"
    :value="handleInput()"
    :rules="rules"
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor:pointer;"
            >mdi-help-circle-outline</v-icon
          >
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-text-field>
</template>

<script>
import { ednRequired } from "./mixins/ednRequired";

export default {
  inheritAttrs: false,
  mixins: [ednRequired],
  props: {
    value: ""
  },
  data() {
    return {
      content: this.value
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    }
  }
};
</script>

<template>
  <v-text-field
    v-if="$attrs.mask != null || undefined || ''"
    v-mask="$attrs.mask"
    v-bind="$attrs"
    :rules="rules"
    v-model="content"
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor: pointer;"
            >mdi-help-circle-outline</v-icon
          >
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-text-field>
  <v-text-field
    v-else
    type="number"
    ref="input"
    v-model="content"
    v-bind="$attrs"
    :rules="rules"
  >
    <template v-slot:append v-if="$attrs.tooltip">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on" style="cursor: pointer;"
            >mdi-help-circle-outline</v-icon
          >
        </template>
        {{ $attrs.tooltip }}
      </v-tooltip>
    </template>
  </v-text-field>
</template>

<script>
import { mask } from "vue-the-mask";
import Vue from "vue";

import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  directives: { mask },
  mixins: [ednRequired, ednVModel],
  methods: {},
};
</script>

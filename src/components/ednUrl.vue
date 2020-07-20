<template>
  <v-row align-content="center" class="d-flex justify-center">
    <v-col cols="10">
      <v-text-field
        id="urlToCopy"
        :label="$attrs.label"
        :readonly="$attrs.readonly"
        :prepend-inner-icon="valid ? 'mdi-earth' : 'mdi-earth-off'"
        type="text"
        v-model="content"
        v-bind="$attrs"
        v-on="$listeners"
        :rules="rules"
        :clearable="!$attrs.readonly === ''"
        :placeholder="placeHolder"
        :outlined="$attrs.readonly === ''"
        :class="$attrs.readonly === '' ? 'text--disabled' : ''"
        @blur="errorTest()"
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
    </v-col>
    <v-col
      cols="1"
      :align-self="$attrs.readonly == '' ? 'start' : 'center'"
      :class="['text-center', $attrs.readonly == '' ? 'mt-4' : '']"
    >
      <v-tooltip v-model="copied" top>
        <template v-slot:activator="{ click }">
          <v-btn icon :disabled="!valid" class="pb-2" @click="copy()">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
        <span> {{ pasteContentRes }}</span>
      </v-tooltip>
    </v-col>
    <v-col
      cols="1"
      :align-self="$attrs.readonly == '' ? 'start' : 'center'"
      :class="['text-center', $attrs.readonly == '' ? 'mt-4' : '']"
    >
      <v-btn icon :disabled="!valid" class="pb-2" @click="goto()">
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { ednRequired } from "./mixins/ednRequired";
import { ednVModel } from "./mixins/ednVModel";

export default {
  inheritAttrs: false,
  mixins: [ednRequired, ednVModel],
  props: {
    pasteContentRes: {
      type: String,
      default: () => "Url copiée"
    },
    value: {
      type: String,
      default: () => ""
    },
    wrongUrlMsg: {
      type: String,
      default: () => "Vous devez entrer une url valide."
    },
    placeHolder: {
      type: String,
      default: () => "http://"
    },
    regexUrl: {
      type: RegExp,
      default: () =>
        /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    }
  },
  data() {
    return {
      valid: null,
      copied: false
    };
  },
  mounted() {
    this.rules.push(content => this.regexUrl.test(content) || this.wrongUrlMsg);
    this.valid = this.regexUrl.test(this.content);
  },
  watch: {
    content() {
      this.valid = this.regexUrl.test(this.content);
    }
  },
  methods: {
    copy() {
      let contentUrl = this.$el.querySelector("input");
      contentUrl.select();
      document.execCommand("copy");
      contentUrl.blur();
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 3000);
    },
    goto() {
      if (!/(http:\/\/|https:\/\/)/.test(this.content)) {
        this.content = "http://" + this.content;
      }

      window.open(this.content, "_blank");
    },
    errorTest() {
      this.$emit("onError", !this.valid);
    }
  }
};
</script>
<style lang="stylus">
div.v-input--is-readonly
  pointer-events none
  user-select none
</style>
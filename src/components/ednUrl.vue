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
        :rules="rules"
        :clearable="!$attrs.readonly"
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
    <v-col cols="1" align-self="center" class="text-center">
      <v-tooltip v-model="copied" top>
        <template v-slot:activator="{ click }">
          <v-btn icon :disabled="!valid" class="pb-2" @click="copy()">
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </template>
        <span> {{ pasteContentRes }}</span>
      </v-tooltip>
    </v-col>
    <v-col cols="1" align-self="center" class="text-center">
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
      default: () => "http://"
    }
  },
  data() {
    return {
      valid: null,
      copied: false,
      regexUrl: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    };
  },
  mounted() {
    this.rules.push(
      content =>
        this.regexUrl.test(content) || "Vous devez entrer une url valide."
    );
  },
  watch: {
    content() {
      this.valid = this.regexUrl.test(this.content);
    }
  },
  methods: {
    copy() {
      let contentUrl = document.getElementById("urlToCopy");
      contentUrl.select();
      document.execCommand("copy");
      contentUrl.blur();
      this.copied = true;

      setTimeout(() => {
        this.copied = false;
      }, 3000);
    },
    goto() {
      if (!this.content.includes("http://")) {
        this.content = "http://" + this.content;
      }
      window.open(this.content, "Url");
    }
  }
};
</script>

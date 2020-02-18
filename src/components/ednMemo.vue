<template>
  <div v-if="$attrs.html == '' || $attrs.html" class="cstmMemo">
    <div :class="['cstmQl', $attrs.disabled ? 'disabled' : '']" v-bind="$attrs">
      <v-input :rules="rules" v-model="content" :label="$attrs.label">
        <quill-editor
          ref="myTextEditor"
          :class="$attrs.size"
          v-model="content"
          :value="handleInput()"
          :options="editorOption"
        />
      </v-input>
    </div>
  </div>
  <div v-else>
    <v-textarea
      :label="$attrs.label"
      v-model="content"
      :rules="rules"
      :value="handleInput()"
    >
    </v-textarea>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import hljs from "highlight.js";
import { ednRequired } from "./mixins/ednRequired";

// import toolbar from "quill/modules/toolbar";
import { quillEditor } from "vue-quill-editor";
// import validatable from "vuetify/lib/mixins/validatable";

export default {
  inheritAttrs: false,
  mixins: [ednRequired],
  props: {
    value: ""
  },
  components: {
    quillEditor
  },
  data() {
    return {
      content: this.value,
      editorOption: {
        theme: "snow",
        placeholder: "Tapez votre texte ici",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", this.content);
    }
  }
};
</script>
<style lang="stylus">
div.cstmMemo {
  div.v-input__slot {
    display: grid;

    &:focus-within {
      label.v-label {
        color: var(--v-primary-base) !important;
      }
    }

    label.v-label {
      font-size: 0.8em;
    }
  }
}

div.cstmQl {
  display: block;

  & div.memoLabel {
    font-size: 12px;
    margin-bottom: 0.2em;
    color: var(--v-secondary-base);
  }

  div.quill-editor {
    flex: 1;

    &.normal {
      > div.ql-container {
        height: 10rem;
      }
    }

    &.large {
      > div.ql-container {
        height: 15rem;
      }
    }

    &.fatass {
      > div.ql-container {
        height: 20rem;
      }
    }

    > div.ql-container {
      &:focus-within {
        &:after {
          transform: scaleX(1);
          transition: 250ms;
        }
      }

      &:after {
        content: '';
        width: 100%;
        transition: 250ms;
        transform: scaleX(0);
        bottom: 0;
        height: 2px;
        background-color: var(--v-primary-base);
        z-index: 10;
        display: block;
      }

      position: relative;
    }
  }

  &.disabled * {
    :hover {
      &:focus-within {
        & div.memoLabel {
          color: #ccc !important;
          pointer-events: none;
        }
      }

      color: #ccc !important;
      // fill #ccc !important
      stroke: #ccc !important;
      pointer-events: none;
    }

    :before {
      color: #ccc !important;
    }

    color: #ccc !important;
    // fill #ccc !important
    stroke: #ccc !important;
    pointer-events: none;
  }
}
</style>
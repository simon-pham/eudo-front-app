<template>
  <div
    class="cstmQl"
    :style="
      '--primary:' +
        this.$vuetify.theme.primary +
        ';--secondary:' +
        this.$vuetify.theme.secondary +
        ';'
    "
    v-bind="$attrs"
  >
    <div class="memoLabel">{{ $attrs.label }}</div>
    <quill-editor
      ref="myTextEditor"
      :class="$attrs.size"
      v-model="content"
      :options="editorOption"
    >
    </quill-editor>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import hljs from "highlight.js";
import { quillEditor } from "vue-quill-editor";

export default {
  inheritAttrs: false,
  components: {
    quillEditor
  },
  props: {
    placeholder: {
      type: String,
      default: () => "Tapez votre texte ici"
    },
    theme: {
      type: String,
      default: () => "snow"
    }
  },
  data() {
    return {
      inputEl: this.value,
      content: "",
      editorOption: {
        theme: this.theme,
        placeholder: this.placeholder,
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
  watch: {
    inputEl(val) {
      this.$emit("input", val);
    }
  }
};
</script>
<style lang="stylus">
div.cstmQl {
  display: block;

  &:focus-within {
    & div.memoLabel {
      color: var(--primary);
    }
  }

  & div.memoLabel {
    font-size: 12px;
    margin-bottom: 0.2em;
    color: var(--secondary);
  }

  div.quill-editor {
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
        background-color: var(--primary);
        z-index: 10;
        display: block;
      }

      position: relative;
    }
  }
}
</style>
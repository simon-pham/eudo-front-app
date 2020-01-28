<template>
<v-text-field v-bind="$attrs">
  <div :class="['cstmQl', $attrs.disabled ? 'disabled' : '']" >
    <div class="memoLabel">{{ $attrs.label }}</div>
    <quill-editor
      ref="myTextEditor"
      :class="$attrs.size"
      v-model="content"
      :value="handleInput()"
      :options="editorOption"
    >
    </quill-editor>
  </div>
</v-text-field>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import hljs from "highlight.js";
import { quillEditor } from "vue-quill-editor";

export default {
  inheritAttrs: false,
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
div.cstmQl {
  display: block;

  &:focus-within {
    & div.memoLabel {
      color: var(--v-primary-base);
    }
  }

  & div.memoLabel {
    font-size: 12px;
    margin-bottom: 0.2em;
    color: var(--v-secondary-base);
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
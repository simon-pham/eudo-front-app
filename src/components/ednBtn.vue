<template>
  <div v-on="$listeners">
    <v-btn
      text
      :ripple="false"
      v-if="$attrs.validation == 'skin2019'"
      :style="
        $attrs.disabled == '' || $attrs.disabled == true
          ? { filter: 'grayscale(1)' }
          : ''
      "
      class="inheritCss"
      v-bind="$attrs"
    >
      <div class="btn">
        <div class="mask">
          <div class="rect-left"></div>
          <div class="rect-top"></div>
          <span><slot></slot></span>
        </div>
      </div>
    </v-btn>
    <v-btn
      v-else
      :ripple="false"
      v-bind="$attrs"
      :color="
        $attrs.validation == '' || $attrs.validation == true
          ? 'primary'
          : $attrs.color
      "
    >
      <span><slot></slot></span>
    </v-btn>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
};
</script>

<style lang="stylus" 
>
@import url('https://fonts.googleapis.com/css?family=Roboto');

button.v-btn.inheritCss {
  > span.v-btn__content {
    line-height: 2;
  }

  min-width: 0;
  height: inherit !important;
  will-change: inherit;
  font-size: inherit;
  margin: 0;
  text-transform: inherit;
  padding: 0 !important;
  min-width: inherit !important;

  &:before {
    display: none;
  }
}

div.btn {
  user-select: none;
  transition: transform 0.25s;
  margin: 0 0.8em;
  display: inline-block;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &.alt {
    text-align: center;
    color: white;

    &:hover {
      transform: scale(0.98);
    }

    > div.mask {
      > div {
        &.rect {
          &-top, &-left {
            display: none;
          }
        }
      }

      background: none;
    }
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s;
  }

  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 0.2em;

  & div {
    &.rect {
      &-top {
        transform: rotate(-30deg);
        left: -30%;
        bottom: 140%;
        transition: 0.15s 0.25s;
      }

      &-left {
        transform: rotate(-30deg);
        left: -50%;
        top: 20%;
        transition: 0.25s 0.05s;
      }
    }
  }

  &:hover {
    & div.rect {
      &-top {
        transform: rotate(-30deg);
        bottom: 60%;
        left: -10%;
      }

      &-left {
        transform: rotate(-30deg);
        left: -24%;
        top: 0%;
      }
    }
  }

  > div.mask {
    > div.pop {
      position: absolute;
      width: 1em;
      height: 1em;
    }

    > span {
      text-align: center;
      width: 100%;
      display: block;
      color: white;
      font-family: 'Cabin', sans-serif;
    }

    padding: 0.2em 1.6em;
    background: linear-gradient(309deg, #d13076 0%, #fc4a4a 53%, #bb1515 100%);
    position: relative;

    > div {
      background-color: #bb1515;
      opacity: 0.5;
      position: absolute;

      &.rect {
        &-left {
          height: 150%;
          width: 40%;
        }

        &-top {
          height: 130%;
          width: 70%;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div v-if="alternate" :style="{ backgroundColor: color }" class="btn alt">
      <div class="mask">
        <span><slot></slot></span>
      </div>
    </div>
    <div v-else class="btn">
      <div class="mask">
        <div class="rect-left"></div>
        <div class="rect-top"></div>
        <span><slot></slot></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    alternate: {
      type: Boolean,
      default: () => false
    },
    disable: {
      type: Boolean,
      default: () => false
    },
    color: {
      type: String,
      default: () => "#727272"
    }
  }
};
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

div.btn {
  user-select: none;
  transition: transform 0.25s;

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

  &:hover {
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

    div {
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

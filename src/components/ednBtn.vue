<template>
    <div :class="['btn',alternate?'alt':'']">
      <div class="mask">
        <div class="rect-left"></div>
        <div class="rect-top"></div>
        <span><slot></slot></span>
      </div>
    </div>
</template>

<script>
export default {
  inheritAttrs:false,
  props: {
    alternate: {
      type: Boolean,
      default: () => false
    },
    sm: {
      type: Boolean,
      default: () => false
    },
    disable: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

div.btn {
  user-select none
  margin: 0.6em 0.3em;
  transition: transform 0.25s;
  &.alt {
    background-color: #dadada;
    text-align: center;
    line-height: 2.4em;
    color: white;
    &:hover {
      transform: scale(0.98);
    }
  > div.mask {
      > div {
          &.rect {
            &-top,&-left {
              display none 
            }

          }
        }
        background:none;
        background-color:#727272
      } 
    } 
  &:hover {
    // transform: scale(1.1);
    // transition: transform 0.25s;
  }
  &:active {
    transform: scale(0.95);
    transition: transform 0.10s;
  }

  cursor: pointer;
  overflow: hidden;
  width: 9em;
  height: 2.3em;
  position: relative;
  border-radius: 0.2em;
  font-size: 1.4em;

  & div {
    &.rect {
      &-top {
        transform: rotate(-30deg) translate(0.1em, -3em);
        transition: 0.15s 0.25s transform;
      }

      &-left {
        transform: rotate(-30deg) translate(-2em, 0em);
        transition: 0.25s 0.05s transform;
      }
    }
  }

  &:hover {
    & div.rect {
      &-top {
        transform: rotate(-30deg) translate(0.1em, -1em);
      }

      &-left {
        transform: rotate(-30deg) translate(-0.7em, 0em);
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
      line-height: 2.3em;
      color: white;
      font-family: 'Cabin', sans-serif;
    }

    width: 100%;
    height: 100%;
    background: linear-gradient(309deg, #d13076 0%, #fc4a4a 53%, #bb1515 100%);
    position: relative;

    div {
      background-color: #bb1515;
      opacity: 0.5;
      position: absolute;
      transform-origin: bottom left;

      &.rect {
        &-left {
          height: 4em;
          width: 2.5em;
        }

        &-top {
          height: 3em;
          width: 6em;
        }
      }
    }
  }
}
</style>

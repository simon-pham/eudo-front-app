<template>
  <div v-bind="$attrs">
    <div
      id="loadingElement"
      v-if="$attrs.form == 'simple'"
      class="simple"
    ></div>
    <div v-if="$attrs.form == 'double'" class="double">
      <div class="loadInside"></div>
    </div>
    <span :class="['msg',$attrs.anim]">
      {{ $attrs.message }}
    </span>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  mounted() {
    var nbMax = 25;
    for (var i = 0; i <= nbMax; i++) {
      var loader = document.getElementById("loadingElement");
      var elem = document.createElement("div");
      elem.id = "div" + i;
      loader.appendChild(elem);
    }
  }
};
</script>


<style lang='scss'>
@keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes dots {
  0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  100% {
    content: "...";
  }
}
@keyframes loop {
  100% {
    transform: rotate(360deg);
  }
}
span.msg {
  &.blink {
    animation: blink 3s infinite alternate-reverse;
  }
  &.dots::after {
    content:'';
    animation: dots 3s infinite;

  }
  display: block;
  margin-top: 0.5em;
  text-align: center;
}
div.simple {
  margin: 7em auto;
  height: 5em;
  width: 10em;
  border-radius: 100%;
  animation: loop 1s steps(25) infinite;
}
div.simple {
  > div {
    width: 0.5em;
    height: 0.4em;
    background-color: var(--v-primary-base);
    transform-origin: 5em 0;
    position: absolute;
    /*! left: 50%; */
    top: 50%;
  }
  > div#div {
    &1 {
      width: 0.8em;
    }
    &2 {
      width: 1.2em;
    }
    &3 {
      width: 0.8em;
    }
  }
  @for $i from 1 through 25 {
    div#div#{$i} {
      transform: rotate(($i * 15) + deg);
    }
  }
}
div.double {
  > div.loadInside {
    height: 3em;
    width: 3em;
    margin: 0.1em auto 0;
    display: block;
    border: dashed 7px var(--v-primary-base);
    animation: loop 2s infinite linear;
    border-radius: 50em;
  }
  width: 4em;
  height: 4em;
  display: block;
  margin: 0 auto;
  border-radius: 50em;
  border: dashed 7px var(--v-primary-base);
  animation: loop 2s infinite linear;
}
</style>
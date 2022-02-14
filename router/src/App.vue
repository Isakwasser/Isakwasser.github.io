<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: undefined,
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    },
  },
};
</script>

<style>
html,
body,
#app {
  font-size: 16px;
}
/* начало анимации появления элемента */
.slide-left-enter {
  opacity: 1;
  position: absolute;
  top: 0;
  left: 100vw;
  width: 100vw;
}
.slide-left-enter-to,
.slide-left-leave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
}
/* анимация появления элемента активна */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s;
  opacity: 1;
  width: 100vw;
}
.slide-left-leave-to {
  position: absolute;
  top: 0;
  left: -100vw;
  width: 100vw;
}

.slide-right-enter {
  opacity: 1;
  position: absolute;
  top: 0;
  left: -100vw;
  width: 100vw;
}
.slide-right-enter-to,
.slide-right-leave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
}
/* анимация появления элемента активна */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s;
  opacity: 1;
  width: 100vw;
}
.slide-right-leave-to {
  position: absolute;
  top: 0;
  left: 100vw;
  width: 100vw;
}
</style>

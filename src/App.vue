<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      const routeDeep = [
        "index",
        "rules",
        "dividequery",
        "weekentry",
        "prepareentry",
        "answer",
        "success"
      ];
      const toDepth = routeDeep.indexOf(to.name);
      const fromDepth = routeDeep.indexOf(from.name);
      this.transitionName = toDepth > fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f2f2f2;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 300ms linear;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

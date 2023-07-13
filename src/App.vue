<template>
  <div id="app">
    <NavBar v-if="isIndependence" />
    <BackgroundShow v-if="isIndependence" />
    <router-view></router-view>
    <GoTop v-if="isIndependence" />
  </div>
</template>

<script>
import NavBar from "component/content/NavBar";

import BackgroundShow from "component/common/background/BackgroundShow";
import GoTop from "component/common/goTop/GoTop";

export default {
  name: "app",
  components: {
    NavBar,
    BackgroundShow,
    GoTop,
  },
  computed: {
    isIndependence () {
      const name = ['music']
      return !name.includes(this.$route.name)
    }
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', 'blue');
  }
};
</script>

<style lang="scss">
  @import "src/common/scss/common.scss";
</style>
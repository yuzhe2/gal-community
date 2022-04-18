<template>
  <div id="app">
    <NavBar/>
    <BackgroundShow />
    <router-view></router-view>
    <GoTop />
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
  }
};
</script>

<style lang="scss">
  @import "src/common/scss/common.scss";
</style>
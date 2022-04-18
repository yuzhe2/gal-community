<template>
  <v-tooltip :content="isFullScreen ? '退出全屏' : '全屏'">
    <i class="el-icon-full-screen" @click="handleClickFullScreen"> </i>
  </v-tooltip>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isFullScreen"]),
  },
  methods: {
    handleClickFullScreen() {
      if (!this.isFullScreen) {
        this.fullScreen();
      } else {
        this.exitScreen();
      }
      this.$store.commit("updateFullScreen", !this.isFullScreen);
    },
    // 全屏
    fullScreen() {
      const el = document.documentElement;

      const rfs =
        el.requestFullscreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;

      if (typeof rfs !== "undefined" && rfs) {
        rfs.call(el);
      }
    },
    // 退出全屏
    exitScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },
    checkFull() {
      const isFull =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement;

      if (isFull === undefined) return false;
      return isFull;
    },
    escKey() {
      if (!this.checkFull()) {
        this.$store.commit("updateFullScreen", false);
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.escKey);
  },
  destroyed() {
    window.removeEventListener("resize", this.escKey);
  },
};
</script>

<style lang="scss">
.el-icon-full-screen {
  font-size: 36px;
  color: $green;
  cursor: pointer;
}
</style>

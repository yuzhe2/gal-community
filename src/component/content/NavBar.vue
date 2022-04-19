<template>
  <div :class="[scrollYPost >= 100 ? 'fixed': '', 'header']">
    <ul class="nav-list">
      <li
        :class="[currentIndex === index ? 'active' : '', 'nav-item']"
        v-for="(item, index) in navLinkList"
        :key="index"
        @mouseover="changeActive(index)"
      >
        <a href="javascript:;" class="nav-item__link">
          <span class="nav-item__tit">{{ item }}</span>
        </a>
        <NavBarItemSub :subNum="currentIndex" />
      </li>
    </ul>
    <div class="link-cursor" :style="cursorSty"></div>
    <NavBarTools />
  </div>
</template>

<script>
import NavBarItemSub from "component/content/NavBarItemSub";
import NavBarTools from "component/content/NavBarTools";

export default {
  name: "NavBar",
  components: {
    NavBarItemSub,
    NavBarTools,
  },
  data() {
    return {
      currentIndex: 0,
      navLinkList: ["新番动画", "萌图壁纸", "游戏", "正常向漫画", "音乐"],
      cursorSty: {
        width: "64px",
        left: "40px",
      },
      scrollYPost: 0,
    };
  },
  computed: {
    moveLen() {
      return (
        (window.innerWidth * 0.7) / this.navLinkList.length / 2 -
        32 +
        this.currentIndex *
          ((window.innerWidth * 0.7) / this.navLinkList.length)
      );
    },
  },
  methods: {
    changeActive(index) {
      this.currentIndex = index;
      this.cursorSty.left = this.moveLen + "px";
    },
    scrollEvent() {
      this.scrollYPost = window.pageYOffset;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent, false);
  }
};
</script>

<style lang="scss">
.header {
  position: relative;
  display: flex;
  height: 50px;
  margin-bottom: 10px;
  background-color: rgba(243, 243, 243, .7);
  z-index: 999;
}

.header.fixed {
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1000;
}

.nav-list {
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
}

.nav-list .active .nav-item__link {
  color: #a52a2a;
}

.nav-item {
  position: relative;
  width: 25%;
  height: 100%;
  text-align: center;
  line-height: 50px;
}

.nav-item .nav-item__link {
  display: block;
  color: #333;
}

.nav-item.active:hover ul {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transform-origin: top left;
  transition: all 0.5s;
}

.link-cursor {
  position: absolute;
  bottom: -3px;
  height: 3px;
  background: #00a1d6;
  transition: all 0.3s ease-in-out;
}
</style>
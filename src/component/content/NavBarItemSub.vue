<template>
  <ul class="nav-item__sub">
    <li
      v-for="(item, index) in subList[subNum]"
      :key="index"
      class="nav-item__sub__single"
    >
      <a href="javascript:;" class="nav-item__sub__single__link">
        <span class="nav-item__sub__single__tit">{{ item }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    subNum: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      subList: [
        [
          "连载新番",
          "完结新番",
          "OVA/剧场版",
          "BDRIP/DVDRIP",
          "MMD",
          "MV/PV/特典",
        ],
        ["国产画师", "pixiv画师"],
        ["汉化GAL游戏", "未汉化GAL游戏", "ADV/拔作", "RPG/养成/SLG", "3D游戏"],
        ["汉化", "未汉化"],
        ["萌幻电台", "动画音乐", "游戏音乐", "同人音声"],
      ],
    };
  },
};
</script>

<style lang="scss">
.nav-item__sub {
  position: absolute;
  left: 5px;
  width: 100%;
  padding: 10px 0px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  box-shadow: 0 15px 30px 5px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transition: all .5s;
  z-index: 999;
}

.nav-item__sub__single {
  height: 33px;
  padding: 0 12px;
}

.nav-item__sub__single:hover {
  background-color: #db4437;
}

.nav-item__sub__single__link {
  display: block;
  font-size: 14px;
  line-height: 33px;
  color: #333;
}

.nav-item__sub__single__link:hover {
  color: #fff;
}
</style>
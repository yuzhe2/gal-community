<template>
  <div class="swiper-control">
    <div class="swiper-control__show">
      <div class="img-content" :style="translateSty">
        <div
          v-for="(value, name, index) in swiperImgList"
          class="img-content__item"
          :key="index"
        >
          <a href="javascript:;" class="img-content__item--link">
            <img :src="value" class="img-content__item--show" />
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-control__trigger">
      <span
        v-for="(item, index) in 5"
        :key="index"
        :class="currentIndex === index ? 'on' : ''"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperControl",
  data() {
    return {
      currentIndex: 0,
      swiperImgList: {
        img01: require("assets/img/swiper/img05.png"),
        img02: require("assets/img/swiper/img01.png"),
        img03: require("assets/img/swiper/img02.png"),
        img04: require("assets/img/swiper/img03.jpg"),
        img05: require("assets/img/swiper/img04.jpg"),
        img06: require("assets/img/swiper/img05.png"),
      },
      translateSty: {
        transform: "translate3d(-459px, 0px, 0px)",
        "transition-duration": ".5s",
      },
      tranNum: -459,
      tranTime: null,
    };
  },
  methods: {
    // 开启轮播图
    translateShow() {
      this.tranTime = setInterval(() => {
        this.currentIndex >= 4 ? (this.currentIndex = 0) : this.currentIndex++;
        this.tranNum = this.tranNum - 459;
        this.translateSty["transition-duration"] = ".5s";
        this.translateSty.transform = `translate3d(${this.tranNum}px, 0px, 0px)`;
        if (this.tranNum === -2295) {
          setTimeout(() => {
            this.translateSty["transition-duration"] = "0s";
            this.translateSty.transform = `translate3d(0px, 0px, 0px)`;
            this.tranNum = 0;
          }, 1000);
        }
      }, 6000);
    },
  },
  created() {
    // this.translateShow();
  },
};
</script>

<style lang="scss">
.swiper-control {
  position: relative;
  display: inline-block;
  width: 459px;
  height: 202px;
  overflow: hidden;
}

.swiper-control__show {
  width: 2754px;
  height: 100%;
  transition-property: transform;
}

.img-content__item {
  float: left;
  width: 459px;
  height: 202px;
}

.img-content__item--link {
  display: block;
}

.swiper-control__trigger {
  position: absolute;
  right: 22px;
  bottom: 10px;
}

.swiper-control__trigger span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 10px;
  border: 2px solid transparent;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.2s;
  cursor: pointer;
}

.swiper-control__trigger span:hover {
  border-color: #fff;
  background-color: #00a1d6;
  transform: scale(1.3);
}

.swiper-control__trigger span.on {
  border-width: 0px;
  background-color: transparent;
  background-image: url(assets/img/icon_slide_selected.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1.8);
}
</style>
<template>
  <div class="comic">
    <div class="comic-wrapper">
      <div class="comic-wrapper__img">
        <img :src="comicTit" class="comic-wrapper__img--content" />
      </div>
      <div class="comic-wrapper__search">
        <input
          type="text"
          class="comic-wrapper__search--text"
          @keyup.enter="searchVal"
        />
      </div>
      <div class="comic-wrapper__recommend">
        <ul class="comic-wrapper__recommend--container">
          <li
            v-for="index in 8"
            class="comic-wrapper__recommend--container__item"
            :key="index"
          >
            <a href="javascript:;" class="comic-wrapper__recommend__item--link">
              <div class="comic-wrapper__recommend__item--link__img">
                <img :src="likeComic.img" alt="" />
              </div>
              <div class="comic-wrapper__recommend__item--link__tit">
                <span>{{ likeComic.title }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicList",
  data() {
    return {
      comicTit: require("assets/img/comic/google_logo.svg"),
      likeComic: {
        title: "EDD动漫",
        img: require("assets/img/comic/EDDComic"),
      },
    };
  },
  methods: {
    searchVal(e) {
      this.$router.push("/comic/search?=" + e.target.value);
    },
  }
};
</script>

<style lang="scss">
.comic {
  width: 600px;
  margin: 100px auto;
  overflow: hidden;
}

.comic-wrapper__img {
  width: 270px;
  margin-bottom: 30px;
  margin-left: 140px;
}

.comic-wrapper__search {
  position: relative;
  width: 561px;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 22px;
  overflow: hidden;
}

.comic-wrapper__search::before,
.comic-wrapper__search::after {
  content: "";
  position: absolute;
  top: calc(50% - 12px);
  width: 24px;
  height: 24px;
}

.comic-wrapper__search::before {
  left: 12px;
  background-image: url(assets/img/comic/search.svg);
}

.comic-wrapper__search::after {
  right: 12px;
  background-image: url(assets/img/comic/googleMic.svg);
}

.comic-wrapper__search--text {
  width: 100%;
  height: 100%;
  padding: 0px 44px 1px 52px;
  font-size: 18px;
}

.comic-wrapper__recommend {
  height: 230px;
  margin-left: -42px;
}

.comic-wrapper__recommend--container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}

.comic-wrapper__recommend--container__item {
  width: 112px;
  height: 112px;
}

.comic-wrapper__recommend__item--link {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  height: 100%;
  font-size: 14px;
  color: #000;
  border-radius: 8px;
}

.comic-wrapper__recommend__item--link:hover {
  background-color: rgba(232, 232, 233, 0.7);
}

.comic-wrapper__recommend__item--link__img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: rgba(241, 243, 244, 0.7);
  border-radius: 50%;
}

.comic-wrapper__recommend__item--link__img img {
  width: 24px;
  height: 24px;
}

.comic-wrapper__recommend__item--link__tit {
  width: 100%;
  text-align: center;
}
</style>
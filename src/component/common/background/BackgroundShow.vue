<template>
  <div class="background-show">
    <ul class="background-show-slideshow">
      <li
        v-for="(item, index) in 6"
        class="background-show-slideshow__item"
        :key="index"
      >
        <span class="background-show-slideshow__item__img"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BackgroundShow",
};
</script>

<style lang="scss">
.background-show-slideshow {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.background-show-slideshow__item__img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: -2;
  animation: imageAnimation 36s linear infinite 0s;
}

.background-show-slideshow__item:nth-child(1) span {
  background-image: url(assets/img/background/img01);
}

.background-show-slideshow__item:nth-child(2) span {
  background-image: url(assets/img/background/img02);
  animation-delay: 6s;
}

.background-show-slideshow__item:nth-child(3) span {
  background-image: url(assets/img/background/img03);
  animation-delay: 12s;
}

.background-show-slideshow__item:nth-child(4) span {
  background-image: url(assets/img/background/img04);
  animation-delay: 18s;
}

.background-show-slideshow__item:nth-child(5) span {
  background-image: url(assets/img/background/img05);
  animation-delay: 24s;
}

.background-show-slideshow__item:nth-child(6) span {
  background-image: url(assets/img/background/img06);
  animation-delay: 30s;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  8% {
    opacity: 1;
    transform: scale(1.05);
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.1);
  }
  25% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
  }
}
</style>
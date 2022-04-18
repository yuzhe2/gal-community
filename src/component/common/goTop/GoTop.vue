<template>
  <div class="go-top" @click="goTop" v-show="scrollHeight >= 100">
    <i class="fa fa-angle-up"></i>
  </div>
</template>

<script>
export default {
  name: "GoTop",
  data() {
    return {
      scrollRange: 15,
      topTime: null,
      scrollHeight: 0,
    };
  },
  methods: {
    // 回到顶部的功能
    goTop() {
      let scrollHeight = window.pageYOffset;
      this.topTime = setInterval(() => {
        if (scrollHeight >= this.scrollRange) {
          window.scrollBy(0, -this.scrollRange);
          scrollHeight = scrollHeight - this.scrollRange;
        } else {
          // 当到达顶部时清除计时器
          window.scrollBy(0, -scrollHeight);
          clearInterval(this.topTime);
        }
      }, 10);
    },
    topShow() {
      this.scrollHeight = window.pageYOffset;
    }
  },
  created() {
    window.addEventListener("scroll", this.topShow, false);
  }
};
</script>

<style lang="scss">
.go-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: rgba(10, 10, 0, 0.7);
  color: #fff;
  cursor: pointer;
}

.go-top:hover {
  border-color: #d9534f;
  color: #d9534f;
  transition: all 0.3s;
}

.go-top .fa {
  display: block;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
}
</style>
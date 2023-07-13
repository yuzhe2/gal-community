<template>
  <div class="search-panel">
    <form
      action="#"
      autocomplete="off"
      method="get"
      @submit.prevent="onSubmit"
      class="search-panel__main"
    >
      <input
        @keydown.enter="searchInput"
        ref="searchVal"
        type="text"
        name="key"
        :placeholder="defaultVal"
        class="search-panel__main__text"
      />
      <button type="submit" class="search-panel__main__btn">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { getGame } from "network/game";

export default {
  name: "GalAsideSearch",
  data() {
    return {
      defaultVal: "搜不到?",
      defaultArr: [
        "搜不到?",
        "请选用正确的关键词",
        "网站不能右键复制粘贴?",
        "请学会键盘快捷键Ctrl+C/V",
      ],
      defaultTime: null,
      innerTime: null,
      currentIndex: 1,
    };
  },
  computed: {
    currentValLen() {
      return this.defaultArr[this.currentIndex].length;
    },
  },
  methods: {
    searchInput() {
      let sumGalgame = [];

      getGame({
        keyWord: this.$refs.searchVal.value,
      }).then((res) => {
        let index = 1,
          gameLen = res.data.galData.page.maxPage;

        sumGalgame = sumGalgame.concat(res.data.galData.data);

        new Promise((resolve, reject) => {
          if (gameLen === 1 || gameLen === 0) resolve(1);

          for (let i = 1; i < gameLen; i++) {
            getGame({
              page: i + 1,
              keyWord: this.$refs.searchVal.value,
            }).then((res) => {
              sumGalgame = sumGalgame.concat(res.data.galData.data);
              index++;
              if (index === gameLen) {
                resolve(1);
              }
            });
          }
        }).then((res) => this.$emit("renderArticle", sumGalgame));
      });
    },
    /**
     * 阻止表单默认事件的方法
     */
    onSubmit() {
      return false;
    },
    /**
     * 改变搜索框中placeholder的值
     * 用requestAnimationFrame能够解决用setInterval不在游览器当前窗口时
     * 会运行错误的情况
     */
    changePlaceholder() {
      let item = this.defaultArr[this.currentIndex],
        index = 0,
        len = item.length;

      this.defaultVal = "";

      this.innerTime = setInterval(() => {
        this.defaultVal += item[index++];
        if (index === len) {
          clearInterval(this.innerTime);
          this.innerTime = null;
          this.currentIndex++;
          this.currentIndex === 4 ? (this.currentIndex = 0) : null;
          // 为了让placeholder切换完成之后能够延迟执行
          setTimeout(() => {
            window.requestAnimationFrame(this.changePlaceholder);
          }, 1000);
        }
      }, 200);
    },
  },
  mounted() {
    setTimeout(() => {
      window.requestAnimationFrame(this.changePlaceholder);
    }, 1000);
  },
  destroyed() {
    clearInterval(this.defaultTime);
    this.defaultTime = null;
  },
};
</script>

<style lang="scss">
.search-panel {
  height: 50px;
  padding: 8px;
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: rgba(10, 10, 0, 0.7);
}

.search-panel__main {
  display: flex;
  justify-content: space-between;
}

.search-panel__main__text {
  width: calc(100% - 52px);
  height: 34px;
  padding: 6px 12px;
  background-color: transparent;
  border: 1px solid #f89693;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08),
    0 0 8px rgba(238, 88, 83, 0.6);
  color: #999;
  line-height: 20px;
}

.search-panel__main__btn {
  width: 35px;
  background-color: #d9534f;
  color: #fff;
  border-radius: 4px;
}
</style>

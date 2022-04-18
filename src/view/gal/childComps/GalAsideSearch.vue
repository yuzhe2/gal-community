<template>
  <div class="search-panel">
    <form 
      action="#" autocomplete="off" method="get"
      @submit.prevent="onSubmit"
      class="search-panel__main"
    >
      <input
        @keydown.enter="searchInput"
        ref="searchVal"
        type="text" name="key" :placeholder="defaultVal"
        class="search-panel__main__text" />
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
          "搜不到?","请选用正确的关键词", 
          "网站不能右键复制粘贴?", "请学会键盘快捷键Ctrl+C/V", 
      ],
      defaultTime: null,
      currentIndex: 1,
    }
  },
  computed: {
    currentValLen() {
      return this.defaultArr[this.currentIndex].length;
    }
  },
  methods: {
    searchInput() {
      let sumGalgame = [];

      getGame({
        keyWord: this.$refs.searchVal.value,
      }).then(res => {
        let index = 1,
          gameLen = res.data.galData.page.maxPage;

        sumGalgame = sumGalgame.concat(res.data.galData.data);

        new Promise((resolve, reject) => {
          if (gameLen === 1 || gameLen === 0) resolve(1);

          for (let i = 1; i < gameLen; i++) {
            getGame({
              page: i + 1,
              keyWord: this.$refs.searchVal.value,
            }).then(res => {
              sumGalgame = sumGalgame.concat(res.data.galData.data);
              index++;
              if (index === gameLen) {
                resolve(1);
              }
            })
        }}).then(res => this.$emit("renderArticle", sumGalgame));
      }
      )
    },
    onSubmit() {
      return false;
    }
  },
  created() {
    // setInterval(() => {
    //   let index = 0;
    //   this.defaultVal = "";

    //   this.defaultTime = setInterval(() => {
    //     if (index >= this.currentValLen) {
    //       return;
    //     }

    //     this.defaultVal += this.defaultArr[this.currentIndex][index];
    //     index++;
    //   }, 100);

    //   setTimeout(() => {
    //     clearInterval(this.defaultTime);
    //     index = 0;
    //     this.currentIndex < 3 ? this.currentIndex++ : (this.currentIndex = 0);
    //   }, 2000)

    // }, 2400);
  }
}
</script>

<style lang="scss">
.search-panel {
  height: 50px;
  padding: 8px;
  margin-bottom: 30px;
  border-radius: 4px;
  background-color: rgba(10, 10, 0, .7);
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .08), 
        0 0 8px rgba(238, 88, 83, .6);
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
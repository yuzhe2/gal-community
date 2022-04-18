<template>
  <div class="article-panel--cartoon">
    <div class="article-panel__header">
      <p>绅士动画</p>
    </div>
    <div class="article-panel__main">
      <ul class="article-panel__main__list">
        <li 
          v-for="(item, index) in showCartoon"
          :key="index"
          class="article-panel__main__item"
        >
          <div 
            @click="sendCartoonDetail(item.id)"
            class="article-panel__main__item--left"
          >
            <div class="article-panel__item__img">
              <img
                :src="item.img"
                class="article-panel__item__img__context"
              />
            </div>
            <div class="article-panel__item__tag">
              <span>最新绅士动画</span>
            </div>
          </div>
          <div class="article-panel__main__item--right">
            <h4 class="article-panel__item__title">
              {{item.title}}
            </h4>
            <p class="article-panel__item__content">
              {{item.content}}
            </p>
            <div class="article-panel__item__info">
              <span class="article-panel__item__info--user">
                <img
                  src="https://gravatar.loli.net/avatar/2142a2b2c5b0eb4a01b61c6acef97573?s=24&d=mm&r=g"
                  class="article-panel__item__info--user--img"
                />
                NBhentai
              </span>
              <span class="article-panel__item__info--date">{{item.time}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="article-panel__pager">
      <ul class="article-panel__pages">
        <li class="article-panel__item--prev">
          <button 
            @click="prevPage"
            class="article-panel__item--prev__btn"
          >
            上一页
          </button>
        </li>
        <li 
          v-for="(item, index) in cartoonLen"
          :key="index"
          :class="currentPage === item ? 'active' : ''"
          class="article-panel__item--single"
        >
          <button
            class="article-panel__item--single__btn"
          >
            {{item}}
          </button>
        </li>
        <li class="article-panel__item--next">
          <button 
            @click="nextPage"
            class="article-panel__item--next__btn"
          >
            下一页
          </button>
        </li>        
      </ul>
    </div>
  </div>
</template>

<script>
import { getCartoonData } from "network/cartoon";

export default {
  name: "CartoonMainArticle",
  data() {
    return {
      cartoonData: null,
      currentPage: 1,
    }
  },
  computed: {
    showCartoon() {
      if (!this.cartoonData) return;
      return this.cartoonData.
        slice(6 * (this.currentPage - 1), 6 * this.currentPage); 
    },
    cartoonLen() {
      if (!this.cartoonData) return 0;
      return Math.ceil(this.cartoonData.length / 6);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage === 1) return;
      this.currentPage--;
    },
    nextPage() {
      if (this.currentPage === Math.ceil(this.cartoonData / 6)) return;
      this.currentPage++;
      getCartoonData(this.currentPage).then((res) => {
        this.cartoonData = this.cartoonData.concat(res.data.galData);
      })
    },
    sendCartoonDetail(id) {
      let routeUrl = this.$router.resolve({
        path: `/detail/gal/${id}`,
      });
      window.open(routeUrl.href, '_blank');
    }
  },
  created() {
    getCartoonData(1).then((res) => {
      this.cartoonData = res.data.galData;
    });
  },
};
</script>

<style lang="scss">
.article-panel--cartoon {
  width: 860px;
  padding: 20px 25px;
}

.article-panel__header {
  padding-left: 26px;
  border-bottom: 1px solid #f5f6f7;
  background-color: rgba(10, 10, 0, .7);
  color: #fff;
  line-height: 40px;
}

.article-panel__main__item {
  display: flex;
  height: 195px;
  padding: 20px 25px;
  background-color: rgba(255, 255, 255, .7);
  border-bottom: 1px solid #ddd;
}

.article-panel__main__item--left {
  position: relative;
  width: 240px;
  overflow: hidden;
  cursor: pointer;
}

.article-panel__main__item--left:hover .article-panel__item__img {
  transform: scale(1.03);
}

.article-panel__item__img {
  transition: all .3s ease-in-out;
}

.article-panel__item__tag {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
  background-color: rgba(10, 10, 0, .7);
  color: #fff;
  font-size: 13px;
}

.article-panel__main__item--right {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: calc(100% - 260px);
  margin-left: 20px;
}

.article-panel__item__title {
  color: #333;
}

.article-panel__item__content {
  color: #797c80;
}

.article-panel__item__info {
  color: #b1b1b1;
}

.article-panel__item__info--user--img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: -5px;
}

.article-panel__item__info--date {
  color: #adb5bd;
  font-size: 13px;
}

.article-panel__pager {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.article-panel__pages {
  display: flex;
}

.article-panel__pages button {
  height: 40px;
  padding: 0px 14px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, .7);
  color: #666;
  cursor: pointer;
}

.article-panel__pages .active button {
  border-color: rgb(107, 105, 214);
  background-color: rgba(107, 105, 214, .7);
  color: #fff;
}
</style>
<template>
  <div class="comic-search">
    <div class="comic-search--list">
      <ul class="comic-search--list__show">
        <li
          v-for="(item, index) in showComic"
          class="comic-search--list__show__item"
          :key="index"
        >
          <a 
            :href="'https:' + item.comic_url" 
            class="comic-search__show__item__link"
            target="blank"
          >
            <img :src="tempImg" class="comic-search__show__item__img" />
            <span class="comic-search__show__item__text">{{
              item.comic_name
            }}</span>
          </a>
          <div class="comic-search__show__item__info">
            <p class="comic-search__show__item__info--author">
              作者:{{ item.comic_author }}
            </p>
            <div class="comic-search__show__item__info--last">
              <span>最新:</span>
              <a
                href="javascript:;"
                class="comic-search__show__item__info--last__link"
              >
                <span class="comic-search__show__item__info--last__text">
                  {{ item.last_update_chapter_name }}
                </span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="comic-page">
      <div class="comic-pager">
        <ul class="comic-pages">
          <li class="comic-page-prev">
            <button 
              @click="prevPage"
              class="comic-page-prev--btn"
            >
              上一页
            </button>
          </li>
          <li
            v-for="(item, index) in comicPageLen" 
            class="comic-page-item"
            :class="currentPage === item ? 'active': null"
            :key="index"
          >
            <button class="comic-page-item--btn">{{item}}</button>
          </li>
          <li class="comic-page-next">
            <button 
              @click="nextPage"
              class="comic-page-prev--btn"
            >
              下一页
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import getComicData from "network/comic";

export default {
  name: "ComicSearchList",
  data() {
    return {
      comicList: null,
      comicPageLen: 0,
      tempImg: require("assets/img/comicHome"),
      currentPage: 1,
    };
  },
  computed: {
    showComic() {
      if (this.comicList) {
        return this.comicList
          .slice((this.currentPage - 1) * 9, this.currentPage * 9);
      }
    },
  },
  methods: {
    prevPage() {
      let page = this.currentPage;
      if (page === 1) {
        return;
      }
      this.currentPage--;
    },
    nextPage() {
      let page = this.currentPage;
      if (page === this.comicPageLen) {
        return;
      }
      this.currentPage++;
    }
  },
  created() {
    getComicData({
      s: this.$route.query,
    }).then((res) => {
      var test = res.data.slice(res.data.indexOf("galData") + 9);
      var test1 = JSON.parse(test.slice(0, test.length - 4));
      test1.forEach((val) => {
        delete val.status;
        delete val.comic_url_raw;
        delete val.chapter_url;
        delete val.cover;
        delete val.comic_url_raw;
        delete val.chapter_url_raw;
      });
      this.comicList = test1;
      this.comicPageLen = Math.ceil(test1.length / 9);
    });
  },
};
</script>

<style lang="scss">
.comic-search {
  width: 720px;
  margin: 50px auto;
  overflow: hidden;
}

.comic-search--list__show {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.comic-search--list__show__item {
  width: 190px;
}

.comic-search__show__item__link {
  display: block;
  color: #0187c5;
}

.comic-search__show__item__img {
  width: 100%;
}

.comic-search__show__item__info {
  color: #666;
}

.comic-search__show__item__info--last__link {
  color: #0187c5;
}

.comic-search__show__item__text,
.comic-search__show__item__info--author,
.comic-search__show__item__info--last {
  display: block;
  width: 190px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


.comic-pager {
  height: 40px;
  margin-top: 22px;
  padding: 0px 27px;
  overflow: hidden;
}

.comic-pages {
  display: flex;
  justify-content: space-between;
}

.comic-pages button {
  height: 40px;
  padding: 0px 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #222;
  cursor: pointer;
}

.comic-pages button:hover,
.comic-pages .active button {
  border-color: #00a1d6;
  background-color: #00a1d6;
  color: #fff;
}
</style>
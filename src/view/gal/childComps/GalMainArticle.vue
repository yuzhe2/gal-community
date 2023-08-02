<template>
  <div class="gals-panel">
    <ul class="gal-list">
      <li v-for="(item, index) in pageGal" class="gal-item" :key="item.id">
        <div class="gal-item__calendar">
          <span class="gal-item__calender--month">
            {{ item.date.split("月")[0] }}月
          </span>
          <span class="gal-item__calender--day">
            {{ item.date.split("月")[1] }}
          </span>
        </div>
        <div class="gal-item__info">
          <h3 class="gal-item__info--title">
            <a href="javascript:;" class="gal-item__info--title__link">
              {{ item.title }}
            </a>
          </h3>
          <div class="gal-item__info--brief">
            <span class="gal-item__info--brief__kind">
              <i class="fa fa-tags"></i>
              {{ item.kind || "纯爱"}}
            </span>
            <span class="gal-item__info--brief__watch">
              <i class="fa fa-eye"></i>
              {{ item.watch || "300"}}
            </span>
            <span class="gal-item__info--brief__discuss">
              <i class="fa fa-comments"></i>
              {{ item.discuss || "250"}}
            </span>
          </div>
        </div>
        <div 
          @click="sendDetail(item)"
          class="gal-item__area"
        >
          <div class="gal-item__area__img">
            <img :src="articleDefault" class="gal-item__area__img--temp" />
          </div>
          <div class="gal-item__area__text">
            <p class="gal-item__area__text--content">
              {{ item.content }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="gal-pager">
    </div>
  </div>
</template>

<script>
export default {
  name: "GalMainArticle",
  props: {
    galData: {
      type: Array,
      default: () => [],
    }
  },
  watch: {
    galData (newVal) {
      const oImgWrap = document.getElementsByClassName('gal-item__area__img')
      newVal.forEach((gal, idx) => {
        let oImg = new Image()
        oImg.src = gal.img

        oImg.onload = function () {
          oImgWrap[idx].removeChild(oImgWrap[idx].childNodes[0])
          oImgWrap[idx].appendChild(oImg)
        }
      })
    }
  },
  data() {
    return {
      currentPage: 1,
      articleDefault: require("assets/img/articleDefault.png")
    }
  },
  computed: {
    pageGal() {
      return this.galData.slice(5 * (this.currentPage - 1), 
              5 * this.currentPage);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage === 1) return;
      this.currentPage--;
    },
    nextPage() {
      if (this.currentPage === Math.ceil(this.galData.length / 5)) return;
      this.currentPage++;
    },
    sendDetail(item) {
      let routeUrl = this.$router.resolve({
        path: `/detail/${item.id}`,
      });
      window.open(routeUrl.href, '_blank');
      this.$store.commit("addHist", {
        type: "gal",
        data: {
          type: "gal",
          id: item.id,
          img: item.img,
          title: item.title,
        }
      })
    }
  },
  created () {
    const oImgWrap = document.getElementsByClassName('gal-item__area__img')

    this.pageGal.forEach((gal, idx) => {
      let oImg = new Image()
      oImg.src = gal.img


      oImg.onload = function () {
        oImgWrap[idx].removeChild(oImgWrap[idx].childNodes[0])
        oImgWrap[idx].appendChild(oImg)
      }
    })
  }
};
</script>

<style lang="scss">
.gals-panel {
  width: 750px;
}

.gal-item {
  position: relative;
  padding: 20px 25px 20px 25px;
  box-shadow: 0px 0px 8px #000;
  background-color: rgba(230, 238, 232, 0.5);
}

.gal-item__calendar {
  position: absolute;
  top: -35px;
  left: -35px;
  width: 70px;
  height: 70px;
  padding: 10px;
  background-color: #d9534f;
  border-radius: 50%;
  color: #fff;
}

.gal-item__calender--month {
  display: block;
  text-align: center;
}

.gal-item__calender--day {
  display: block;
  text-align: center;
  font-size: 28px;
}

.gal-item__info {
  text-align: center;
  margin-bottom: 10px;
}

.gal-item__info--title {
  margin-bottom: 10px;
}

.gal-item__info--title__link {
  display: inline-block;
  padding: 0px 5px;
  border-radius: 4px;
  background-color: #1ec7e6;
  color: #fff;
  font-size: 32px;
}

.gal-item__info--brief {
  display: flex;
  justify-content: space-between;
  width: 240px;
  margin: 0px auto;
  color: #fff;
}

.gal-item__info--brief span {
  display: inline-block;
  padding: 0.3rem;
  background-color: rgba(10, 10, 0, 0.7);
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
}

.gal-item__area {
  position: relative;
  padding: 10px 10px 10px 17px;
  background-color: rgba(230, 238, 232, 0.7);
  cursor: pointer;
}

.gal-item__area:hover .gal-item__area__text {
  height: calc(100% - 20px);
}

.gal-item__area__img {
  font-size: 0px;
}

.gal-item__area__text {
  position: absolute;
  top: 10px;
  left: 17px;
  width: calc(100% - 27px);
  height: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #bbb;
  font-size: 24px;
  transition: all 0.5s;
  overflow: hidden;
}

.gal-pager {
  display: flex;
  justify-content: center;
  height: 40px;
  margin-top: 30px;
  overflow: hidden;
}

.gal-pages {
  display: flex;
}

.gal-pages button {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  color: #4084c0;
  font-weight: bold;
  cursor: pointer;
}

.gal-pages .active button {
  border-color: #23aaf2;
  background: #23aaf2;
  color: #fff;
}

.gal-pages .gal-page--prev__btn,
.gal-pages .gal-page--next__btn {
  background: transparent;
}
</style>
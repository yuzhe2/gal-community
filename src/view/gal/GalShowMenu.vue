<template>
  <div class="gals">
    <div class="gals-mainstay">
      <GalMainMessage />
      <div class="notice-panel">
        <p>推荐使用谷歌浏览器，其他浏览器不能保证兼容性 解压密码:初音的青葱</p>
        <p>公告以后以后看留言板块</p>
      </div>
      <GalMainArticle :galData="galData" />
    </div>
    <div class="gals-slide-wrap">
      <GalAsideSearch @renderArticle="renderGal" />
      <GalAsideLogin />
      <GalAsideCommend 
        :list="imgList"
        :title="{name: '最新评论', icon: 'fa fa-comments'}"
      >
        <template v-slot:content="{ single }">
          <div class="article-panel__main__article-item__img">
            <img 
              :src="single.img" 
              class="article-panel__main__article-item__img__content"
            />
          </div>
          <p class="article-panel__main__article-item__text--comment">{{single.text}}</p>
        </template>
      </GalAsideCommend>
      <GalAsideCommend 
        :list="articleList"
        :title="{name: '随机文章', icon: 'fa fa-refresh'}"
      >
        <template v-slot:content="{ single }">
          <span class="article-panel__main__article-item__text">{{single}}</span>
        </template>
      </GalAsideCommend>
      <GalAsideSiteInfo />
    </div>
    <div 
      :class="searchState ? 'active' : null"
      class="tip-pop"
    >
      <div class="tip-pop-wrap">
        <div class="tip-pop__icon">
          <i class="fa fa-check"></i>
        </div>
        <div class="tip-pop__words">
          <p>搜索成功</p>
          <span>搜索到{{galData.length}}个</span>
        </div>
        <div class="tip-pop__close">
          <span>X</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { restData } from "src/common/util";

import galData from "../../tempData/galData";

import GalMainMessage from "./childComps/GalMainMessage";
import GalMainArticle from "./childComps/GalMainArticle";
import GalAsideCommend from "./childComps/GalAsideCommend";
import GalAsideSiteInfo from "./childComps/GalAsideSiteInfo";
import GalAsideLogin from "./childComps/GalAsideLogin";
import GalAsideSearch from "./childComps/GalAsideSearch";

export default {
  name: "GalShowMenu",
  components: {
    GalMainMessage,
    GalMainArticle,
    GalAsideCommend,
    GalAsideSiteInfo,
    GalAsideLogin,
    GalAsideSearch,
  },
  data() {
    return {
      galData: galData,
      imgList: [
        { 
          img: require("assets/img/discuss/img01.jpeg"), 
          text: " 我已经很久没过来看看了，今天想起来就冒了个泡。loli君的网站是我早期获取GAL资源... " 
        },
        { 
          img: require("assets/img/discuss/img02.jpg"), 
          text: "  好久没来了，前一阵子上来发现网站打不开了，伤心了半天。没想到又换了网址，祝lil... " 
        },
        { 
          img: require("assets/img/discuss/img03.jpg"), 
          text: " 求补 " 
        },
        { 
          img: require("assets/img/discuss/img04.jpg"), 
          text: " 弟弟的网站我用了几年了，现在虽然不经常逛，但也是我的青春，愿弟弟新的一年财源... " 
        },
        { 
          img: require("assets/img/discuss/img05.jpg"), 
          text: " 我已经很久没过来看看了，今天想起来就冒了个泡。loli君的网站是我早期获取GAL资源... " 
        },
        { 
          img: require("assets/img/discuss/img06.jpg"), 
          text: " 马上就过年了，祝各位同好新的一年心想事成! " 
        },
        { 
          img: require("assets/img/discuss/img07.jpg"), 
          text: " 新年快乐!青春还在 " 
        },
      ],
      articleList: [
        "Tiny Dungeon ~BLACK and WHITE~",
        "少女理论及其周边 -Ecole de Paris-",
        "少女理论及其之后的周边 -Belle Epoque-",
        "少女爱上姐姐2",
        "Bunny Black 2",
        "青春☆炸药",
        "离开的人们"
      ],
      searchState: false,
    }
  },
  methods: {
    renderGal(data) {
      this.galData = restData(data);
      this.searchState = true;
      setTimeout(() => this.searchState = false, 3000)
    },
  },
};
</script>

<style lang="scss">
.gals {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 100px auto;
}

.notice-panel {
  padding: 15px 20px;
  margin-bottom: 47px;
  background-color: rgba(230, 238, 232, 0.5);
  border-radius: 4px;
  box-shadow: 0px 0px 50px #000;
  color: #f61617;
  font-size: 14px;
}

.tip-pop {
  position: fixed;
  top: 60px;
  right: 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  transform: translateX(180px);
  transition: all 1s ease-in-out;
} 

.tip-pop.active {
  transform: translateX(0px);
}

.tip-pop-wrap {
  display: flex;
}

.tip-pop__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-top: 3px;
  border-radius: 50%;
  background-color: #67c23a;
  color: #fff;
  font-size: 12px;
}

.tip-pop__words {
  margin-left: 10px;
  margin-right: 4px;
}

.tip-pop__words p {
  margin-bottom: 6px;
  color: #333;
  font-weight: bold;
}

.tip-pop__words span {
  color: #666;
  font-size: 14px;
}

.tip-pop__close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-top: 3px;
  color: #91949a;
  font-size: 14px;
  cursor: pointer;
}
</style>
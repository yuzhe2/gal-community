<template>
  <div class="panel-recommend">
    <div class="panel-recommend--header">
      <a href="javascript:;" class="panel-recommend--header__link">
        <h2 class="panel-recommend--header__tit">最新文章</h2>
      </a>
      <a href="javascript:;" class="panel-recommend--header--more">
        <span class="panel-recommend--header--more__tit">更多</span>
      </a>
    </div>
    <div class="panel-recommend--body">
      <article 
        v-for="(item, index) in panelList"
        class="panel-recommend--body__item"
        :key="index"
      >
        <div class="panel-recommend--body__item__container">
          <a 
            @click="goDetail(index)"
            href="javascript:;" class="panel-recommend--body__item__link"
          >
            <img 
              :src="item.mainImg" 
              class="panel-recommend--body__item--img" 
            />
          </a>
          <div class="panel-recommend--body__item__info">
            <h3 class="panel-recommend--body__item__tit">{{item.title}}</h3>
            <div class="panel-recommend--body__item__upload">
              <a href="javascript:;" class="panel-recommend--body__item__upload__user">
                <img 
                :src="item.uploadImg" 
                class="panel-recommend--body__item__upload--img" 
                />
                <span class="panel-recommend--body__item__upload--name">{{item.uploadName}}</span>
              </a>
              <span class="panel-recommend--body__item__upload--time">{{item.uploadTime}}</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelRecommend",
  data() {
    return {
      panelItem: {
        mainImg: require("assets/img/panel/img02"),
        title: "【同人音声】耳舐め手コキレジェンズRJ362387",
        uploadImg: require("assets/img/user"),
        uploadName: "rich",
        uploadTime: "33分钟前",
      },
    };
  },
  computed: {
    panelList() {
      return Array(12).fill(this.panelItem);
    }
  },
  methods: {
    goDetail(index) {
      this.$router.push(`/detail/${index}`);
    }
  }
};
</script>

<style lang="scss">
.panel-recommend {
  display: inline-block;
  width: 726px;
  margin-top: 10px;
}

.panel-recommend--header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.panel-recommend--header__tit {
  font-size: 18px;
  color: #491612;
}

.panel-recommend--header__tit:hover {
  color: #bd2e22;
}

.panel-recommend--header--more {
  font-size: 12px;
  font-weight: normal;
  color: #db4437;
  line-height: 24px;
}

.panel-recommend--header--more:hover {
  color: #bd2e22;
} 

.panel-recommend--body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.panel-recommend--body__item {
  width: 175px;
  height: 182px;
}

.panel-recommend--body__item__container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.panel-recommend--body__item__link {
  display: block;
  height: 98px;
}

.panel-recommend--body__item__info {
  padding: 6px;
  background-color: rgba(255, 255, 255, .6);
}

.panel-recommend--body__item__tit {
  font-size: 12px;
  color: #491612;
  text-align: center;
  cursor: pointer;
}

.panel-recommend--body__item__tit:hover {
  color: #bd2e22;
}

.panel-recommend--body__item__upload {
  padding: 2px 0px 0px 22px;
  font-size: 12px;
}

.panel-recommend--body__item__upload--img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.panel-recommend--body__item__upload--name {
  color: #db4437;
}

.panel-recommend--body__item__upload--time {
  float: right;
  line-height: 24px;
  color: #959595;
}
</style>
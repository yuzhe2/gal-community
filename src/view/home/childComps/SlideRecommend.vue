<template>
  <div class="recommend-box-wrap">
    <div class="recommend-box">
      <div 
        v-for="(item, index) in recommendList" 
        class="recommend-box__item" 
        :key="index"
      >
        <a href="javascript:;" class="recommend-box__item__link">
          <img :src="item.img" alt="">
          <div class="recommend-box__item__info">
            <p class="recommend-box__item__info--name">{{item.name}}</p>
            <p class="recommend-box__item__info--time">
              {{item.time}}
              <span class="recommend-box__item__info--size">{{item.size}}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          name: "见习女友",
          time: "2019-7-26",
          size: "5.4GB",
          img: require("assets/img/recommend/img01"),
        },
        {
          id: "002",
          name: "红月摇曳的恋之心火",
          time: "2020-12-25",
          size: "2.8GB",
          img: require("assets/img/recommend/img02"),
        },
        {
          id: "003",
          name: "灵感满溢的甜蜜创想",
          time: "2020-9-25",
          size: "5.7GB",
          img: require("assets/img/recommend/img03"),
        },
        {
          id: "004",
          name: "Loopers 时廻者",
          time: "2021-5-28",
          size: "1.9GB",
          img: require("assets/img/recommend/img04"),
        },
        {
          id: "005",
          name: "不可视之药与坎坷的命运",
          time: "2021-11-12",
          size: "3.0GB",
          img: require("assets/img/recommend/img05"),
        },
        {
          id: "006",
          name: "金色Loveriche",
          time: "2017-12-22",
          size: "9.0GB",
          img: require("assets/img/recommend/img06"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.recommend-box-wrap {
  width: 420px;
  height: 202px;
  z-index: 1;
}

.recommend-box {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.recommend-box__item {
  position: relative;
  width: 131px;
  height: 96px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.recommend-box__item:hover .recommend-box__item__info {
  height: 44px;
  transition: all .5s;
}

.recommend-box__item:hover::before {
  opacity: 1;
  transition: all .5s;
}

.recommend-box__item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, .7);
  opacity: 0;
  transition: all .5s;
}

.recommend-box__item__link {
  display: block;
  height: 100%;
  font-size: 14px;
  color: #fff;
}

.recommend-box__item__info {
  position: absolute;
  width: 131px;
  height: 20px;
  bottom: 0px;
  left: 0px;
  transition: all .5s;
}

.recommend-box__item__info--name {
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recommend-box__item__info--size {
  float: right;
}
</style>
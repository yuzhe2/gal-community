<template>
  <div class="detail">
    <div class="detail-body">
      <div class="game-tit">
        <h3 class="game-tit__text">{{ name }}</h3>
      </div>
      <div class="game-screenshot__show">
        <img :src="gamePhoto" class="game-screenshot__img" />
      </div>
      <div class="game-introduction">
        <div class="game-introduction__brief">
          <span class="game-introduction__brief--tit">简介</span>
          <div class="game-introduction__brief--text">{{ brief }}</div>
        </div>
        <div class="game-introduction__time clearfix">
          <div class="game-introduction__time--sale">
            <span class="game-introduction__time--sale__tit">发售时间</span>
            {{ saleTime }}
          </div>
          <div class="game-introduction__time--sinic">
            <span class="game-introduction__time--sinic__tit">汉化时间</span>
            {{ sinicTime }}
          </div>
        </div>
        <div class="game-introduction__details">
          <span class="game-introduction__details__tit">详细介绍</span>
          <ul class="game-introduction__details__list">
            <li
              v-for="(item, index) in details"
              class="game-introduction__details__item"
              :key="index"
            >
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleGame } from "network/game";

import { restSingle } from "src/common/util";

import detailData from "../../tempData/detailData";

export default {
  name: "DetailShower",
  data() {
    return {
      id: null,
      name: null,
      gamePhoto: null,
      brief: null,
      saleTime: null,
      sinicTime: null,
      details: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    getSingleGame(this.id).then(res => {
      let singleData = restSingle(res.data.galData.data);
      this.name = singleData.name;
      this.gamePhoto = singleData.gamePhoto;
      this.brief = singleData.brief;
      this.saleTime = singleData.saleTime;
      this.sinicTime = singleData.sinicTime;
      this.details = singleData.details
        .split("。")
        .filter((val) => val !== "");
    });
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 900px){
  .game-screenshot__show {
    width: 100%;
  }
}

.detail {
  margin: 0px 30px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
}

.detail-body {
  padding: 20px;
  border: 1px solid #e3e3e3;
  background-color: rgba(245, 245, 245, 0.3);
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.game-tit {
  margin-bottom: 15px;
  font-size: 36px;
  color: #333;
  text-align: center;
}

.game-screenshot__show {
  width: 673px;
  margin: 0px auto 10px;
}

.game-introduction {
  padding: 10px;
}

.game-introduction__brief {
  margin-bottom: 20px;
}

.game-introduction__brief--tit {
  float: left;
  margin-right: 42px;
  color: #5bc0de;
}

.game-introduction__brief--text {
  display: inline-block;
  width: calc(100% - 105px);
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: rgba(230, 238, 232, 0.5);
  box-shadow: 0 1px 1px 1px rgba(227, 227, 227, 0.5);
  color: #3d4450;
  line-height: 25px;
}

.game-introduction__time {
  margin-bottom: 20px;
  color: #777;
}

.game-introduction__time--sale {
  float: left;
  width: 100px;
}

.game-introduction__time--sale__tit {
  display: inline-block;
  margin-bottom: 4px;
  color: #4285f4;
}

.game-introduction__time--sinic {
  float: right;
  width: 100px;
  text-align: center;
}

.game-introduction__time--sinic__tit {
  display: block;
  margin-bottom: 4px;
  color: #fbb405;
}

.game-introduction__details__tit {
  float: left;
  margin-right: 10px;
  color: #ea3445;
}

.game-introduction__details__list {
  display: inline-block;
  width: calc(100% - 126px);
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px rgba(227, 227, 227, 0.5);
  background-color: rgba(218, 234, 211, .7);
}

.game-introduction__details__item {
  color: #34a753;
  line-height: 25px;
  font-weight: 700;
}
</style>
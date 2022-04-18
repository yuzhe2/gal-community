<template>
  <div class="recommend-topic">
    <div class="recommend-topic__header">
      <div class="recommend-topic__header__tit">
        <h2 class="recommend-topic__tit--text">推荐话题</h2>
        <div class="recommend-topic__tit--more">
          <a href="javascript:;" class="recommend-topic__tit--more__link">更多</a>
        </div>
      </div>
    </div>
    <div class="recommend-topic__container">
      <ul class="recommend-topic__container__list">
        <li 
          v-for="(item, index) in topicList"
          class="recommend-topic__container__item"
          :key="index"
        >
          <a href="javascript:;" class="recommend-topic__container__item__link">
            <img 
              :src="item.img" 
              class="recommend-topic__container__item__link--img" 
            />
            <span class="recommend-topic__container__item__link--text">
              {{item.topicName}}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendTopic",
  data() {
    return {
      topicList: [
        { img: require("assets/img/topic/img01"), topicName: "冬日庆典" },
        { img: require("assets/img/topic/img02"), topicName: "v5.4彼岸银翼" },
        { img: require("assets/img/topic/img03"), topicName: "后崩坏书" },
        { img: require("assets/img/topic/img04"), topicName: "次生银翼" },
        { img: require("assets/img/topic/img05"), topicName: "往世乐土" },
      ],
    };
  },
};
</script>

<style lang="scss">
.recommend-topic {
  float: right;
  width: 200px;
  margin-top: 46px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, .6);
  overflow: hidden;
}

.recommend-topic__header__tit {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ebebeb;
}

.recommend-topic__tit--text {
  font-size: 16px;
  font-weight: 600;
  line-height: 200%;
}

.recommend-topic__tit--more__link {
  font-size: 14px;
  color: #333;
  line-height: 200%;
}

.recommend-topic__container {
  padding: 20px 20px 10px;
}

.recommend-topic__container__item {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
}

.recommend-topic__container__item__link {
  display: flex;
  align-items: center;
  height: 100%;
  color: #333;
}

.recommend-topic__container__item__link:hover {
  color: #00c3ff;
}

.recommend-topic__container__item__link--img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.recommend-topic__container__item__link--text {
  display: inline-block;
  margin-left: 10px;
}
</style>
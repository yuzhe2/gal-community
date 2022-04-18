<template>
  <div class="home">
    <div class="first-screen">
      <SwiperControl />
      <SlideRecommend />
    </div>
    <div class="recommend-area">
      <PanelRecommend />
      <RecommendTopic />
    </div>
  </div>
</template>

<script>
import SwiperControl from "component/common/swiper/SwiperControl";

import SlideRecommend from "view/home/childComps/SlideRecommend";
import PanelRecommend from "view/home/childComps/PanelRecommend";
import RecommendTopic from "view/home/childComps/RecommendTopic";

export default {
  name: "homeShower",
  components: {
    SwiperControl,
    SlideRecommend,
    PanelRecommend,
    RecommendTopic,
  },
  methods: {

  }
};
</script>

<style lang="scss">
.home {
  width: 1000px;
  margin: 0 auto;
}

.first-screen {
  display: flex;
  justify-content: space-between;
}

.inner-panel {

}

</style>
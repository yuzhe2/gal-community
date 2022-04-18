<template>
  <div class="detail--cartoon">
    <div class="detail--cartoon__header">
      <p class="detail--cartoon__header__title">
        {{title}}
      </p>
    </div>
    <div class="detail--cartoon__main">
      <ul class="detail--cartoon__main__imgs">
        <li 
          v-for="(item, index) in imgList"
          :key="index"
          class="detail--cartoon__main__img"
        >
          <img 
            :src="item" 
            class="detail--cartoon__main__img--context">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getSingleCartoonData } from "network/cartoon";

export default {
  name: "CartoonDetail",
  data() {
    return {
      title: "",
      imgList: [],
    }
  },
  created() {
    getSingleCartoonData(this.$route.params.id).then((res) => {
      this.title = res.data.galData.title;
      this.imgList = res.data.galData.imgList;
    });
  },
};
</script>

<style lang="scss">
.detail--cartoon {
  width: 1000px;
  margin: 100px auto;
}

.detail--cartoon__header {
  width: 920px;
  text-align: center;
  padding: 10px 0px;
  margin-left: 35px;
  background-color: rgba(255, 255, 255, .7);
  color: #333;
}

.detail--cartoon__main__imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.detail--cartoon__main__img {
  width: 300px;
  margin-right: 10px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
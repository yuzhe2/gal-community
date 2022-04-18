<template>
  <div class="cartoons">
    <div class="cartoons-mainstay">
      <CartoonMainArticle />
    </div>
    <div class="cartoons-aside">
      <CartoonAsideIndex :indexData="cartoonIndexData"/>
    </div>
  </div>
</template>

<script>
import cartoonIndexData from "../../tempData/cartoonIndexData";

import CartoonMainArticle from "./childComps/CartoonMainArticle";
import CartoonAsideIndex from "./childComps/CartoonAsideIndex";

export default {
  name: "CartoonMenu",
  data() {
    return {
      cartoonIndexData,
    }
  },
  components: {
    CartoonMainArticle,
    CartoonAsideIndex,
  },
}
</script>

<style lang="scss">
.cartoons {
  display: flex;
}

.cartoons-aside {
  padding-top: 20px;
  width: 300px;
}
</style>
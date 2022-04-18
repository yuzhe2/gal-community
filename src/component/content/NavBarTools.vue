<template>
  <div class="nav-tools">
    <div class="nav-tools__daily">
      <button class="nav-tools__daily--btn" @click.once="showToast">
        <span class="nav-tools__daily--btn__tit" ref="daily">签到</span>
      </button>
    </div>
    <div class="nav-tools__user">
      <a 
        href="javascript:;" 
        class="nav-tools__user__link"
      >
        <img :src="logo" alt="">
      </a>
    </div>
    <full-screen></full-screen>
  </div>
</template>

<script>
import fullScreen from "./childComps/fullScreen.vue";

export default {
  name: "NavBarTools",
  components: {
    fullScreen
  },
  data() {
    return {
      logo: require("assets/img/user.jpg"),
      histList: {},
    }
  },
  methods: {
    showToast(event) {
      event.target.className += " daily";
      this.$toast("您已签到成功");
      this.$refs.daily.innerHTML = "✔已签到";
    }
  },
  created() {
    this.histList = this.$store.state;
    console.log(this.histList);
  }
}
</script>

<style lang="scss">
  .nav-tools {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 100%; 
  }

  .nav-tools__daily--btn {
    display: block;
    width: 80px;
    height: 100%;
    background-color: rgb(219, 68, 55);
    color: #fff;
    cursor: pointer;
  }

  .nav-tools__daily--btn.daily {
    background-color: rgb(219, 68, 55, .5);;
  }

  .nav-tools__user {
    border-radius: 50%;
    overflow: hidden;
  }

  .nav-tools__user__link {
    display: block;
    width: 50px;
    height: 100%;
  }
</style>
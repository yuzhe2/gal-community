<template>
  <div class="toast" v-show="show" :class="showContent ?'fadein':'fadeout'">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "TheToast",
  data() {
    return {
      text: "",
      show: false,
    };
  },
};
</script>

<style lang="scss">
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background-image: linear-gradient(to right, #3a7ec1, #3a69c4, #3a7ec1);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "component/common/toast";
import "font-awesome/scss/font-awesome.scss";
import 'component/base';
import "src/common/scss/index.scss";

Vue.use(toast);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");



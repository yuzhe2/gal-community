import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    historicRecord: {
      gal: [],
      comic: [],
      cartoon: [],
    },
    isFullScreen: false, // 是否全屏
    loading: false
  },
  mutations: {
    addHist(state, payload) {
      state.historicRecord[payload.type].push(payload.data);
    },
    updateFullScreen(state, payload) {
      state.isFullScreen = payload;
    },
    // 开始请求时开始loading
    START_LOADING(state) {
      state.loading = true;
    },
    // 请求结束时loading结束
    END_LOADING(state) {
      state.loading = false;
    }
  }
})

export default store;
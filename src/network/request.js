import axios from "axios";
import store from "src/store";

export default function request(config) {
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
  });

  axios.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {}
  );

  axios.interceptors.response.use(
    (config) => {
      return config;
    },
    (err) => {}
  );

  return instance(config);
}

const loadingStart = showLoading => {
  if (showLoading === false) return;
  store.commit('START_LOADING');
}

const loadingEnd = showLoading => {
  if (showLoading === false) return;
  store.commit('END_LOADING');
}

/**
 * get方法 对应查询
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} showLoading [是否显示loading]
 * @param {Object} headers [header配置]
*/ 
export function get(url, params = {}, showLoading = true, headers = {}) {
  loadingStart(showLoading);
  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'GET',
      params,
      headers
    }).then(res => {
      loadingEnd(showLoading);
      resolve(res.data);
    }).catch(err => {
      loadingEnd(showLoading);
      resolve(err.data || err);
    })
  })
}

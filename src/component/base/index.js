import Vue from "vue";

// 需要挂载到原型上的方法
const protoMethods = ['message'];

// 所有组件出口文件
const files = require.context('.', true, /\.js$/);

files.keys().forEach(file => {
  // 组件
  const com = files(file);

  // 组件名
  const comNames = Object.keys(com);

  comNames.forEach(item => {
    if (protoMethods.includes(item)) {
      // 方法挂载到vue原型上,可以直接通过[this.$方法名]调用
      Vue.prototype['$' + item] = com[item];
    } else {
      // 注册为全局组件
      Vue.component(item, com[item]);
    }
  })
});


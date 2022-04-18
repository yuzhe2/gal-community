import vue from "vue";
import toast from "./TheToast";

const ToastConstructor = vue.extend(toast);

function showToast(text, duration = 4000) {
  const toastDom = new ToastConstructor({
    el: document.createElement("div"),
    data() {
      return {
        text: text,
        show: true,
        showContent: true,
      };
    },
  });

  document.body.appendChild(toastDom.$el);

  setTimeout(() => {
    toastDom.showContent = false;
  }, duration - 1250);
  setTimeout(() => {
    toastDom.show = false;
  }, duration);
}

function registerToast() {
  vue.prototype.$toast = showToast;
}

export default registerToast;

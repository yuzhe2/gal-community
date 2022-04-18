import { Message } from "element-ui";

// 默认配置
const defaultOpts = {
  message: "", // 消息内容
  type: "success", // 消息的类型
  duration: 3000, // 显示的时间
  // customClass: 'ui-message', // 自定义类名
  showClose: false, // 是否显示关闭按钮
  center: false, // 文字是否居中
}

export const message = options => {
  let _opts = {};
  if (typeof options === "string") {
    _opts = JSON.parse(JSON.stringify(defaultOpts));
    _opts.message = options;
  } else {
    _opts = Object.assign({}, defaultOpts, _opts);
  }

  return Message(_opts);
}

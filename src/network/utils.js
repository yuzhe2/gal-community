import { message } from "component/base/message";

// 提示错误信息
function ms(mes, type = 'error') {
  message({ message: mes, type });
}

export function dealWithResponse(response) {
  
}
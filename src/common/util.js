// 节流函数
function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 提取节点字符串中的文本
function extractText(nodeStr) {
  var oDiv = document.createElement("div");
  oDiv.innerHTML = nodeStr;
  return oDiv.innerText;
}

function formatDate(date, separator = "-") {
  const newDate = `${new Date(date).getFullYear()}${separator}
                      ${new Date(date).getMonth() + 1}${separator}
                      ${new Date(date).getDate()}`.replace(/\s/g, "");
  return newDate;
}

// 筛选搜索到的gal游戏数据的函数
function restData(data) {
  let restArr = [];

  data.forEach((val) => {
    let restItem = {};
    restItem.id = val.id;
    restItem.title = (val.listGameText.find(
      (val) => val.type === 1 && val.version === 2
    ) || {}).data;
    restItem.img = `https://gallibrary.pw/${val.listGamePhoto[0].url}`;
    restItem.content = extractText(
      val.listGameText.find((val) => val.type === 2 && val.version === 1).data
    );
    restItem.date = `${new Date(val.saleTime).getMonth()}月${new Date(
      val.saleTime
    ).getDate()}`;

    restArr.push(restItem);
  });

  return restArr;
}

// 用来筛选单个gal游戏数据的函数
function restSingle(data) {
  let restItem = {};
  restItem.saleTime = formatDate(data.saleTime);
  restItem.sinicTime = data.translatedSaleTime ? 
                        formatDate(data.translatedSaleTime) : "无汉化";
  restItem.gamePhoto = `https://gallibrary.pw/${data.listGamePhoto[0].url}`;
  restItem.name = data.listGameText.find(
    (val) => val.type === 1 && val.version === 2
  ).data;
  restItem.brief = extractText(
    data.listGameText.find((val) => val.type === 2 && val.version === 1).data
  );
  restItem.details = extractText(
    data.listGameText.find((val) => val.type === 2 && val.version === 2).data
  );
  return restItem;
}

export { debounce, restData, restSingle };

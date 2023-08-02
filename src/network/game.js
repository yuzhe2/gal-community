import request from "./request";

function getGame(opt = {}) {
  return request({
    url: "/gal",
    params: {
      page: opt.page || 1,
      keyWord: opt.keyWord || '',
    }
  })
}

function getSingleGame(id) {
  return request({
    url: "singleGal",
    params: {
      id: id,
    }
  })
}

export {
  getGame,
  getSingleGame,
}


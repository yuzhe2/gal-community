import request from "./request";

function getCartoonData(page) {
  return request({
    url: "/cartoon",
    params: {
      page,
    }
  })
}

function getSingleCartoonData(id) {
  return request({
    url: "/singleCartoon",
    params: {
      id,
    }
  })
} 

export {
  getCartoonData,
  getSingleCartoonData,
}
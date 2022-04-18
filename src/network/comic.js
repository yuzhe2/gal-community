import request from "./request";

export default function getComicData(opt) {
  return request({
    url: "/comic",
    params: {
      s: opt.s,
    }
  })
}
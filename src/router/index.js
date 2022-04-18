import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const HomeShower = () => import("view/home/HomeShower");
const DetailShower = () => import("view/detail/DetailShower");
const ComicList = () => import("view/comic/ComicList");
const ComicSearchList = () => import("view/comic/childComps/ComicSearchList");
const GalShowMenu = () => import("view/gal/GalShowMenu");
const CartoonMenu = () => import("view/cartoon/CartoonMenu");
const CartoonDetail = () => import("view/detail/CartoonDetail");

const routes = [
  {
    path: "/",
    component: HomeShower,
  },
  {
    path: "/detail/:id",
    component: DetailShower,
  },
  {
    path: "/detail/gal/:id",
    component: CartoonDetail,
  },
  {
    path: "/comic",
    component: ComicList,
  },
  {
    path: "/comic/search",
    component: ComicSearchList,
  },
  {
    path: "/gal",
    component: GalShowMenu,
  },
  {
    path: "/cartoon",
    component: CartoonMenu,
  }
]

const router = new VueRouter({
  // mode: "history",
  routes,
});

export default router;
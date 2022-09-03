import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const GiftView = () => import("../views/GiftView.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/:id",
    name: "gift",
    component: GiftView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/carta",
      name: "carta",
      component: () => import("../views/CartaView.vue"),
    },
    {
      path: "/promos",
      name: "promos",
      component: () => import("../views/PromosView.vue"),
    },
    {
      path: "/admindashboard",
      name: "admindashboard",
      component: () => import("../views/AdminDashboardView.vue"),
    },
    {
      path: "/ordermanagement",
      name: "ordermanagement",
      component: () => import("../views/OrderManagementView.vue"),
    },
    {
      path: "/kitchen",
      name: "kitchen",
      component: () => import("../views/KitchenView.vue"),
    },
    {
      path: "/motorist",
      name: "motorist",
      component: () => import("../views/MotoristView.vue"),
    },
  ],
});

export default router;

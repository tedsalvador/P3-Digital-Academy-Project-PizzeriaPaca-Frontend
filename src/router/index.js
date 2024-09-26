import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { requiresAdmin: false },
    },
    {
      path: "/carta",
      name: "carta",
      component: () => import("../views/CartaView.vue"),
      meta: { requiresAdmin: false },
    },
    {
      path: "/promos",
      name: "promos",
      component: () => import("../views/PromosView.vue"),
      meta: { requiresAdmin: false },
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
      meta: { requiresAdmin: true },
    },
    {
      path: "/kitchen",
      name: "kitchen",
      component: () => import("../views/KitchenView.vue"),
      meta: { requiresAdmin: false },
    },
  ],
});

export default router;

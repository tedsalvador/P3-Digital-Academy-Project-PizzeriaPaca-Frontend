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
      meta: { requiresAdmin: true },
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
    {
      path: "/motorist",
      name: "motorist",
      component: () => import("../views/MotoristView.vue"),
      meta: { requiresAdmin: false },
    },
    {
      path: "/pizzas",
      name: "pizzas",
      component: () => import("../components/Carta/PizzasCarta.vue"),
    },
    {
      path: "/bebidas",
      name: "bebidas",
      component: () => import("../components/Carta/BebidasCarta.vue"),
    },
    {
      path: "/postres",
      name: "postres",
      component: () => import("../components/Carta/PostresCarta.vue"),
    },
  ],
});

export default router;

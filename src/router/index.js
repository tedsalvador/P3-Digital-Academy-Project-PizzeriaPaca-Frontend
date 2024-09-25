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
      path: "/kitchen",
      name: "kitchen",
      component: () => import("../views/KitchenView.vue"),
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

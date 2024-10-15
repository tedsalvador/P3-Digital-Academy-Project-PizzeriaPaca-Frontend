import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { useAuthStore } from "../stores/auth";

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
      path: "/homelogueado",
      name: "homelogueado",
      component: () => import("../views/HomeLogueadoView.vue"),
      meta: { requiresAdmin: false },
    },
    {
      path: "/carta",
      name: "carta",
      component: () => import("../views/CartaView.vue"),
      meta: { requiresAdmin: false },
    },
    {
      path: "/cartalogueado",
      name: "cartalogueado",
      component: () => import("../views/CartaLogueadoView.vue"),
      meta: { requiresAdmin: false },
    },
    {
      path: "/promos",
      name: "promos",
      component: () => import("../views/PromosView.vue"),
      meta: { requiresAdmin: false },
    },
    {
      path: "/promoslogueado",
      name: "promoslogueado",
      component: () => import("../views/PromosLogueado.vue"),
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
      path: "/pizzaslogueado",
      name: "pizzaslogueado",
      component: () => import("../components/Carta/PizzasCartaLogueado.vue"),
    },
    {
      path: "/bebidas",
      name: "bebidas",
      component: () => import("../components/Carta/BebidasCarta.vue"),
    },
    {
      path: "/bebidaslogueado",
      name: "bebidaslogueado",
      component: () => import("../components/Carta/BebidasCartaLogueado.vue"),
    },
    {
      path: "/postres",
      name: "postres",
      component: () => import("../components/Carta/PostresCarta.vue"),
    },
    {
      path: "/postreslogueado",
      name: "postreslogueado",
      component: () => import("../components/Carta/PostresCartaLogueado.vue"),
    },
    {
      path: "/salescart",
      name: "salescart",
      component: () => import("../components/SalesCart.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const store = useAuthStore();

  if (localStorage.getItem("username") && store.user.username == "") {
    store.user.id = localStorage.getItem("id");
    store.user.username = localStorage.getItem("username");
    store.user.role = localStorage.getItem("role");
    store.user.isAuthenticated =
      localStorage.getItem("isAuthenticated") == "true" ? true : false;
    store.user.token = localStorage.getItem("token");
  }

  if (to.meta.requiresAuthAdmin && !(store.user.role == "ROLE_ADMIN")) {
    return {
      path: "/home",
    };
  }

  if (to.meta.requiresAuth && !store.user.isAuthenticated) {
    return {
      path: "/home",
    };
  }
});

export default router;

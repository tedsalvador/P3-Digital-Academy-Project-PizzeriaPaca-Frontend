import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { useAuthStore } from "../stores/auth";
import RegisterView from "../views/RegisterView.vue";
import Forms from "../views/Forms.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import DashboardView from "../views/DashboardView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      // path: "/",
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
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
      path: "/admin",
      component: DashboardLayout,
      meta: { requiresAuth: true, requiresAuthAdmin: true },
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: DashboardView,
        },
        {
          path: "forms",
          name: "forms",
          component: Forms,
        },
      ],
    }
  ],
});

router.beforeEach((to, from) => {
  const store = useAuthStore();

  if (localStorage.getItem("username") && store.user.username == "") {
    store.user.id = localStorage.getItem("id");
    store.user.username = localStorage.getItem("username");
    store.user.role = localStorage.getItem("role");
    store.user.isAuthenticated = localStorage.getItem("isAuthenticated") == "true" ? true : false;
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

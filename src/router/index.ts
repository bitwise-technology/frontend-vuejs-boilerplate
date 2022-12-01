import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginConfirmationView from "@/views/LoginConfirmationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login-confirmation/:login",
      name: "login-confirmation",
      component: LoginConfirmationView,
      props: true,
    },
  ],
});

export default router;

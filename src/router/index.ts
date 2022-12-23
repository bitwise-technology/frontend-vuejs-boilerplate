import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import LoginConfirmationView from "@/views/LoginConfirmationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/login-confirmation/:login",
      name: "login-confirmation",
      component: LoginConfirmationView,
    },
  ],
});

export default router;

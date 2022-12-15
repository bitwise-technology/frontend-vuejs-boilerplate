import { defineStore } from "pinia";
import type { User } from "@/types";

export const userStore = defineStore("user", {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    userGetter: (state) => state.user,
  },
  actions: {
    setUserAction(user: User) {
      this.user = user;
    },
  },
});

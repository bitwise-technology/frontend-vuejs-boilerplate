import { defineStore } from "pinia";
import type { User } from "@/types";

export const userStore = defineStore("user", {
  //State can be defined in two ways, passing a interface for state directly (example 1),
  //or passing interfaces only for the data inside state (example 2)

  //example 1
  state: (): User => ({
    name: "",
    password: "",
  }),

  //example 2
  /* state: () => ({
    user: {} as User,
  }), */
  getters: {
    userGetter: (state) => state,
  },
  actions: {
    setUserAction(user: User) {
      const { name, password } = user;

      this.name = name;
      this.password = password;
    },
  },
});

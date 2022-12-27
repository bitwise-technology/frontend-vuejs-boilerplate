import { defineStore } from "pinia";
import { api } from "@/services/api";
import type { AuthRequest, AuthResponse, User } from "@/types";

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

    async authWithEmailAndPasswordAction(
      authRequest: AuthRequest
    ): Promise<AuthResponse> {
      try {
        const response = await api.post(
          "/accounts:signInWithPassword",
          authRequest
        );

        return response;
      } catch (error: any) {
        return {
          status: error.response.status,
          message: error.response.data.error.message,
        };
      }
    },
  },
});

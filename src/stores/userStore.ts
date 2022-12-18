import { defineStore } from "pinia";
import { api } from "@/services/api";
import type { AuthRequest, AuthResponse, User } from "@/types";

export const userStore = defineStore("user", {
  state: () => ({
    user: {} as User,
    authResponse: {} as AuthResponse,
  }),
  getters: {
    userGetter: (state) => state.user,
  },
  actions: {
    setUserAction(user: User) {
      this.user = user;
    },

    setAuthResponseAction(authResponse: AuthResponse) {
      this.authResponse = authResponse;
    },

    async authWithEmailAndPasswordAction(
      authRequest: AuthRequest
    ): Promise<AuthResponse> {
      const response = await api.post(
        "/accounts:signInWithPassword",
        authRequest
      );

      //this.setAuthResponseAction(response.data);

      return response.data;
    },
  },
});

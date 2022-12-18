<template>
  <div id="login-component-container">
    <div class="input-container">
      <label for="user-input" class="label">User</label>
      <input type="text" id="user-input" class="input" v-model="user.email" />
    </div>

    <div class="input-container">
      <label for="password-input" class="label">Password</label>
      <input
        type="text"
        id="password-input"
        class="input"
        v-model="user.password"
      />
    </div>

    <button class="login-button" @click="handleLogin">Entrar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { mapActions } from "pinia";
import { userStore } from "../stores/userStore";

import type { User } from "../types";
import type { AxiosError } from "axios";

export default defineComponent({
  name: "LoginComponent",

  data() {
    return {
      user: {
        email: "",
        password: "",
      } as User,
    };
  },
  methods: {
    ...mapActions(userStore, [
      "setUserAction",
      "setAuthResponseAction",
      "authWithEmailAndPasswordAction",
    ]),

    navigateToLoginConfirmation() {
      this.$router.push({
        name: "login-confirmation",
        params: {
          login: this.user.email,
        },
      });
    },

    async handleLogin() {
      try {
        const auth = await this.authWithEmailAndPasswordAction(this.user);

        this.setAuthResponseAction(auth);
        this.navigateToLoginConfirmation();
      } catch (error) {
        const typedError = error as AxiosError;
        console.log(typedError);
      }
    },
  },
});
</script>

<style scoped>
#login-component-container {
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  background-color: rgb(170, 8, 170);
}

.input-container {
  display: flex;
  flex-direction: column;

  width: 50%;
}

.input-container:not(:last-child) {
  margin: 0 0 32px 0;
}

.input-container label {
  color: white;
  margin: 0 0 4px 0;
}

.input-container input {
  border-radius: 12px;
  height: 40px;
  border: 0;
  padding: 0 8px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
}

.login-button {
  width: 90px;
  height: 45px;

  border-radius: 12px;

  background-color: rgb(99, 204, 99);
  border: 0;
  color: white;
}
</style>

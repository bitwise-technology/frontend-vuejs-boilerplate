<template>
  <form
    id="login-component-container"
    class="bg-primary"
    @submit.prevent="handleLogin"
  >
    <div class="input-container">
      <label for="user-input" class="label text-light">User</label>
      <input type="text" id="user-input" class="input" v-model="user.email" />
    </div>

    <div class="input-container">
      <label for="password-input" class="label text-light">Password</label>
      <input
        type="text"
        id="password-input"
        class="input"
        v-model="user.password"
      />
    </div>

    <button-component
      id="login-button"
      class="bg-secondary text-light"
      type="submit"
      text="Entrar"
    >
      Entrar
    </button-component>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

import { mapActions } from "pinia";
import { userStore } from "../stores/userStore";

import type { AuthRequest, User } from "../types";

export default defineComponent({
  name: "LoginComponent",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      } as AuthRequest,
    };
  },
  methods: {
    ...mapActions(userStore, [
      "setUserAction",
      "authWithEmailAndPasswordAction",
    ]),

    navigateToLoginConfirmation() {
      this.$router.push({
        name: "login-confirmation",
      });
    },

    async handleLogin() {
      const auth = await this.authWithEmailAndPasswordAction(this.user);

      if (auth.status === 200 && auth.data) {
        const { displayName, email, idToken, localId } = auth.data;

        const user: User = {
          displayName,
          email,
          idToken,
          localId,
        };

        this.setUserAction(user);
        this.navigateToLoginConfirmation();
      } else {
        alert(`Status: ${auth.status}, Message: ${auth.message}`);
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
  margin: 0 0 4px 0;
}

.input-container input {
  border-radius: 12px;
  height: 40px;
  border: 0;
  padding: 0 8px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
}
</style>

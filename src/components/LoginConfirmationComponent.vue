<template>
  <div id="login-confirmation-component-container">
    <span>Bem vindo, {{ email }}!</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { userStore } from "../stores/userStore";

export default defineComponent({
  name: "LoginConfirmationComponent",

  data() {
    return {
      email: userStore().user.email,
    }
  }
});
</script>

<style scoped>
#login-confirmation-component-container {
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

  align-items: center;
  justify-content: center;
  background-color: rgb(170, 8, 170);
}

span {
  color: white;
  font-size: 18px;
}
</style>

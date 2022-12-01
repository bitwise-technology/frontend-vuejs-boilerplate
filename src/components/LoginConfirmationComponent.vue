<template>
  <div id="login-confirmation-component-container">
    <span>Bem vindo, {{ login }}!</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginConfirmationComponent",

  props: {
    login: { type: String, required: true },
  },
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

<template>
  <div id="login-component-container">
    <div class="input-container">
      <label for="user-input" class="label">User</label>
      <input type="text" id="user-input" class="input" />
    </div>

    <div class="input-container">
      <label for="password-input" class="label">Password</label>
      <input type="text" id="password-input" class="input" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",

  data() {
    return {};
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
</style>

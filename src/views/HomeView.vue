<template>
  <div id="home-view-container">
    <login-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginComponent from "../components/LoginComponent.vue";

export default defineComponent({
  components: {
    LoginComponent,
  },
});
</script>

<style scoped>
#home-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}
</style>

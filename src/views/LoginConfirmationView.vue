<template>
  <div id="home-view-container">
    <login-confirmation-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginConfirmationComponent from "../components/LoginConfirmationComponent.vue";

export default defineComponent({
  components: {
    LoginConfirmationComponent,
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

<template>
  <div id="homeview-container">
    <section class="presentation-container">
      <div class="images-container">
        <img src="@/assets/images/BitwiseLogoColor1.svg" alt="bitwise-logo" />
        <img src="@/assets/images/VuejsLogoColor1.svg" alt="vue-logo" />
      </div>

      <h1 class="title">Vue3 template by Bitwise</h1>

      <span class="description"
        >Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </span>
    </section>

    <section class="options-container">
      <div class="buttons-container">
        <button-component
          text="Exemplo de autenticação"
          textColor="white"
          bgColor="#91087D"
          :onPress="navigateToLoginView"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent from "../components/ButtonComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: { ButtonComponent },
  methods: {
    navigateToLoginView() {
      this.$router.push({
        name: "login",
      });
    },
  },
});
</script>

<style>
#homeview-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 8px;
  width: 100%;
  height: 100%;
}

section {
  height: 100%;
  width: auto;
  padding: 0 20px;
}

.presentation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px #b814a0;
}

.options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px #4dba87;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.buttons-container :not(:last-child) {
  margin-bottom: 24px;
}

.images-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: white;
  margin: 24px 0 12px 0;
}

.description {
  color: white;
  text-align: center;
}
</style>

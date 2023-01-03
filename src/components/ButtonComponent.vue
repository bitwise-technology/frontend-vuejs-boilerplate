<template>
  <button @click="handleOnPress">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    onPress: {
      type: Function,
    },
  },
  methods: {
    handleOnPress() {
      if (this.onPress) {
        this.onPress();
      }
    },
  },
});
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 120px;
  border: none;
  border-radius: 8px;
  padding: 0 16px;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  font-size: 16px;
}
</style>

<template>
  <button @click="handleOnPress" :style="`background-color: ${bgColor}`">
    <span :style="`color: ${textColor}`">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
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
  box-shadow: 4px 4px 10px;
}

span {
  font-size: 16px;
}
</style>

<template>
  <button @click="handleClick" class="button-app">
    {{ message }}
  </button>
</template>

<script>
export default {
  name: "ButtonApp",
  props: {
    message: {
      type: String,
      required: true,
      default: "Insert the button message",
    },
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<style scoped>
.button-app {
  background: var(--purplePrimary);
  border: 2px solid transparent;
  border-radius: 0.625rem;
  color: var(--whitePrimary);
  font-weight: 700;
  height: 3rem;
}
.button-app:hover,
.button-app:focus {
  border: 2px solid var(--purpleThird);
}
</style>

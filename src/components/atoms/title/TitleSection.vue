<template>
  <div class="title-section">
    <h2 class="title-section__title">{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
  props: {
    message: {
      type: String,
      default: "insert section text here",
      required: true,
    },
  },
  functional: true,
};
</script>

<style scoped>
.title-section__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--purplePrimary);
}
</style>

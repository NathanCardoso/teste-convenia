<template>
  <TheHeader />
  <div class="page-home">
    <FormApp  class="animeLeft" />
  </div>
</template>

<script>
import TheHeader from "../components/molecules/TheHeader.vue";
import FormApp from "../components/organisms/FormApp.vue";

export default {
  name: "ViewHome",
  components: {
    TheHeader,
    FormApp,
  },
};
</script>

<style scoped>
.page-app {
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 1rem;
  margin: 1.25rem 0;
  flex: 1;
}

@media screen and (max-width: 767px) {
  .page-app {
    display: flex;
    flex-direction: column;
  }
  .page-app .input-content {
    display: block;
  }
  .page-app .output-content {
    display: none;
  }
}
</style>

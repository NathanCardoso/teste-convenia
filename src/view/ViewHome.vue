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
.page-home {
  display: grid;
  grid-template-columns: 20rem 1fr;
  gap: 1rem;
  margin: 1.25rem 0;
  flex: 1;
}

@media screen and (max-width: 767px) {
  .page-home {
    display: flex;
    flex-direction: column;
  }
  .page-home .input-content {
    display: block;
  }
  .page-home .output-content {
    display: none;
  }
}
</style>

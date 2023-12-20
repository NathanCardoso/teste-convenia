<template>
  <TheHeader />
  <div class="page-home">
    <FormApp  class="animeLeft" />
		<MainOutputApp class="animeLeft" />
		<ButtonApp />
  </div>
</template>

<script>
import TheHeader from "../components/molecules/TheHeader.vue";
import FormApp from "../components/organisms/FormApp.vue";
import MainOutputApp from "../components/organisms/MainOutputApp.vue"
import ButtonApp from "../components/atoms/button/ButtonApp.vue"
import useResize from "../composable/useResize"

export default {
  name: "ViewHome",
  components: {
    TheHeader,
    FormApp,
		MainOutputApp,
		ButtonApp
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

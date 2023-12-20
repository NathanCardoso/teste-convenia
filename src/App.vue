<template>
  <LoadingApp :active="loading" />
  <ViewHome />
</template>

<script>
import ViewHome from "./view/ViewHome.vue";
import LoadingApp from "./components/atoms/loading/LoadingApp.vue";
import { useCalculatorStore } from "./stores/calculatorStore";

export default {
  name: "App",
  components: {
    LoadingApp,
    ViewHome,
  },
  setup() {
    const calculatorStore = useCalculatorStore();

    return {
      calculatorStore,
    };
  },
  computed: {
    loading() {
      return this.calculatorStore.getLoadingRequest;
    },
  },
};
</script>

<style scoped></style>

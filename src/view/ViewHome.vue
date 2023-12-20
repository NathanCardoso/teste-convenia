<template>
  <TheHeader />
  <div class="page-home">
    <FormApp class="animeLeft" />
    <MainOutputApp class="animeLeft" />
    <ButtonApp
      :message="buttonMessage"
      @clicked="pageActive"
      v-if="!inputContent || !outputContent"
    />
  </div>
</template>

<script>
import TheHeader from "../components/molecules/TheHeader.vue";
import FormApp from "../components/organisms/FormApp.vue";
import MainOutputApp from "../components/organisms/MainOutputApp.vue";
import ButtonApp from "../components/atoms/button/ButtonApp.vue";
import useResize from "../composable/useResize";
import { useCalculatorStore } from "../stores/calculatorStore";

export default {
  name: "ViewHome",
  components: {
    TheHeader,
    FormApp,
    MainOutputApp,
    ButtonApp,
  },
  data() {
    return {
      buttonMessage: "Ver Resultado",
      notification: false,
    };
  },
  setup() {
    const calculatorStore = useCalculatorStore();
    const { inputContent, outputContent, handleResize } = useResize();

    return {
      calculatorStore,
      inputContent,
      outputContent,
      handleResize,
    };
  },
  methods: {
    pageActive() {
      if (this.inputContent) {
        this.inputContent = false;
        this.outputContent = true;
        this.buttonMessage = "Ver Painel";
      } else {
        this.inputContent = true;
        this.outputContent = false;
        this.buttonMessage = "Ver Resultado";
      }
    },
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

<template>
  <TheHeader />
  <NotificationApp
    @finished="handleNotification"
    :errorRequest="errorRequest"
    v-if="notification || errorRequest"
  />
  <div class="page-home">
    <FormApp class="animeLeft" v-show="inputContent" />
    <MainOutputApp class="animeLeft" v-show="outputContent" />
    <ButtonApp
      :message="buttonMessage"
      @clicked="pageActive"
      v-if="!inputContent || !outputContent"
    />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../components/molecules/TheHeader.vue";
import NotificationApp from "../components/molecules/NotificationApp.vue";
import FormApp from "../components/organisms/FormApp.vue";
import MainOutputApp from "../components/organisms/MainOutputApp.vue";
import ButtonApp from "../components/atoms/button/ButtonApp.vue";
import TheFooter from "../components/molecules/TheFooter.vue";
import useResize from "../composable/useResize";
import { useCalculatorStore } from "../stores/calculatorStore";

export default {
  name: "ViewHome",
  components: {
    TheHeader,
    NotificationApp,
    FormApp,
    MainOutputApp,
    ButtonApp,
    TheFooter,
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
  computed: {
    currencyBRL() {
      return this.calculatorStore.getCurrencyValueBRL;
    },
    errorRequest() {
      return this.calculatorStore.getErrorRequest;
    },
  },
  watch: {
    currencyBRL() {
      setTimeout(() => {
        this.notification = true;
      }, 400);
    },
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
		handleNotification() {
      setTimeout(() => {
        this.notification = false;
        this.calculatorStore.setErrorRequest(false);
      }, 300);
    },
  },
  mounted() {
    this.handleResize();
  },
  created() {
    window.addEventListener("resize", this.handleResize);
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

<template>
  <form class="form-app">
    <InputBox message="Selecione a moeda">
      <div class="form-app__input-toggle">
        <ParagraphComponent message="Euro" />
        <InputToggle @toggle="requestRestConvertCurrencyBRL" />
        <ParagraphComponent message="Dólar" />
      </div>
    </InputBox>
    <InputBox message="Digite abaixo o valor">
      <InputMoney />
    </InputBox>
    <InputBox>
      <InputRange inputName="Gorgeta" :minValue="10" :maxValue="20" color="orange" />
    </InputBox>
    <InputBox>
      <InputRange inputName="Pessoas" :minValue="2" :maxValue="16" color="purple" />
    </InputBox>
  </form>
</template>

<script>
import InputBox from "../molecules/InputBox.vue";
import InputToggle from "../atoms/input/InputToggle.vue";
import InputMoney from "../atoms/input/InputMoney.vue";
import ParagraphComponent from "../atoms/paragraph/ParagraphComponent.vue";
import InputRange from "../atoms/input/InputRange.vue";
import { useCalculatorStore } from "../../store/CalculatorStore";
import useFetch from "../../composable/useFetch";
import { OBJECT_REQUEST_REST } from "../../api-params/convertCurrencyRest";
import { OBJECT_REQUEST_GRAPHQL } from "../../api-params/convertCurrencyGraphQl";

export default {
  name: "FormApp",
  components: {
    InputBox,
    InputToggle,
    InputMoney,
    ParagraphComponent,
    InputRange,
  },
  setup() {
		const calculatorStore = useCalculatorStore();
    const { data, error, loading, request } = useFetch();

    return {
			calculatorStore,
      data,
      error,
      loading,
      request,
    };
  },
	computed: {
    currentCurrency() {
      return this.calculatorStore.getCurrency;
    }
  },
  watch: {
    loading(newValue) {
      this.calculatorStore.setLoadingRequest(newValue);
    },
    error() {
      this.calculatorStore.setErrorRequest(true);
    },
  },
  methods: {
    async requestRestConvertCurrencyBRL() {
      const { urlApi, options } = OBJECT_REQUEST_REST();
      const url = urlApi + this.currentCurrency + "-BRL";

      await this.request(url, options);
      const { bid } = this.data[this.currentCurrency + "BRL"];
      const bidNumber = Number(bid);

      this.calculatorStore.setCurrencyValueBRL(bidNumber);
    },
    async requestGraphQlConvertCurrentBRL() {
      const { urlGraphQl, options } = OBJECT_REQUEST_GRAPHQL("BRL", this.currentCurrency);
      await this.request(urlGraphQl, options);
			console.log(this.data)
      const { rate } = this.data.data.currencyConversion.conversions[0];
      this.calculatorStore.setCurrencyValueBRL(rate);
    },
  },
	beforeMount() {
		this.requestRestConvertCurrencyBRL();
		// this.requestGraphQlConvertCurrentBRL();
	},
};
</script>

<style scoped>
.form-app {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.625rem;
  background: var(--whitePrimary);
  padding: 1rem;
  flex: 1;
}
.form-app__input-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>

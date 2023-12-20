<template>
  <div class="box-money">
    <ParagraphApp :message="message" class="box-money__paragraph" bold />
    <div class="box-money__wrapper">
      <span class="box-money__span" v-if="!currentBRL">{{ currentCurrency }}</span>
      <span class="box-money__span" v-else>R$</span>
      <div class="box-money__value">
        <ParagraphApp
          :message="formatCurrency(moneyValue, currencyAcronym, currentBRL)"
          color="purple-primary"
          bold
        />
      </div>
    </div>
  </div>
</template>

<script>
import ParagraphApp from "../atoms/paragraph/ParagraphApp.vue";
import { useCalculatorStore } from "../../stores/calculatorStore";
import useFormatCurrency from "../../composable/useFormatCurrency";

export default {
  name: "BoxMoney",
  props: {
    message: {
      type: String,
      required: true,
    },
    currentBRL: {
      type: Boolean,
    },
    moneyValue: {
      type: [String, Number],
      required: true,
    },
  },
  components: {
    ParagraphApp,
  },
  setup() {
    const calculatorStore = useCalculatorStore();
    const formatCurrency = useFormatCurrency();

    return {
      calculatorStore,
      formatCurrency,
    };
  },
  computed: {
    currentCurrency() {
      return this.calculatorStore.getCurrency === "EUR" ? "€" : "$";
    },
    currencyAcronym() {
      return this.calculatorStore.getCurrency;
    },
  },
};
</script>

<style scoped>
.box-money {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  width: 100%;
}
.box-money__paragraph {
  flex-shrink: 0;
}
.box-money__wrapper {
  background: var(--purpleSecondary);
  border-radius: 0.625rem;
  width: 100%;
  padding: 1rem 1rem 1rem 3.875rem;
  display: flex;
  position: relative;
}
.box-money__span {
  position: absolute;
  left: 0.625rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.3125rem;
  background: var(--purplePrimary);
  color: var(--whitePrimary);
}
.box-money__value {
  width: 100%;
  text-align: end;
}
</style>

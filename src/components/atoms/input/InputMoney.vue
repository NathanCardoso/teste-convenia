<template>
  <div class="input-money">
    <label for="money" class="input-money__label">Valor</label>
    <div class="input-money-wrap">
      <span class="input-money__span">{{ currentCurrency }}</span>
      <input
        type="text"
        id="money"
        class="input-money__input"
        v-model="inputValue"
        :onBlur="onBlur"
      />
    </div>
  </div>
  <p v-show="error" class="input-money__error">{{ error }}</p>
</template>

<script>
import { useCalculatorStore } from "../../../stores/calculatorStore";
import useForm from "../../../composable/useForm";

export default {
  name: "InputMoney",
  setup() {
    const calculatorStore = useCalculatorStore();
    const { inputValue, error, validate, onBlur } = useForm("number");

    return {
      calculatorStore,
      inputValue,
      error,
      validate,
      onBlur,
    };
  },
  computed: {
    currentCurrency() {
      const currency = this.calculatorStore.getCurrency;
      return currency === "USD" ? "$" : "€";
    },
    currencyAcronym() {
      return this.calculatorStore.getCurrency;
    },
  },
  watch: {
    inputValue(newValue) {
      const setConditionalValidate = this.validate(newValue);
      if (setConditionalValidate) this.setMoneyStore(Number(newValue));
    },
  },
  methods: {
    setMoneyStore(moneyValue) {
      this.calculatorStore.setCurrencyValue(moneyValue);
    },
  },
};
</script>

<style scoped>
.input-money {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.input-money__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.input-money-wrap {
  position: relative;
  max-width: max-content;
}
.input-money__label {
  color: var(--grayThird);
  font-size: 1rem;
}
.input-money__input {
  font-size: 1rem;
  font-weight: 600;
  text-align: end;
  color: var(--purplePrimary);
  width: 6.25rem;
  height: 2rem;
  background: var(--purpleSecondary);
  border: none;
  border-radius: 0.625rem;
  padding: 0 1.25rem 0 2.5rem;
  outline: none;
  border: 1px solid transparent;
  transition: all 0.2s;
}
.input-money__input:hover,
.input-money__input:focus {
  border: 1px solid var(--purplePrimary);
}
.input-money__span {
  width: 1.5rem;
  height: 1.5rem;
  background: var(--purplePrimary);
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--whitePrimary);
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
}
.input-money__input::-webkit-outer-spin-button,
.input-money__input::-webkit-inner-spin-button {
  display: none;
}
.input-money__error {
  color: var(--redPrimary);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>

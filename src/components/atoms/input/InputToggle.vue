<template>
  <div class="toggle">
    <input type="checkbox" id="toggle" class="toggle__input" v-model="currency" />
    <label for="toggle" class="toggle__label"></label>
  </div>
</template>

<script>
import { useCalculatorStore } from "../../../stores/calculatorStore";

export default {
  name: "InputToggle",
  data() {
    return {
      currency: false,
    };
  },
  setup() {
    const calculatorStore = useCalculatorStore();

    return {
      calculatorStore,
    };
  },
  watch: {
    currency() {
      this.currencyToggle();
      this.$emit("toggle");
    },
  },
  methods: {
    currencyToggle() {
      const currentCurrency = this.currency ? "USD" : "EUR";
      this.calculatorStore.setCurrency(currentCurrency);
    },
  },
};
</script>

<style scoped>
.toggle__input {
  display: none;
}
.toggle__label {
  position: relative;
  display: inline-block;
  width: 1.75rem;
  height: 1rem;
  background-color: var(--purplePrimary);
  border-radius: 0.625rem;
  border: 2px solid gray;
}
.toggle__label::after {
  content: "";
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: var(--whitePrimary);
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  transition: all 0.3s;
}
.toggle__input:checked + .toggle__label::after {
  left: 50%;
}
</style>

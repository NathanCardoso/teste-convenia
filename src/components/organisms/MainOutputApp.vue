<template>
  <main class="main-app">
    <HeaderSection />
    <BoxOutResult>
      <template v-slot:paragraph>
        <ParagraphApp
          :message="'valor da conta em ' + currentCurrency"
          color="purple-third"
        />
      </template>
      <template v-slot:money-value>
        <BoxMoney message="Conta" :moneyValue="moneyValue" />
      </template>
    </BoxOutResult>
    <div class="main-app__columns-top">
      <BoxOutResult>
        <template v-slot:paragraph>
          <ParagraphApp
            :message="'Valor da gorgeta em ' + currentCurrency"
            color="purple-third"
          />
        </template>
        <template v-slot:money-value>
          <BoxMoney message="Gorjeta" :moneyValue="tipMoney" />
        </template>
      </BoxOutResult>
      <BoxOutResult>
        <template v-slot:paragraph>
          <ParagraphApp
            :message="'Valor por pessoa em ' + currentCurrency"
            color="purple-third"
          />
        </template>
        <template v-slot:money-value>
          <BoxMoney message="Por pessoa" :moneyValue="forPeoples" />
        </template>
      </BoxOutResult>
    </div>
    <div class="main-app__columns-bottom">
      <BoxOutResult>
        <template v-slot:money-value>
          <BoxMoney
            :message="'Total em ' + currentCurrency"
            :moneyValue="totalCurrentMoney"
          />
        </template>
      </BoxOutResult>
      <BoxOutResult>
        <template v-slot:money-value>
          <BoxMoney message="Total em reais" :moneyValue="accountTotalBRL" currentBRL />
        </template>
      </BoxOutResult>
    </div>
  </main>
</template>

<script>
import HeaderSection from "../molecules/HeaderSection.vue";
import BoxOutResult from "../molecules/BoxOutResult.vue";
import ParagraphApp from "../atoms/paragraph/ParagraphApp.vue";
import BoxMoney from "../molecules/BoxMoney.vue";
import { useCalculatorStore } from "../../stores/calculatorStore";

export default {
  name: "MainOutputApp",
  components: {
    HeaderSection,
    BoxOutResult,
    ParagraphApp,
    BoxMoney,
  },
  setup() {
    const calculatorStore = useCalculatorStore();

    return {
      calculatorStore,
    };
  },
  computed: {
    currentCurrency() {
      const currency = this.calculatorStore.getCurrency;
      const messageCurrency = currency === "EUR" ? "euro" : "dólar";
      return messageCurrency;
    },
    moneyValue() {
      const moneyValue = this.calculatorStore.getCurrencyValue;
      return moneyValue ? Number(moneyValue) : 0;
    },
    tipMoney() {
      const tipValue = this.calculatorStore.getTip;
      if (tipValue) {
        const tipResult = (this.moneyValue * tipValue) / 100;
        return tipResult;
      } else {
        return 0;
      }
    },
    forPeoples() {
      const peopleValue = this.calculatorStore.getPeopeles;
      if (peopleValue) {
        const accountTotal = this.moneyValue + this.tipMoney;
        const forPeopleValueResult = accountTotal / peopleValue;
        return forPeopleValueResult;
      } else {
        return 0;
      }
    },
    totalCurrentMoney() {
      const currentMoney = this.calculatorStore.getCurrencyValue;
      if (currentMoney) {
        const tipMoney = this.tipMoney;
        const totalMoney = currentMoney + tipMoney;
        return totalMoney;
      } else {
        return 0;
      }
    },
    currentMoneyBRL() {
      const currencyBRL = this.calculatorStore.getCurrencyValueBRL;
      return currencyBRL;
    },
    accountTotalBRL() {
      const totalAccountBRL = this.totalCurrentMoney * this.currentMoneyBRL;
      return totalAccountBRL;
    },
  },
};
</script>

<style scoped>
.main-app {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.625rem;
  background: var(--whitePrimary);
  padding: 1rem;
  flex: 1;
}
.main-app__columns-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  border-bottom: 2px solid var(--whiteSecondary);
}
.main-app__columns-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  position: relative;
}
.main-app__columns-bottom::after {
  content: "";
  display: block;
  position: absolute;
  width: 0.125rem;
  height: 2.8125rem;
  background: var(--whiteSecondary);
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 1024px) {
  .main-app {
    gap: 0;
  }
  .main-app__columns-top {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .main-app__columns-bottom {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .main-app__columns-bottom::after {
    display: none;
  }
}
</style>

<template>
  <div :class="notificationApp">
    <ParagraphApp :message="messageParagraph" :color="notificationColor" bold />
  </div>
</template>

<script>
import ParagraphApp from "../atoms/paragraph/ParagraphApp.vue";
import { useCalculatorStore } from "../../store/CalculatorStore";

export default {
  name: "NotificationApp",
  props: {
    errorRequest: {
      type: Boolean,
    },
  },
  components: {
    ParagraphApp,
  },
  data() {
    return {
      notificationApp: "notification-app--animation-start",
    };
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
      return currency === "USD" ? "dólar" : "euro";
    },
    currencyValue() {
      return this.calculatorStore.getCurrencyValueBRL.toFixed(2);
    },
    messageSuccess() {
      return `A cotação do ${this.currentCurrency} hoje é: R$ ${this.currencyValue}`;
    },
    messageError() {
      return `Não foi possível obter a cotação do ${this.currentCurrency}, tente novamente mais tarde.`;
    },
    messageParagraph() {
      return this.errorRequest ? this.messageError : this.messageSuccess;
    },
    notificationColor() {
      return this.errorRequest ? "red-primary" : "purple-primary";
    },
  },
  mounted() {
    setTimeout(() => {
      this.notificationApp = "notification-app--animation-end";
      this.$emit("finished");
    }, 5000);
  },
};
</script>

<style scoped>
.notification-app--animation-start {
  background: var(--whitePrimary);
  border: 2px solid var(--purplePrimary);
  border-radius: 0.625rem;
  padding: 1rem 1.25rem;
  width: max-content;
  position: absolute;
  right: 1.5rem;
  z-index: 999;
  max-width: 20rem;
  animation: animeStart 0.5s forwards;
}
.notification-app--animation-end {
  background: var(--whitePrimary);
  border: 2px solid var(--purplePrimary);
  border-radius: 0.625rem;
  padding: 1rem 1.25rem;
  width: max-content;
  position: absolute;
  right: 1.5rem;
  z-index: 999;
  max-width: 20rem;
  animation: animeEnd 0.5s forwards;
}

@keyframes animeStart {
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(40%);
  }
}

@keyframes animeEnd {
  from {
    opacity: 1;
    transform: translateY(40%);
  }
  to {
    opacity: 0;
    transform: translateY(-50%);
    display: none;
  }
}

@media screen and (max-width: 479px) {
  .notification-app--entrance-animation,
  .notification-app--exit-animation {
    max-width: 14.0625rem;
  }
}
</style>

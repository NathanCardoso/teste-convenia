<template>
  <div class="input-range">
    <label for="range" class="input-range__label">
      {{ inputName }}
      <span :class="normalizeClass('input-range__span--')">
        {{ AddOrNotPercentValueRangeValue }}
      </span>
    </label>
    <div class="input-range__wrapper">
      <ParagraphApp :message="normalizeMessage(minValue)" />
      <input
        type="range"
        id="range"
        :min="minValue"
        :max="maxValue"
        v-model="rangeValue"
        :class="normalizeClass('input-range__input--')"
      />
      <ParagraphApp :message="normalizeMessage(maxValue)" />
    </div>
  </div>
</template>

<script>
import { useCalculatorStore } from "../../../stores/calculatorStore";
import ParagraphApp from "../paragraph/ParagraphApp.vue";

export default {
  name: "InputRange",
  props: {
    inputName: {
      type: String,
      required: true,
      validator: (value) => {
        return ["Gorgeta", "Pessoas"].includes(value);
      },
    },
    maxValue: {
      type: Number,
      required: true,
      validator: (value) => {
        return [16, 20].includes(value);
      },
    },
    minValue: {
      type: Number,
      required: true,
      validator: (value) => {
        return [2, 10].includes(value);
      },
    },
    color: {
      type: String,
      required: true,
      validator: (value) => {
        return ["orange", "purple"].includes(value);
      },
    },
  },
  components: {
    ParagraphApp,
  },
  data() {
    return {
      rangeValue: this.minValue,
    };
  },
  setup() {
    const calculatorStore = useCalculatorStore();

    return {
      calculatorStore,
    };
  },
  computed: {
    AddOrNotPercentValueRangeValue() {
      return this.inputName === "Gorgeta" ? this.rangeValue + "%" : this.rangeValue;
    },
  },
  watch: {
    AddOrNotPercentValueRangeValue() {
      this.inputName === "Gorgeta"
        ? this.calculatorStore.setTip(Number(this.rangeValue))
        : this.calculatorStore.setPeopeles(Number(this.rangeValue));
    },
  },
  methods: {
    normalizeClass(valueClass) {
      return valueClass + this.color;
    },
    normalizeMessage(messageValue) {
      return this.inputName === "Gorgeta" ? messageValue + "%" : messageValue;
    },
  },
};
</script>

<style scoped>
.input-range {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}
.input-range__label {
  font-size: 1rem;
  color: var(--grayThird);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.input-range__span--orange {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background: var(--orangeSecondary);
  padding: 0.5rem;
  border-radius: 0.3125rem;
  color: var(--orangePrimary);
  font-size: 0.875rem;
  font-weight: 700;
}
.input-range__span--purple {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background: var(--purpleSecondary);
  padding: 0.5rem;
  border-radius: 0.3125rem;
  color: var(--purplePrimary);
  font-weight: 700;
}
.input-range__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.input-range__input--orange {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: var(--orangeSecondary);
  outline: none;
}
.input-range__input--orange::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: var(--orangePrimary);
  cursor: pointer;
}
.input-range__input--purple {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: var(--purpleSecondary);
  outline: none;
}
.input-range__input--purple::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: var(--purplePrimary);
  cursor: pointer;
}
</style>

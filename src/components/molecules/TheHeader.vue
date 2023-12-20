<template>
  <header class="header">
    <div class="header__text">
      <TitleHeader />
      <ParagraphHeader />
    </div>
    <div class="header__image">
      <CalculatorIcon />
    </div>
  </header>
</template>

<script>
import TitleHeader from "../atoms/title/TitleHeader.vue";
import ParagraphHeader from "../atoms/paragraph/ParagraphHeader.vue";
import CalculatorIcon from "../atoms/svg/CalculatorIcon.vue";

export default {
  functional: true,
  components: {
    TitleHeader,
    ParagraphHeader,
    CalculatorIcon,
  },
};
</script>

<style scoped>
.header {
  max-width: 100%;
  padding: 40px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background: var(--purpleSecondary);
  border-radius: 0.625rem;
  margin-top: 1.25rem;
}
.header .header__text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

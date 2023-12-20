<template>
  <header class="header-section">
    <TitleSection message="Valor da Conta" />
    <ParagraphApp message="Veja abaixo os valores convertidos." color="purple-third" />
  </header>
</template>

<script>
import ParagraphApp from "../atoms/paragraph/ParagraphApp.vue";
import TitleSection from "../atoms/title/TitleSection.vue";

export default {
  name: "HeaderSection",
  functional: true,
  components: {
    ParagraphApp,
    TitleSection,
  },
};
</script>

<style scoped>
.header-section {
  background: var(--whiteSecondary);
  padding: 1.25rem;
  border-radius: 0.625rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.header-section__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--purplePrimary);
}
.header-section__paragraph {
  font-size: 1rem;
  font-weight: 500;
  color: var(--purpleThird);
}
</style>

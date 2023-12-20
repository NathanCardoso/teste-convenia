<template>
  <footer class="footer">
    <CalculatorIcon />
    <ParagraphApp
      message="Le Tip. Alguns direitos reservados"
      color="white-primary"
    />
  </footer>
</template>

<script>
import CalculatorIcon from "../atoms/svg/CalculatorIcon.vue";
import ParagraphApp from "../atoms/paragraph/ParagraphApp.vue";

export default {
  name: "TheFooter",
  components: {
    CalculatorIcon,
    ParagraphApp,
  },
  functional: true,
};
</script>

<style scoped>
.footer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--purplePrimary);
  max-width: 100%;
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 0.625rem;
}
</style>

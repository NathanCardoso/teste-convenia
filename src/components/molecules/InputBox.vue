<template>
  <div class="input-box">
    <ParagraphApp :message="message" v-if="!!message" />
    <slot></slot>
  </div>
</template>

<script>
import ParagraphApp from "../atoms/paragraph/ParagraphApp.vue";

export default {
  name: "InputBox",
  props: {
    message: {
      type: String,
    },
  },
  components: {
    ParagraphApp,
  },
};
</script>

<style scoped>
.input-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--whiteSecondary);
  padding: 0.5rem 3.625rem;
  min-height: 5rem;
  border-radius: 0.625rem;
  box-sizing: border-box;
  flex: 1;
}

@media screen and (max-width: 767px) {
  .input-box {
    padding: 0.5rem 0.625rem;
  }
}
</style>

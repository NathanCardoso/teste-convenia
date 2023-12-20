<template>
  <div class="box-result">
    <slot name="paragraph"></slot>
    <slot name="money-value"></slot>
  </div>
</template>

<script>
export default {
  name: "BoxOutResult",
	functional: true
};
</script>

<style scoped>
.box-result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.25rem 1.875rem;
}

@media screen and (max-width: 767px) {
  .box-result {
    padding: 1.25rem 0;
  }
}
</style>

<template>
  <div class="loading" :class="loadingClass">
    <span class="loading__span"></span>
    <span class="loading__span"></span>
    <span class="loading__span"></span>
    <span class="loading__span"></span>
  </div>
</template>

<script>
export default {
  name: "PageLoading",
	props: {
		active: {
			type: Boolean
		}
	},
	computed: {
		loadingClass() {
			return this.active ? "loading--start" : "loading--end"
		}
	},
	functional: true,
};
</script>

<style scoped>
.loading {
  text-align: center;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	background: var(--whitePrimary);
}
.loading.loading--start {
	animation: animeStart 0.2s forwards;
}
.loading.loading--end {
	animation: animeEnd 0.3s forwards;
}

@keyframes animeStart {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes animeEnd {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
}

.loading__span {
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 0.625rem;
  background: var(--purplePrimary);
  margin: 0.25rem;
  animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}
.loading__span:nth-child(1) {
  animation-delay: 0.1s;
}
.loading__span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading__span:nth-child(3) {
  animation-delay: 0.3s;
}
.loading__span:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 1.875rem, 0);
  }
}
</style>
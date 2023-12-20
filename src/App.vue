<template>
	<LoadingApp :active="loading"/>
	<ViewHome />
</template>

<script>
import LoadingApp from "./components/atoms/loading/LoadingApp"
import ViewHome from "./view/ViewHome.vue"
import { useCalculatorStore } from "./stores/calculatorStore";

export default {
	name: "App",
	components: {
		ViewHome,
		LoadingApp
	},
	setup() {
		const calculatorStore = useCalculatorStore()

		return {
			calculatorStore
		}
	},
	computed: {
		loading() {
			return this.calculatorStore.getLoadingRequest
		}
	},
	mounted() {
		console.log(this.loading)
		setTimeout(() => {
			this.lalala = false
		}, 5000)
	}
}
</script>

<style scoped>
</style>
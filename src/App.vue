<template>
	<LoadingApp />
	<ViewHome />
</template>

<script>
import LoadingApp from "./components/atoms/loading/LoadingApp"
import ViewHome from "./view/ViewHome.vue"

export default {
	name: "App",
	components: {
		ViewHome,
		LoadingApp
	}
}
</script>

<style scoped>
</style>
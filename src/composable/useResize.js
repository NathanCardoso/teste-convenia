import { ref } from "vue"

function useResize() {
	const inputContent = ref(true)
	const outputContent = ref(true)

	const handleResize = () => {
		const { innerWidth } = window;

		if (innerWidth > 767) {
			outputContent.value = true;
			inputContent.value = true;
		} else {
			outputContent.value = false;
		}
	}

	return {
		inputContent,
		outputContent,
		handleResize
	}
}

export default useResize
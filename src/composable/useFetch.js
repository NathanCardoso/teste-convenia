import { ref } from "vue"

export function useFetch() {
	const data = ref(null)
	const error = ref(null)
	const loading = ref(false)

	const request = async (url, options) => {
		let response
		let responseJson
		loading.value = true

		try {
			response = await fetch(url, options)
			responseJson = await response.json()
			if (!response.ok) throw new Error("Ocorreu um erro inesperado.")

		} catch (err) {
			error.value = err
		} finally {
			data.value = responseJson
			loading.value = false
		}
	}

	return {
		data,
		error,
		loading,
		request
	}
}

export default useFetch
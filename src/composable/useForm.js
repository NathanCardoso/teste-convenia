import { ref } from "vue"

const types = {
	number: {
		initialVariable: "0.00",
		regex: /\d+(\.\d*)?$/,
		message: 'Utilize apenas números.'
	}
}

function useForm(type) {
	const inputValue = ref(types[type].initialVariable)
	const error = ref(null)

	function validate(data) {
		if (type === false) return true
		if (data.length === 0) {
			error.value = "Preencha um valor"
			return false
		} else if (types[type] && !types[type].regex.test(data)) {
			error.value = types[type].message
			return false
		} else {
			error.value = null
			return true
		}
	}

	return {
		inputValue,
		error,
		validate: () => validate(inputValue.value),
		onBlur: () => validate(inputValue.value)
	}
}

export default useForm
const api = import.meta.env.VITE_BASE_URL

export function OBJECT_REQUEST_REST() {
	return {
		urlApi: api,
		options: {
			method: "GET"
		}
	}
}
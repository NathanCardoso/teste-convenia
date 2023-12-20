import { defineStore } from "pinia";

export const useCalculatorStore = defineStore("CalculatorStore", {
	state() {
		return {
			currency: "EUR",
			currencyValue: 0,
			tip: 10,
			peoples: 2,
			request: {
				errorRequest: false,
				loading: true,
				currencyValueBRL: 0,
			}
		}
	},
	actions: {
		setCurrency(currentCurrency) {
			this.currency = currentCurrency
		},
		setCurrencyValue(valueCurrency) {
			this.currencyValue = valueCurrency
		},
		setCurrencyValueBRL(valueCurrencyBRL) {
			this.request.currencyValueBRL = valueCurrencyBRL
		},
		setTip(valueTip) {
			this.tip = valueTip
		},
		setPeopeles(valuePeoples) {
			this.peoples = valuePeoples
		},
		setLoadingRequest(loading) {
			this.request.loading = loading
		},
		setErrorRequest(err) {
			this.request.errorRequest = err
		}
	},
	getters: {
		getCurrency() {
			return this.currency
		},
		getCurrencyValue() {
			return this.currencyValue
		},
		getCurrencyValueBRL() {
			return this.request.currencyValueBRL
		},
		getTip() {
			return this.tip
		},
		getPeopeles() {
			return this.peoples
		},
		getLoadingRequest() {
			return this.request.loading
		},
		getErrorRequest() {
			return this.request.errorRequest
		}
	}
})
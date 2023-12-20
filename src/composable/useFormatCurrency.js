function useFormatCurrency() {
	return (money, acronymCurrent, currentBRL) => {
		if (currentBRL) {
			const languageCurrency = acronymCurrent === "EUR" ? "de-DE" : "en-US";
			const format = money.toLocaleString(languageCurrency, {
				style: "currency",
				currency: acronymCurrent,
			});
			return acronymCurrent === "EUR"
				? format.replace("€", "")
				: format.replace("$", "");
		} else {
			const format = money.toLocaleString("pt-BR", {
				style: "currency",
				currency: "BRL",
			});
			return format.replace("R$", "");
		}
	}
}

export default useFormatCurrency
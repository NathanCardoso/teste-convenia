const apiGraphQl = import.meta.env.VITE_BASE_URL_GRAPHQL;

export function OBJECT_REQUEST_GRAPHQL(currency, convertCurrency) {
  const query = `
    {
      currencyConversion(baseCurrency: "${currency}", convertCurrencies: ["${convertCurrency}"]) {
        conversions {
          rate
        }
      }
    }
  `;

  return {
    urlGraphQl: apiGraphQl,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    }
  };
}

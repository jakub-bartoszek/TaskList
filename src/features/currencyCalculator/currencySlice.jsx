import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
	name: "currency",
	initialState: {
		result: {
			inputCurrency: "EUR",
			outputCurrency: "EUR",
			value: 0.0
		}
	},
	reducers: {
		changeInputCurrency: ({ result }, { payload: inputCurrency }) => {
			result.inputCurrency = inputCurrency;
		},
		changeOutputCurrency: (
			{ result },
			{ payload: outputCurrency }
		) => {
			result.outputCurrency = outputCurrency;
		},
		calculateResult: (
			{ result },
			{ payload: [ratesData, amount] }
		) => {
			result.value =
				(amount * ratesData.rates[result.outputCurrency]) /
				ratesData.rates[result.inputCurrency];
		}
	}
});

export const {
	changeInputCurrency,
	changeOutputCurrency,
	calculateResult
} = currencySlice.actions;

export const selectInputCurrency = (state) =>
	state.result.result.inputCurrency;
export const selectOutputCurrency = (state) =>
	state.result.result.outputCurrency;
export const selectResultValue = (state) => state.result.result.value;

export default currencySlice.reducer;

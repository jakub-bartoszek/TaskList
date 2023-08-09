import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { Input } from "../../common/Input/styled";
import {
	Button,
	SubmitButton,
	DropDownContent,
	Options,
	Option,
	Output,
	Select,
	CurrencyInput,
	CurrencyOutput,
	RatesDate
} from "./styled";
import { useRatesData } from "./useRatesData";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	calculateResult,
	changeInputCurrency,
	changeOutputCurrency,
	selectInputCurrency,
	selectOutputCurrency,
	selectResultValue
} from "./currencySlice";

function CurrencyCalculator() {
	const dispatch = useDispatch();
	const resultValue = useSelector(selectResultValue);
	const inputCurrency = useSelector(selectInputCurrency);
	const outputCurrency = useSelector(selectOutputCurrency);
	const [amount, setAmount] = useState("");
	const ratesData = useRatesData();
	const inputRef = useRef(null);
	const INPUT_MAX_LENGTH = 14;

	return (
		<Container>
			<Header title="Currency Calculator" />
			<Section
				extraHeaderContent={
					<RatesDate>
						<p>Exchange rates up to date for the day</p>
						<p>{ratesData.date}</p>
					</RatesDate>
				}
				title="Convert your currency"
				body={
					<>
						<CurrencyInput>
							<Input
								type="number"
								placeholder="Enter value"
								ref={inputRef}
								value={amount}
								onChange={({ target }) => {
									setAmount(target.value.slice(0, INPUT_MAX_LENGTH));
								}}
							/>
							<Select>
								{ratesData.success && (
									<>
										<Button>{inputCurrency} ▼</Button>
										<DropDownContent>
											<Options>
												{Object.keys(ratesData.rates).map(
													(inputCurrency) => (
														<Option
															onClick={() =>
																dispatch(
																	changeInputCurrency(inputCurrency)
																)
															}
															value={inputCurrency}
															key={inputCurrency}
														>
															{inputCurrency}
														</Option>
													)
												)}
											</Options>
										</DropDownContent>
									</>
								)}
							</Select>
						</CurrencyInput>
						<CurrencyOutput>
							<Output>{resultValue.toFixed(2)}</Output>
							<Select>
								{ratesData.success && (
									<>
										<Button>{outputCurrency} ▼</Button>
										<DropDownContent>
											<Options>
												{Object.keys(ratesData.rates).map(
													(outputCurrency) => (
														<Option
															onClick={() =>
																dispatch(
																	changeOutputCurrency(outputCurrency)
																)
															}
															value={outputCurrency}
															key={outputCurrency}
														>
															{outputCurrency}
														</Option>
													)
												)}
											</Options>
										</DropDownContent>
									</>
								)}
							</Select>
						</CurrencyOutput>
						<SubmitButton
							onClick={() =>
								dispatch(calculateResult([ratesData, amount]))
							}
						>
							Convert
						</SubmitButton>
					</>
				}
			/>
		</Container>
	);
}

export default CurrencyCalculator;

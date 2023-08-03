import { useState } from "react";
import { useRatesData } from "../useRatesData";
import {
  Wrapper,
  Button,
  DropDownContent,
  Option,
  Options
} from "./styled";

export const Select = () => {
  const ratesData = useRatesData();
  const [rate, setRate] = useState("EUR");

  return (
    <Wrapper>
      {ratesData.success && (
        <>
          <Button>{rate} ▼</Button>
          <DropDownContent>
            <Options>
              {Object.keys(ratesData.rates).map((rate) => (
                <Option
                  onClick={() => setRate(rate)}
                  value={rate}
                >
                  {rate}
                </Option>
              ))}
            </Options>
          </DropDownContent>
        </>
      )}
    </Wrapper>
  );
};

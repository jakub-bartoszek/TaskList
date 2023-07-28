import { Select } from "../Select";
import { Input } from "../../../common/Input/styled";
import { Wrapper } from "./styled";

export const CurrencyInput = () => (
  <Wrapper>
    <Input placeholder="Enter value" />
    <Select />
  </Wrapper>
);
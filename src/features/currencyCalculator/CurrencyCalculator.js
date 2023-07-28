import { Container } from "../../common/Container/styled";
import { Header } from "../../common/Header";
import { Section } from "../../common/Section";
import { CurrencyInput } from "./CurrencyInput";
import { CurrencyOutput } from "./CurrencyOutput";

function CurrencyCalculator() {
  return (
    <Container>
      <Header title="Currency Calculator" />
      <Section
        title="Convert your currency"
        body={<>
          <CurrencyInput />
          <CurrencyOutput />
        </>
        }
      />
    </Container>
  );
}

export default CurrencyCalculator;

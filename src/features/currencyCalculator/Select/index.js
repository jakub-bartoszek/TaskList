import { Wrapper, Button, DropDownContent, Option, Options } from "./styled";


export const Select = () => {
  return (

    <Wrapper>
      <Button>
        EUR ▼
      </Button>
      <DropDownContent>
        <Options>
          <Option>
            EUR
          </Option>
          <Option>
            EUR
          </Option>
          <Option>
            EUR
          </Option>
        </Options>
      </DropDownContent>
    </Wrapper>

  );
};
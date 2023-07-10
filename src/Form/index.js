import { useState } from "react";
import { Input } from "../common/Input/styled";
import { Button, Wrapper } from "./styled";


export const Form = () => {

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const [newTaskContent, setNewTaskContent] = useState("");

  return (
    <Wrapper>
      <Input
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}>
      </Input>
      <Button>Add task</Button>
    </Wrapper>
  );
};
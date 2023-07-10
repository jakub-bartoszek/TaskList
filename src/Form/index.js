import { useState } from "react";
import { Input } from "../common/Input/styled";
import { Button, Wrapper } from "./styled";


export const Form = ({ addNewTask }) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
  };

  const [newTaskContent, setNewTaskContent] = useState("");

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        placeholder="What do we have to do?"
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}>
      </Input>
      <Button>Add task</Button>
    </Wrapper>
  );
};
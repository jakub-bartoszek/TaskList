import { useState } from "react";
import { Input } from "../../../common/Input/styled";
import { Button, Wrapper } from "./styled";
import { useRef } from "react";


export const Form = ({ addNewTask }) => {

  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
  };

  const [newTaskContent, setNewTaskContent] = useState("");

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Input
        placeholder="What do we have to do?"
        ref={inputRef}
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
      >
      </Input>
      <Button>Add task</Button>
    </Wrapper>
  );
};
import { Button } from "../common/Button/styled";
import { Wrapper } from "./styled";

export const Buttons = ({ tasks, hideDone, toggleHideDone }) => {
  return (
    <Wrapper>
      <Button onClick={toggleHideDone}>{hideDone ? "Show" : "Hide"} done tasks</Button>
      <Button>Finish all tasks</Button>
    </Wrapper>
  );
};
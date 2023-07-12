import { Button } from "../../../common/Button/styled";
import { Wrapper } from "./styled";

export const Buttons = ({ hideDone, toggleHideDone, setAllDone }) => {
  return (
    <Wrapper>
      <Button onClick={toggleHideDone}>{hideDone ? "Show" : "Hide"} done tasks</Button>
      <Button onClick={setAllDone}>Finish all tasks</Button>
    </Wrapper>
  );
};
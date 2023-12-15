import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/Button/styled";
import { Wrapper } from "./styled";
import {
 selectHideDone,
 setAllDone,
 toggleHideDone
} from "../../tasksSlice.jsx";

export const Buttons = () => {
 const dispatch = useDispatch();
 const hideDone = useSelector(selectHideDone);

 return (
  <Wrapper>
   <Button onClick={() => dispatch(toggleHideDone())}>
    {hideDone ? "Show" : "Hide"} done tasks
   </Button>
   <Button onClick={() => dispatch(setAllDone())}>Finish all tasks</Button>
  </Wrapper>
 );
};

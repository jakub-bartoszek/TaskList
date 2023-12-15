import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section/index";
import { Header } from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { ModificationInfo } from "./styled";

function TasksPage() {
 const { id } = useParams();
 const task = useSelector((state) => getTaskById(state, id));

 return (
  <>
   <Container>
    <Header title="Your Task" />
    <Section
     extraHeaderContent={
      task.modificationDate && (
       <ModificationInfo>Modified: {task.modificationDate}</ModificationInfo>
      )
     }
     title={task.content}
     body={
      <>
       <p>
        Done: <i>{task.done ? "Yes" : "No"}</i>
       </p>
       <p>
        Created: <i>{task.creationDate}</i>
       </p>
      </>
     }
    />
   </Container>
  </>
 );
}

export default TasksPage;

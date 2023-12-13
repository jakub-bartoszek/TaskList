import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section/index";
import { Header } from "../../../common/Header";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";

function TasksPage() {
 return (
  <>
   <Container>
    <Header title="Task List" />
    <Section
     title="Add new task"
     body={<Form />}
    />
    <Section
     title="Tasks"
     extraHeaderContent={<Buttons />}
     body={<TasksList />}
    />
   </Container>
  </>
 );
}

export default TasksPage;

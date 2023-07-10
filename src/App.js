import { Container } from "./common/Container/styled";
import { Section } from "./common/Section/index";
import { Header } from "./common/Header";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";
import { Searchbar } from "./Searchbar";
import { Button } from "./common/Button/styled";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        content: "Example task",
        done: false
      },
      {
        id: 2,
        content: "Another example task",
        done: true
      }
    ]
  );

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Container>
        <Header
          title="To-do List"
        />
        <Section
          title="Add new task"
          extraHeaderContent={<Button>Download example tasks</Button>}
          body={<Form />}
        />
        <Section
          title="Tasks"
          extraHeaderContent={<Buttons hideDone={hideDone} toggleHideDone={toggleHideDone} />}
          body={
            <>
              <Searchbar />
              <TasksList hideDone={hideDone} tasks={tasks} removeTask={removeTask} />
            </>
          }
        />
      </Container>
    </>
  );
};

export default App;

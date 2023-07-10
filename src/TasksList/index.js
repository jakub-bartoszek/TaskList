import { List, Task, Content, ToggleDoneButton, EditButton, RemoveButton } from "./styled";

export const TasksList = ({ tasks, removeTask, hideDone, toggleTaskDone }) => {
  return (
    <List>
      {tasks.map((task) => (
        <Task
          key={task.id}
          hidden={hideDone && task.done}
        >
          <ToggleDoneButton onClick={() => toggleTaskDone(task.id)}>{task.done ? "✔️" : ""}</ToggleDoneButton>
          <Content
            done={task.done}
          >
            {task.content}
          </Content>
          <EditButton>✏️</EditButton>
          <RemoveButton onClick={() => removeTask(task.id)}>🗑️</RemoveButton>
        </Task>
      ))}
    </List>
  );
};
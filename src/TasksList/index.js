import { List, Task, Content, ToggleDoneButton, EditButton, RemoveButton } from "./styled";

export const TasksList = ({ tasks, removeTask, hideDone }) => {
  return (
    <List>
      {tasks.map((task) => (
        <Task hidden={hideDone && task.done} key={task.id}>
          <ToggleDoneButton>{task.done ? "✔️" : ""}</ToggleDoneButton>
          <Content>{task.content}</Content>
          <EditButton>✏️</EditButton>
          <RemoveButton onClick={() => removeTask(task.id)}>🗑️</RemoveButton>
        </Task>
      ))}
    </List>
  );
};
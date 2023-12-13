import TasksPage from "./features/tasks/TasksPage/TasksPage";
import TaskPage from "./features/tasks/TaskPage/TaskPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/tasks/:id" element={<TaskPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/" element={<Navigate to="/tasks" />} />
      </Routes>
    </HashRouter>
  );
};


export default App;

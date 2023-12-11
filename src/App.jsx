import TasksPage from "./features/tasks/TasksPage/TasksPage";
import TaskPage from "./features/tasks/TaskPage/TaskPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/to-do-list/:id" element={<TaskPage />} />
        <Route path="/to-do-list" element={<TasksPage />} />
        <Route path="/" element={<Navigate to="/to-do-list" />} />
      </Routes>

    </HashRouter>
  );
};


export default App;

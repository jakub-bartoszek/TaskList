import TasksPage from "./features/tasks/TasksPage/TasksPage";
import TaskPage from "./features/tasks/TaskPage/TaskPage";
import CurrencyCalculator from "./features/currencyCalculator/CurrencyCalculator";

import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Navigation } from "./common/Navigation/styled";

const App = () =>
  <HashRouter>
    <Navigation>
      <ul>
        <li>
          <Link to="/to-do-list">
            To-do List
          </Link>
          <Link to="/currency-calculator">
            Currency Calculator
          </Link>
        </li>
      </ul>
    </Navigation>
    <Routes>
      <Route path={`/to-do-list/:id`} element={<TaskPage />} />
      <Route path="/to-do-list" element={<TasksPage />} />
      <Route path="/currency-calculator" element={<CurrencyCalculator />} />
    </Routes>

  </HashRouter>;

export default App;

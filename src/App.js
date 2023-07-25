import TasksPage from "./features/tasks/TasksPage/TasksPage";
import TaskPage from "./features/tasks/TaskPage/TaskPage";
import CurrencyCalculator from "./features/currencyCalculator/CurrencyCalculator";
import { StyledNavLink } from "./common/StyledNavLink/styled";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./common/Navigation/styled";

const App = () => {

  return (
    <HashRouter>
      <Navigation>
        <StyledNavLink to="/to-do-list">
          To-do List
        </StyledNavLink>
        <StyledNavLink to="/currency-calculator">
          Currency Calculator
        </StyledNavLink>
      </Navigation>
      <Routes>
        <Route path={`/to-do-list/:id`} element={<TaskPage />} />
        <Route path="/to-do-list" element={<TasksPage />} />
        <Route path="/currency-calculator" element={<CurrencyCalculator />} />
      </Routes>

    </HashRouter>
  );
};


export default App;

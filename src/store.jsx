import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import resultReducer from "./features/currencyCalculator/currencySlice";
import createSagaMiddleware from "@redux-saga/core";
import { tasksSaga } from "./features/tasks/tasksSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
	reducer: {
		result: resultReducer,
		tasks: tasksReducer
	},
	middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(tasksSaga);

export default store;

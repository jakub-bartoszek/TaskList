import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import createSagaMiddleware from "@redux-saga/core";
import { tasksSaga } from "./features/tasks/tasksSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
	reducer: {
		tasks: tasksReducer
	},
	middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(tasksSaga);

export default store;

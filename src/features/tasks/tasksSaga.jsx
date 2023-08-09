import { call, takeEvery, select } from "@redux-saga/core/effects";
import { selectTasks } from "./tasksSlice";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* saveTasksInLocalStorageHandler() {
	const tasks = yield select(selectTasks);
	yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
	yield takeEvery("*", saveTasksInLocalStorageHandler);
}

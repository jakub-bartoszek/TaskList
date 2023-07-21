import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: getTasksFromLocalStorage(),
		hideDone: false,
	},
	reducers: {
		addNewTask: ({ tasks }, { payload: task }) => {
			tasks.push(task);
		},
		removeTask: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(
				(task) => task.id === taskId
			);
			tasks.splice(index, 1);
		},
		toggleTaskDone: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(
				(task) => task.id === taskId
			);
			tasks[index].done = !tasks[index].done;
		},
		setAllDone: ({ tasks }) => {
			for (const task of tasks) {
				task.done = true;
			}
		},
		toggleHideDone: (state) => {
			state.hideDone = !state.hideDone;
		},
	}
});

export const {
	addNewTask,
	removeTask,
	toggleTaskDone,
	toggleHideDone,
	setAllDone,
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;

export default tasksSlice.reducer;

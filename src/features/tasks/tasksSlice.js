import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: getTasksFromLocalStorage(),
		hideDone: false
	},
	reducers: {
		addNewTask: ({ tasks }, { payload: task }) => {
			tasks.push(task);
		},
		removeTask: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks.splice(index, 1);
		},
		toggleTaskDone: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({id}) => id === taskId);
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
		toggleEditing: ({ tasks }, { payload: taskId }) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks[index].beingEdited = !tasks[index].beingEdited;
		},
		saveNewTask: ({ tasks }, { payload: [taskId, taskContent] }) => {
			const index = tasks.findIndex(({id}) => id === taskId);
			tasks[index].content = taskContent;
		},
		turnOffEditingForOtherTasks: ({ tasks }) => {
			for (const task of tasks) {
				task.beingEdited = false;
			}
		}
	}
});

export const {
	addNewTask,
	removeTask,
	toggleTaskDone,
	toggleHideDone,
	setAllDone,
	toggleEditing,
	saveNewTask,
	turnOffEditingForOtherTasks
} = tasksSlice.actions;

export const selectTasks = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const getTaskById = (state, taskId) =>
	selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;

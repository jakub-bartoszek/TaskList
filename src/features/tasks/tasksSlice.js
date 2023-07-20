import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks.splice(index, 1);
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(task => task.id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
  }
});

export const
  {
    addTask,
    removeTask,
    toggleTaskDone,
    setAllDone,
    toggleHideDone
  } = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;

export default tasksSlice.reducer;
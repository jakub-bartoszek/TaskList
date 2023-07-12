import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: tasks.length
          ? tasks[tasks.length - 1].id + 1
          : 1,
        done: false,
        content: newTaskContent
      }
    ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) =>
      tasks.filter((task) => task.id !== id)
    );
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true
      }))
    );
  };

  return [
    tasks,
    addNewTask,
    removeTask,
    toggleTaskDone,
    setAllDone
  ];
};

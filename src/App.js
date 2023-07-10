import { Container } from "./common/Container/styled";
import { Section } from "./common/Section/index";
import { Header } from "./common/Header";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";
import { Searchbar } from "./Searchbar";
import { Button } from "./common/Button/styled";
import { useState } from "react";
import { useEffect } from "react";

function App() {
	const [hideDone, setHideDone] = useState(false);
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks"))
	);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const toggleHideDone = () => {
		setHideDone((hideDone) => !hideDone);
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

	return (
		<>
			<Container>
				<Header title="To-do List" />
				<Section
					title="Add new task"
					extraHeaderContent={
						<Button>Download example tasks</Button>
					}
					body={<Form addNewTask={addNewTask} />}
				/>
				<Section
					title="Tasks"
					extraHeaderContent={
						<Buttons
							hideDone={hideDone}
							toggleHideDone={toggleHideDone}
							toggleAllDone={setAllDone}
						/>
					}
					body={
						<>
							<Searchbar />
							<TasksList
								hideDone={hideDone}
								tasks={tasks}
								removeTask={removeTask}
								toggleTaskDone={toggleTaskDone}
							/>
						</>
					}
				/>
			</Container>
		</>
	);
}

export default App;

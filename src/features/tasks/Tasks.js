import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section/index";
import { Header } from "../../common/Header";
import { Form } from "./Form";
import { TasksList } from "./TasksList";
import { Buttons } from "./Buttons";
import { Searchbar } from "./Searchbar";
import { Button } from "../../common/Button/styled";
import { useState } from "react";
import { useTasks } from "./useTasks";

function Tasks() {
	const [
		tasks,
		addNewTask,
		removeTask,
		toggleTaskDone,
		setAllDone
	] = useTasks();

	const [hideDone, setHideDone] = useState(false);

	const toggleHideDone = () => {
		setHideDone((hideDone) => !hideDone);
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

export default Tasks;

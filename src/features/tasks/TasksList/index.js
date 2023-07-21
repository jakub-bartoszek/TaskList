import { useDispatch, useSelector } from "react-redux";
import {
	List,
	Task,
	Content,
	ToggleDoneButton,
	EditButton,
	RemoveButton
} from "./styled";
import {
	removeTask,
	selectHideDone,
	selectTasks,
	toggleTaskDone
} from "../tasksSlice";

export const TasksList = () => {
	const tasks = useSelector(selectTasks);
	const hideDone = useSelector(selectHideDone);
	const dispatch = useDispatch();

	return (
		<List>
			{tasks.map((task) => (
				<Task
					key={task.id}
					hidden={hideDone && task.done}
				>
					<ToggleDoneButton
						onClick={() =>
							dispatch(toggleTaskDone(task.id))
						}
					>
						{task.done ? "✔️" : ""}
					</ToggleDoneButton>
					<Content done={task.done}>{task.content}</Content>
					<EditButton>✏️</EditButton>
					<RemoveButton
						onClick={() => dispatch(removeTask(task.id))}
					>
						🗑️
					</RemoveButton>
				</Task>
			))}
		</List>
	);
};

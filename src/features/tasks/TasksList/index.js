import { useDispatch, useSelector } from "react-redux";
import {
	List,
	Task,
	Content,
	ToggleDoneButton,
	EditButton,
	RemoveButton,
	SaveButton
} from "./styled";
import { Input } from "../../../common/Input/styled";
import {
	removeTask,
	turnOffEditingForOtherTasks,
	saveNewTask,
	selectHideDone,
	selectTasks,
	toggleEditing,
	toggleTaskDone
} from "../tasksSlice";
import { useRef, useState } from "react";

export const TasksList = () => {
	const tasks = useSelector(selectTasks);
	const hideDone = useSelector(selectHideDone);
	const dispatch = useDispatch();
	const [newTaskContent, setNewTaskContent] = useState("");
	const inputRef = useRef(null);

	return (
		<List>
			{tasks.map((task) => (
				<Task
					key={task.id}
					hidden={hideDone && task.done}
				>
					<ToggleDoneButton
						onClick={() => dispatch(toggleTaskDone(task.id))}
					>
						{task.done ? "✔️" : ""}
					</ToggleDoneButton>
					{task.beingEdited ? (
						<>
							<Input
								ref={inputRef}
								value={newTaskContent}
								onChange={({ target }) =>
									setNewTaskContent(target.value)
								}
							/>
							<SaveButton
								onClick={() => {
									if (newTaskContent !== "") {
										dispatch(toggleEditing(task.id));
										dispatch(saveNewTask([task.id, newTaskContent]));
									}
								}}
							>
								💾
							</SaveButton>
						</>
					) : (
						<>
							<Content done={task.done}>{task.content}</Content>
							<EditButton
								onClick={async () => {
									dispatch(turnOffEditingForOtherTasks());
									dispatch(toggleEditing(task.id));
									setNewTaskContent(task.content);
									try {
										await inputRef.current;
										inputRef.current.focus();
									} catch {}
								}}
							>
								✏️
							</EditButton>
						</>
					)}
					<RemoveButton onClick={() => dispatch(removeTask(task.id))}>
						🗑️
					</RemoveButton>
				</Task>
			))}
		</List>
	);
};

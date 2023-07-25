import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Input } from "../../../../common/Input/styled";
import {
	List,
	Task,
	ToggleDoneButton,
	EditButton,
	RemoveButton,
	SaveButton,
	Content,
	StyledLink,
	SearchBar
} from "./styled";
import {
	removeTask,
	turnOffEditingForOtherTasks,
	saveNewTask,
	selectHideDone,
	selectTasks,
	toggleEditing,
	toggleTaskDone
} from "../../tasksSlice";

export const TasksList = () => {
	const tasks = useSelector(selectTasks);
	const hideDone = useSelector(selectHideDone);
	const dispatch = useDispatch();
	const [newTaskContent, setNewTaskContent] = useState("");
	const [search, setSearch] = useState("");
	const inputRef = useRef(null);

	return (
		<>
			<SearchBar>
				<Input
					value={search}
					onChange={({ target }) => setSearch(target.value)}
					placeholder="Search tasks"
				></Input>
			</SearchBar>
			<List>
				{tasks.map((task) => (
					<Task
						key={task.id}
						hidden={
							(hideDone && task.done) ||
							!task.content.includes(search)
						}
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
											dispatch(
												saveNewTask([task.id, newTaskContent])
											);
										}
									}}
								>
									💾
								</SaveButton>
							</>
						) : (
							<>
								<StyledLink to={`/to-do-list/${task.id}`}>
									<Content done={task.done}>{task.content}</Content>
								</StyledLink>
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
						<RemoveButton
							onClick={() => dispatch(removeTask(task.id))}
						>
							🗑️
						</RemoveButton>
					</Task>
				))}
			</List>
		</>
	);
};

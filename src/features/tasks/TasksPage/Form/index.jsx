import { useState } from "react";
import { Input } from "../../../../common/Input/styled";
import { Button, Wrapper } from "./styled";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Form = () => {
	const resetInput = () => {
		setNewTaskContent("");
		inputRef.current.focus();
	};

	const dispatch = useDispatch();
	const inputRef = useRef(null);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (newTaskContent.trim()) {
			dispatch(
				addNewTask({
					content: newTaskContent,
					done: false,
					id: nanoid(),
					beingEdited: false
				})
			);
		}
		resetInput();
	};

	const [newTaskContent, setNewTaskContent] = useState("");

	return (
		<Wrapper onSubmit={onFormSubmit}>
			<Input
				placeholder="What do we have to do?"
				ref={inputRef}
				value={newTaskContent}
				onChange={(event) => setNewTaskContent(event.target.value)}
			></Input>
			<Button>Add task</Button>
		</Wrapper>
	);
};

import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SearchBar = styled.div``;

export const List = styled.ul`
	margin: 0;
	padding: 25px 0 0;
	list-style: none;
`;

export const Task = styled.li`
	display: grid;
	gap: 3px;
	grid-template-columns: auto 1fr auto auto;
	align-items: center;
	margin: 7px 0;
	background-color: hsl(260, 5%, 12%);
	border-radius: 10px;

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`}
`;

export const Content = styled.span`
	margin: 0 10px;
	transition: 0.3s;
	color: hsl(0, 0%, 100%);

	${({ done }) =>
		done &&
		css`
			transition: 0.3s;
			text-decoration: line-through hsl(0, 0%, 100%);
			color: hsl(0, 0%, 50%);
		`}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const ToggleDoneButton = styled.button`
	background-color: hsl(260, 5%, 10%);
	border: 2px solid green;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	width: 30px;
	border-radius: 5px;
	transition: background-color 0.5s, scale 0.3s;
	cursor: pointer;
	&:hover {
		background-color: hsl(120, 100%, 25%);
		scale: 1.1;
	}
`;

export const RemoveButton = styled.button`
	background-color: hsl(260, 5%, 10%);
	border: none;
	height: 30px;
	width: 30px;
	border-radius: 5px;
	transition: background-color 0.5s, scale 0.3s, border-radius 0.1s;
	cursor: pointer;
	&:hover {
		background-color: hsl(0, 100%, 50%);
		scale: 1.1;
		border-radius: 5px;
	}
`;

export const EditButton = styled.button`
	background-color: hsl(260, 5%, 10%);
	border: none;
	height: 30px;
	width: 30px;
	border-radius: 5px;
	transition: background-color 0.5s, scale 0.3s, border-radius 0.1s;
	cursor: pointer;
	&:hover {
		background-color: hsl(60, 100%, 50%);
		scale: 1.1;
		border-radius: 5px;
	}
`;

export const EditField = styled.form`
	display: grid;
	gap: 3px;
	grid-template-columns: 1fr auto;
	align-items: center;
	margin: 0;
`;

export const SaveButton = styled.button`
	background-color: hsl(260, 5%, 10%);
	border: none;
	height: 30px;
	width: 30px;
	border-radius: 5px;
	transition: background-color 0.5s, scale 0.3s, border-radius 0.1s;
	cursor: pointer;
	&:hover {
		background-color: hsl(240, 100%, 50%);
		scale: 1.1;
		border-radius: 5px;
	}
`;

export const NoTasks = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	color: hsl(0, 0%, 50%);
`;

import styled from "styled-components";

export const DropDownContent = styled.div`
	display: flex;
	position: absolute;
	transition: all 0.3s;
	transform-origin: 50% 0%;
	transform: scale(1, 0);
`;

export const Button = styled.button`
	height: 31px;
	color: hsl(260, 6%, 10%);
	font-weight: 700;
	background-color: #ffc0c0;
	border: 2px solid hsl(260, 5%, 10%);
	border-radius: 10px;
	transition: 0.1s;
`;

export const Wrapper = styled.div`
	position: relative;
	display: inline-block;
	&:hover ${DropDownContent} {
		display: flex;
		transform: scale(1, 1);
	}
	&:hover ${Button} {
		cursor: pointer;
		border-radius: 10px 10px 0 0px;
	}
`;

export const Options = styled.div`
	border: 2px solid hsl(260, 5%, 10%);
	border-bottom: 1px solid hsl(260, 5%, 10%);
	border-top: none;
	border-radius: 0 0 10px 10px;
`;

export const Option = styled.button`
	height: 23px;
	background-color: hsl(0, 100%, 82%);
	width: 100%;
	text-align: left;
	color: hsl(260, 6%, 10%);

	border: none;
	border-bottom: 1px solid hsl(260, 5%, 10%);
	transition: 0.3s;
	&:hover {
		background-color: hsl(0, 100%, 75%);
		color: white;
	}
	&:last-child {
		border-radius: 0 0 10px 10px;
	}
`;

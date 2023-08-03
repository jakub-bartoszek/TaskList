import styled from "styled-components";

export const CurrencyInput = styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: 1fr auto;
`;

export const DropDownContent = styled.div`
z-index: 10;
	display: flex;
	position: absolute;
	transition: all 0.3s;
	transform-origin: 50% 0%;
	transform: scale(1, 0);
`;

export const Button = styled.button`
width: 65px;
	height: 31px;
	color: pink;
	background-color: hsl(270, 4%, 11%);
	border: 2px solid hsl(260, 5%, 10%);
	border-radius: 10px;
	transition: background-color 0.3s ease, border-radius 0.1s ease-out;
	cursor: pointer;
`;

export const SubmitButton = styled.button`
	margin-top: 15px;
	width: 100%;
	height: 31px;
	color: hsl(260, 6%, 10%);
	font-weight: 700;
	background-color: hsl(0, 100%, 85%);
	border: 2px solid hsl(260, 5%, 10%);
	border-radius: 10px;
	transition: 0.3s;
	cursor: pointer;
	&:hover{
		background-color: #ffc0c0;
	}
`;

export const Select = styled.div`
	position: relative;
	display: inline-block;
	&:hover ${DropDownContent} {
		display: flex;
		transform: scale(1, 1);
	}
	&:hover ${Button} {
		cursor: pointer;
		border-radius: 10px 10px 0 0px;
		background-color: hsl(270, 4%, 13%);
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
	background-color: hsl(270, 4%, 11%);
	width: 100%;
	text-align: left;
	color: pink;
	cursor: pointer;

	border: none;
	border-bottom: 1px solid hsl(260, 5%, 10%);
	transition: 0.3s;
	&:hover {
		background-color: hsl(270, 4%, 13%);
		text-shadow: 0px 0px 10px hsl(0, 100%, 88%);
		color: hsl(0, 100%, 92%);
	}
	&:last-child {
		border-radius: 0 0 7px 7px;
	}
`;

export const CurrencyOutput = styled.div`
margin-top: 10px;
`;

export const Output = styled.span`
  font-size: 50px;
  padding: 0;
  word-break: break-all;
`;

export const RatesDate = styled.div`
padding: 0 10px;
text-align: center;
font-size: 10px;
color: pink;
`;

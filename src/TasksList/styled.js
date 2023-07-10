import styled, { css } from "styled-components";

export const List = styled.ul`
margin: 0;
padding: 25px 0;
list-style: none;
`;

export const Task = styled.li`
display: grid;
gap: 3px;
grid-template-columns: auto 1fr auto auto;
align-items: center;
margin: 0;
margin-bottom: 10px;
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
`;

export const ToggleDoneButton = styled.button`
background-color: hsl(260, 5%, 10%);;
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
  background-color: green;
  scale: 1.1
}
`;

export const RemoveButton = styled.button`
background-color: hsl(260, 5%, 10%);;
border: none;
height: 30px;
width: 30px;
border-radius: 5px;
transition: background-color 0.5s, scale 0.3s, border-radius 0.1s;
cursor: pointer;
&:hover {
  background-color: red;
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
  background-color: yellow;
  scale: 1.1;
  border-radius: 5px;
}
`;
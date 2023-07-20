import styled from "styled-components";

export const Button = styled.button`
background-color: transparent;
border: none;
color: pink;
transition: 0.3s;
@media (max-width: 430px) {
		margin-top: 10px;
	}
&:hover{
  text-shadow: 0px 0px 10px hsl(0, 100%, 88%);
  cursor: pointer;
  color: hsl(0, 100%, 92%);
  scale: 1.05;
}
&:disabled{
  color: grey;
  text-shadow: none;
  cursor: default;
  scale: 1;
}
`;
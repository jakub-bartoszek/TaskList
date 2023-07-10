import styled from "styled-components";

export const Input = styled.input`
height: 25px;
background-color: hsl(260, 5%, 11%);
color: white;
width: 100%;
border: 2px solid hsl(260, 5%, 10%);
border-radius: 10px;
padding-left: 10px;
&:active, &:focus{
  outline: none;
} 
`;
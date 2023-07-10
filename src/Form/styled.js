import styled from "styled-components";

export const Wrapper = styled.form`
width: 100%;
display: grid;
grid-template-columns: 1fr auto;
`;

export const Button = styled.button`
color: hsl(260, 6%, 10%);
font-weight: 700;
background-color: #ffc0c0;
border: 2px solid hsl(260, 5%, 10%);
border-radius: 10px;
transition: 0.3s;
&:hover{
  cursor: pointer;
  scale: 1.1;

}
`;
import styled from "styled-components";

export const Wrapper = styled.section`
	margin-bottom: 15px;
	background-color: hsl(255, 5%, 12%);
	border-radius: 20px;
`;

export const Header = styled.header`
	color: hsl(0, 0%, 80%);
	padding: 15px;
	display: grid;
	grid-template-columns: 1fr auto auto;
	align-items: center;
	@media (max-width: 430px) {
		grid-template-columns: 1fr;
	}
`;

export const Title = styled.h2`
	white-space: nowrap;
	margin: 0;
`;

export const Body = styled.div`
	background-color: hsl(255, 5%, 13%);
	padding: 20px;
	border-radius: 20px;
`;

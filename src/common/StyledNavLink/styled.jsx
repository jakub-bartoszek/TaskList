import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
	color: hsl(0, 0%, 100%);
	display: flex;
	padding: 10px 20px;

	text-decoration: none;
	&.active {
		font-weight: bold;
		background-color: hsl(0, 100%, 82%);
	}
`;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";

const HeaderBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
`;

const HeaderTitle = styled.h3`
	font-size: 24px;
	color: #fff;
	margin-right: 120px;
`;

const HeaderLogin = styled.h3`
	font-size: 20px;
	color: #fff;
`;

const HeaderLinks = styled.ul`
	display: flex;
	margin: 0;
	align-items: center;
	color: #fff;
	list-style-type: none;
	li {
		margin-right: 20px;
		font-size: 18px;
	}
`;

const Header = () => {
	return (
		<HeaderBlock>
			<div className="header__left">
				<HeaderTitle>
					<Link to="/home">Home</Link>
				</HeaderTitle>
				<HeaderLinks>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/friends/">Friends</Link>
					</li>
				</HeaderLinks>
			</div>
			<HeaderLogin>
				<Link to="/login">Login</Link>
			</HeaderLogin>
		</HeaderBlock>
	);
};

export default Header;

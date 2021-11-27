import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import "./header.css";
import GotService from "../../services/gotService";

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
	const [isLogged, setLogged] = useState(false);
	const [gotService] = useState(() => new GotService());

	useEffect(() => {
		updateLogin();
	}, []);

	const updateLogin = () => {
		gotService.getToken().then((item) => {
			console.log(item.token);
			if (item.token.length > 0) {
				setLogged(true);
			}
		});
	};
	const onLogout = () => {
		gotService.postToken("");
		setLogged(false);
		window.location.reload();
	};

	const logged = !isLogged ? <Link to="/login">Login</Link> : <Link onClick={onLogout}>Logout</Link>;

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
			<HeaderLogin>{logged}</HeaderLogin>
		</HeaderBlock>
	);
};

export default Header;

import React, { Component } from "react";
import styled from "styled-components";
import gotService from "../../services/gotService";

const HomePageBlock = styled.div`
	color: #fff;
`;

export default class HomePage extends Component {
	gotService = new gotService();
	state = {
		isLogged: false,
	};
	componentDidMount() {
		this.updateLogin();
	}
	updateLogin() {
		this.gotService.getToken().then((item) => {
			console.log(item.token);
			if (item.token.length > 0) {
				this.setState({ isLogged: true });
				console.log("Logged");
			}
		});
	}

	render() {
		const logged = !this.state.isLogged ? (
			<div className="mb-2 lead">You are not authed! Please login in to the system</div>
		) : (
			<div className="mb-2 lead">You are in the system!</div>
		);
		return (
			<HomePageBlock className="d-flex flex-row align-items-center my-4 pt-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-12 text-center">
							<span className="display-3 d-block mb-4">Welcome to the homepage!</span>
							{logged}
						</div>
					</div>
				</div>
			</HomePageBlock>
		);
	}
}

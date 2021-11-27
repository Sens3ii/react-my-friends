import React, { Component } from "react";

import gotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails";
import { Redirect } from "react-router-dom";

export default class ProfilePage extends Component {
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
		if (this.state.isLogged) {
			return (
				<ItemDetails itemId={5} getData={this.gotService.getProfile}>
					<Field field="name" label="Name" />
					<Field field="age" label="Age" />
					<Field field="country" label="Country" />
				</ItemDetails>
			);
		}
		return <div className="mb-2 lead">You are not authed! Please login in to the system</div>;
	}
}

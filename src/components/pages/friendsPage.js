import React, { Component } from "react";

import gotService from "../../services/gotService";

import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import { withRouter } from "react-router";

class FriendsPage extends Component {
	gotService = new gotService();

	state = {
		error: false,
		isLogged: false,
	};

	componentDidCatch() {
		this.setState({ error: true });
	}
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
		const { error, isLogged } = this.state;
		if (error) {
			return <ErrorMessage />;
		}
		if (!isLogged) {
			return <div className="mb-2 lead">You are not authed! Please login in to the system</div>;
		}

		return (
			<ItemList
				onItemSelected={(itemId) => {
					this.props.history.push(itemId);
				}}
				getData={this.gotService.getAllFriends()}
				renderItem={(item) => `${item.name} (${item.age})`}
			/>
		);
	}
}

export default withRouter(FriendsPage);

import React, { Component } from "react";

import gotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails";

export default class FriendItem extends Component {
	gotService = new gotService();

	render() {
		return (
			<ItemDetails itemId={this.props.friendId} getData={this.gotService.getFriend}>
				<Field field="name" label="Name" />
				<Field field="age" label="Age" />
				<Field field="country" label="Country" />
			</ItemDetails>
		);
	}
}

import React, { Component } from "react";

import gotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails";

export default class ProfilePage extends Component {
	gotService = new gotService();

	render() {
		return (
			<ItemDetails itemId={5} getData={this.gotService.getProfile}>
				<Field field="name" label="Name" />
				<Field field="age" label="Age" />
				<Field field="country" label="Country" />
			</ItemDetails>
		);
	}
}

import React, { Component } from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "../header";
import { FriendsPage, ProfilePage, LoginPage, FriendItem, HomePage, NotFoundPage } from "../pages";
import ErrorMessage from "../errorMessage";

import "./app.css";
export default class App extends Component {
	state = {
		error: false,
	};

	componentDidCatch() {
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		return (
			<Router>
				<div className="app">
					<div className="container" styles="background-color: rgba(0,0,0,0.8);">
						<Header />
					</div>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-md-9 text-center">
								<Switch>
									<Route
										exact
										path="/"
										render={() => {
											return <Redirect to="/home" />;
										}}
									/>
									<Route path="/home" exact component={HomePage} />
									<Route path="/profile" exact component={ProfilePage} />
									<Route path="/friends/" exact component={FriendsPage} />
									<Route
										path="/friends/:id"
										render={({ match, location, history }) => {
											const { id } = match.params;
											return <FriendItem friendId={id} />;
										}}
									/>
									<Route path="/login" exact component={LoginPage} />

									<Route path="*" exact component={NotFoundPage} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

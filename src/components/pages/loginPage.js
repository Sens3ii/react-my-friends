import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import GotService from "../../services/gotService";
import ErrorMessage from "../errorMessage";
import { Redirect } from "react-router-dom";

export default function Login(props) {
	const [isError, setError] = useState(false);
	const [isLogged, setLogged] = useState(false);
	const [isTryAgain, setTryAgain] = useState(false);
	useEffect(() => {
		setLogged(false);
		updateLogin();
	});
	const updateLogin = () => {
		gotService.getToken().then((item) => {
			console.log(item.token);
			if (item.token.length > 0) {
				setLogged(true);
			}
		});
	};
	const onError = () => {
		setError(true);
	};

	const onTryAgain = () => {
		setTryAgain(true);
	};

	const onLogged = () => {
		gotService.postToken("$#$#$3434343f3f3f");
		setLogged(true);
		window.location.reload();
	};

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [gotService] = useState(() => new GotService());

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
		gotService
			.getProfile()
			.then((item) => {
				if (item.email === email && item.password === password) {
					console.log("correct");
					onLogged();
				} else {
					console.log("Incorrect");
					onTryAgain();
				}
			})
			.catch(onError);
	}
	const errorMessage = isError ? <ErrorMessage /> : null;
	const tryAgain = isTryAgain ? "Incorrect password or email" : null;
	const logged = isLogged ? <Redirect to="/" /> : null;

	return (
		<>
			{errorMessage}
			{tryAgain}
			{logged}
			<div className="login">
				<Form onSubmit={handleSubmit}>
					<Form.Group size="lg" controlId="email">
						<Form.Label>Email (test@test.com)</Form.Label>
						<Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Password (123123)</Form.Label>
						<Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Button className="btn-submit" block size="lg" type="submit" disabled={!validateForm()}>
						Login
					</Button>
				</Form>
			</div>
		</>
	);
}

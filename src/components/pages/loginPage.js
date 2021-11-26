import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
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
	);
}
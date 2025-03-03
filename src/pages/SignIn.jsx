import React from "react";
import Input from "../components/Input";
import "./signin.css";

export default function SignIn({signInWithGoogle}) {
	return (
		<div className="field">
			<form className="form">
				<h1>Sign up</h1>
				<Input type="mail" name="email" placeholder="Email" ID="user_email" />
				<Input
					type="password"
					name="pass"
					placeholder="Password"
					ID="user_pass"
				/>
				<Input
					type="password"
					name="pass__second"
					placeholder="Repeat password"
					ID="user_pass_second"
				/>
				<button className="button" onClick={signInWithGoogle}>
					Sign Up
				</button>
			</form>
		</div>
	);
}

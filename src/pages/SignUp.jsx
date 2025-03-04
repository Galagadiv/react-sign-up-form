import React, {useState} from "react";
import Input from "../components/Input";
import "./signup.css";

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from "firebase/auth";
import {auth} from "../logic/firebase";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");

	const handleReg = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const user = auth.currentUser;
			await sendEmailVerification(user);
			console.log(user);
			console.log("Користувач зареєстрований! Лист підтвердження відправлено.");
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="field">
			<form className="form">
				<h1>Sign up</h1>
				<Input
					type="mail"
					name="email"
					placeholder="Email"
					ID="user_email"
					value={email}
					setValue={setEmail}
				/>
				<Input
					type="password"
					name="pass"
					placeholder="Password"
					ID="user_pass"
					value={password}
					setValue={setPass}
				/>
				{/* <Input
					type="password"
					name="pass__second"
					placeholder="Repeat password"
					ID="user_pass_second"
				/> */}
				{/* <button className="button" onClick={signInWithGoogle}>
					Sign Up
				</button> */}
				<button className="button" onClick={handleReg}>
					Sign Up
				</button>
			</form>
		</div>
	);
}

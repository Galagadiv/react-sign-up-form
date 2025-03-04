import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../components/Input";
import "./signup.css";

import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "../../logic/firebase";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const [passAgain, setPassAgain] = useState("");
	const navigate = useNavigate();

	const handleReg = async (e) => {
		e.preventDefault();
		try {
			if (passAgain === password) {
				await createUserWithEmailAndPassword(auth, email, password);
				const user = auth.currentUser;
				await sendEmailVerification(user);
				console.log(user);
				console.log(
					"Користувач зареєстрований! Лист підтвердження відправлено."
				);
				const interval = setInterval(async () => {
					await user.reload(); // Оновлюємо статус користувача
					if (user.emailVerified) {
						clearInterval(interval);
						await signInWithEmailAndPassword(auth, email, password);
						navigate("/Home"); // Перенаправляємо користувача
					}
				}, 3000);
			} else {
				console.log("Паролі не збігаються");
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className="field">
			<div>
				<form className="form" onSubmit={handleReg}>
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
					<Input
						type="password"
						name="second_pass"
						placeholder="Repeat password"
						ID="user_pass_two"
						value={passAgain}
						setValue={setPassAgain}
					/>
					<button className="button" type="submit">
						Sign Up
					</button>
					<div className="link-bar">
						<a href="/forgot-password">Forgot password?</a>
						<a href="/">Sign in</a>
					</div>
				</form>
			</div>
		</div>
	);
}

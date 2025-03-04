import React, {useState} from "react";
import Input from "../../components/Input";
import {Link, useNavigate} from "react-router-dom";
import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../../logic/firebase";

export default function ForgotPass() {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleResetPass = async (e) => {
		e.preventDefault();
		try {
			await sendPasswordResetEmail(auth, email);
			alert("Massage sent");
			navigate("/");
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				alert("❌ Користувача з такою поштою не знайдено!");
			} else if (error.code === "auth/invalid-email") {
				alert("❌ Введено некоректний email!");
			} else {
				alert("❌ Помилка! Спробуйте ще раз.");
				console.error("Помилка скидання пароля:", error.message);
			}
		}
	};

	return (
		<div className="field">
			<form className="form" onSubmit={handleResetPass}>
				<h1>Reset password</h1>
				<Input
					type="email" // Виправлено type
					name="email"
					placeholder="Email"
					ID="user_email"
					value={email}
					setValue={setEmail}
				/>
				<button className="button" type="submit">
					Send email
				</button>
				<div className="link-bar">
					<Link to="/sign-up">Sign up</Link>
					<Link to="/">Sign in</Link>
				</div>
			</form>
		</div>
	);
}

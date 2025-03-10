import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../logic/firebase";
import Input from "../../components/Input";
import {Link} from "react-router-dom";
import "./signin.css";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPass] = useState("");
	const navigate = useNavigate(); // Ініціалізація навігатора

	const handleLog = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("Користувач увійшов!");
			navigate("/home"); // Перехід на сторінку після входу
		} catch (error) {
			console.error("Помилка входу:", error.message);
		}
	};

	return (
		<div className="field">
			<form className="form" onSubmit={handleLog}>
				<h1>Sign In</h1>
				<Input
					type="email" // Виправлено type
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
				<button className="button" type="submit">
					Sign In
				</button>
				<div className="link-bar">
					<Link to="/forgot-password">Forgot password?</Link>
					<Link to="/sign-up">Sign up</Link>
				</div>
			</form>
		</div>
	);
}

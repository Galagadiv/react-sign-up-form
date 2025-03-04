import React, {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import "./home.css";

export default function Home() {
	const [user, setUser] = useState(null);
	const auth = getAuth();
	const navigate = useNavigate();

	const [note, setNote] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser({
					email: currentUser.email,
					uid: currentUser.uid,
				});
			} else {
				setUser(null);
			}
		});

		return () => unsubscribe(); // Відписуємося, щоб уникнути витоку пам’яті
	}, [auth]);

	const handleSaveNote = async (e) => {
		e.preventDefault();
		try {
			// збереження  записки в БД
		} catch (er) {
			console.log(er.message);
		}
	};

	return (
		<>
			{user ? (
				<>
					<header className="header">
						<section>
							<div className="greating__bar">
								<h2>🔥 Вітаємо, {user.email}! 🔥</h2>
								<p>
									<strong>Ваш ID:</strong> {user.uid}
								</p>
							</div>
							<button
								className="button home__header__button"
								onClick={() => navigate("/sign-up")}
							>
								Log out
							</button>
						</section>
					</header>
					<main>
						<section>
							<form onSubmit={{}} className="home__form">
								<button className="button" type="submit">
									Save
								</button>
								<label className="note__label" htmlFor="notes">
									<textarea
										className="textarea"
										value={note}
										onChange={(event) => setNote(event.target.value)}
										id="notes"
										name="notes"
										placeholder="Type some notes :) ..."
										rows="10" // Вказує висоту (кількість рядків)
										required
									/>
								</label>
							</form>
						</section>
					</main>
				</>
			) : (
				<header className="header">
					<section>
						<h2>❌ Ви не увійшли в систему ❌</h2>
						<button className="button" onClick={() => navigate("/sign-up")}>
							Перейти до реєстрації
						</button>
					</section>
				</header>
			)}
		</>
	);
}

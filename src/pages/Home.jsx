import React, {useState, useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export default function Home() {
	const [user, setUser] = useState(null);
	const auth = getAuth();

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

	return (
		<div>
			{user ? (
				<>
					<h2>🔥 Вітаємо, {user.email}! 🔥</h2>
					<p>
						<strong>Ваш ID:</strong> {user.uid}
					</p>
				</>
			) : (
				<h2>❌ Ви не увійшли в систему ❌</h2>
			)}
		</div>
	);
}

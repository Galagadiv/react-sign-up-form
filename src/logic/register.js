// import {
// 	createUserWithEmailAndPassword,
// 	sendEmailVerification,
// } from "firebase/auth";
// import {auth} from "./firebase";

// export const registerUser = async (email, password) => {
// 	try {
// 		const userCredential = await createUserWithEmailAndPassword(
// 			auth,
// 			email,
// 			password
// 		);
// 		const user = userCredential.user;

// 		// Відправляємо лист для підтвердження пошти
// 		await sendEmailVerification(user);

// 		console.log("Користувач зареєстрований! Лист підтвердження відправлено.");
// 		return user;
// 	} catch (error) {
// 		console.error("Помилка реєстрації:", error.message);
// 		debugger;
// 	}
// };

// export const handleReg = async (e) => {
// 	e.preventDefault();
// 	try {
// 		await createUserWithEmailAndPassword(auth, email, password);
// 		const user = auth.currentUser;
// 		await sendEmailVerification(user);
// 		console.log(user);
// 		console.log("Користувач зареєстрований! Лист підтвердження відправлено.");
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// };

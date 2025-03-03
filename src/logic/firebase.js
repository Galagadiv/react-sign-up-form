// firebase.js
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"; // Для аутентифікації
import {getFirestore} from "firebase/firestore"; // Для бази даних Firestore
import {getStorage} from "firebase/storage"; // Для хмарного сховища

const firebaseConfig = {
	apiKey: "ВАШ_API_KEY",
	authDomain: "ВАШ_ДОМЕН",
	projectId: "ВАШ_PROJECT_ID",
	storageBucket: "ВАШ_STORAGE_BUCKET",
	messagingSenderId: "ВАШ_MESSAGING_SENDER_ID",
	appId: "ВАШ_APP_ID",
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Підключення сервісів
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

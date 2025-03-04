// // firebase.js
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"; // Для аутентифікації
import {getFirestore} from "firebase/firestore"; // Для бази даних Firestore
import {getStorage} from "firebase/storage"; // Для хмарного сховища

// const firebaseConfig = {
// 	apiKey: "AIzaSyBfG8H_AxziDTx-Y7v0daWTJIliI2VzKvo",
// 	authDomain: "ВАШ_ДОМЕН",
// 	projectId: "sobol24918",
// 	storageBucket: "ВАШ_STORAGE_BUCKET",
// 	messagingSenderId: "ВАШ_MESSAGING_SENDER_ID",
// 	appId: "ВАШ_APP_ID",
// };

// // Ініціалізація Firebase
// const app = initializeApp(firebaseConfig);

// // Підключення сервісів
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export default app;

import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAYB2MbidLNR8MLqok1KNv9NFu61BtSeik",
	authDomain: "reactauthv2.firebaseapp.com",
	projectId: "reactauthv2",
	storageBucket: "reactauthv2.firebasestorage.app",
	messagingSenderId: "292725916034",
	appId: "1:292725916034:web:90c718337b89f682184f9b",
	measurementId: "G-4NDH0WQD03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

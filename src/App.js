import "./assets/styles/common.css";
import "./assets/styles/reset.css";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "./logic/firebase";
import SignIn from "./pages/SignIn";

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		console.log("User info:", result.user);
	} catch (error) {
		console.error("Error during sign-in:", error);
	}
};

function App() {
	return <SignIn signInWithGoogle={signInWithGoogle} />;
}

export default App;

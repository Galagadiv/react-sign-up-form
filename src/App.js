import "./assets/styles/common.css";
import "./assets/styles/reset.css";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SingIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import React from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ForgotPass from "./pages/ForgotPass/ForgotPass";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/forgot-password" element={<ForgotPass />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;

import "./assets/styles/common.css";
import "./assets/styles/reset.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import React from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;

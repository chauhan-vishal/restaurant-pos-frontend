import Structure from "./views/Structure"
import { useState } from "react";
import Login from "./views/Login";

import "./resources/landrick/css/simplebar.css"
import "./resources/landrick/css/materialdesignicons.min.css"
import "./resources/landrick/css/tabler-icons.min.css"
import "./resources/landrick/select2/css/select2.min.css"
import "./resources/landrick/select2/css/select2-bootstrap4.min.css"

function App() {

	let storageLogin = localStorage.getItem("login")

	const [isLogIn, setIsLogIn] = useState(storageLogin == null)
	const [activeClass, setActiveClass] = useState("home")
	const [loginForm, setLoginForm] = useState(false)
	const [registerForm, setRegisterForm] = useState(false)

	return (
		<div className="App">
			{
				loginForm || registerForm
					? <Login setActiveClass={setActiveClass} loginForm={loginForm} setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} setIsLogIn={setIsLogIn} />
					: <Structure activeClass={activeClass} setActiveClass={setActiveClass} loginForm={loginForm} setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} isLogIn={isLogIn} />
			}
		</div>
	);
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from "../LoginModule/auth/SignIn";
import SignUp from "../LoginModule/auth/SignUp";
import Home from "./Components/Home";
import Result from "./Components/Result";
import Navbar from "./Components/layout/Navbar";
import Quiz from "./Components/quiz/Quiz";

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/SignIn" component={SignIn}></Route>
				<Route path="/SignUp" component={SignUp}></Route>
				<Route path="/Quiz" component={Quiz}></Route>
				<Route path="/Result" component={Result}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

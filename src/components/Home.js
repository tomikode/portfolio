import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import Arrow from "./Arrow.js";
import Experience from "./Experience";
import Typing from "./Typing";

// https://www.youtube.com/watch?v=UTHgr6NLeEw
// fix growing div size bug

const Home = ({ location }) => {

	useEffect(() => {
		const home = document.getElementById("home")
		if (location.pathname === "/") {
			home.classList = "container home"
		} else {
			home.classList = "container home hide"
		}
	}, [location.pathname])

	return (
		<div id="home" className="container home hide">
			<div className="centreContainer">
				<div className="centre">
					<div className="centreArrowText">Scroll down slowly</div>
					<Arrow />
				</div>
			</div>
			<Typing />
			<Experience />
		</div>
	);
};

export default Home;

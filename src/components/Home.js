import { useEffect } from "react";
import "../styles/Home.css";
import Arrow from "./Arrow.js";
import Experience from "./Experience";
import Typing from "./Typing";

// https://www.youtube.com/watch?v=UTHgr6NLeEw


const Home = ({ location }) => {

	useEffect(() => {
		const home = document.getElementById("home")
		if (location.pathname === "/") {
			home.classList = "container home hide"
			setTimeout(() => {
				home.classList = "container home"
			}, 300)
		} else {
			home.classList = "container home hide"
		}
	}, [location.pathname])

	const canvasPlay = () => {
		let c = document.getElementById("testCanvas");
		let ctx = c.getContext("2d");
		ctx.moveTo(0, 0);
		ctx.lineTo(200, 100);
		ctx.stroke();
	}

	useEffect(() => {
		canvasPlay()
	}, [])

	return (
		<div id="home" className="container home hide">
			<canvas id="testCanvas" width="200" height="200"/>
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

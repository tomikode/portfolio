import { useEffect } from "react";
import "../styles/Home.css";
import Arrow from "./Arrow.js";
import ContactBottom from "./ContactBottom";
import Experience from "./Experience";
import QuickTypePreview from "./QuickTypePreview";
import Typing from "./Typing";

// https://www.youtube.com/watch?v=UTHgr6NLeEw
// https://brittanychiang.com/
// http://findmatthew.com/
// work on more effects on text when scrolling, text and stuff


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

	return (
		<div id="home" className="container home hide">
			<div className="centreContainer">
				<div className="centre">
					<div className="centreArrowText"></div>
					<Arrow />
				</div>
			</div>
			<Typing />
			<Experience />
			<QuickTypePreview />
			<ContactBottom />
		</div>
	);
};

export default Home;

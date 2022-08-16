import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import Arrow from "./Arrow.js";
import Experience from "./Experience";
import Typing from "./Typing";

// https://www.youtube.com/watch?v=UTHgr6NLeEw
// fix growing div size bug

const Home = ({ location }) => {
	const determineShow = () => {
		if (location.pathname === "/") return "container home";
		return "container home hide";
	};

	return (
		<div id="home" className={determineShow()}>
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

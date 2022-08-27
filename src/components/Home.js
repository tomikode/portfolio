import { useEffect } from "react";
import "../styles/Home.css";
import ContactBottom from "./ContactBottom";
import Experience from "./Experience";
import QuickTypePreview from "./QuickTypePreview";
import Typing from "./Typing";

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
			<Typing />
			<Experience />
			<QuickTypePreview />
			<ContactBottom />
		</div>
	);
};

export default Home;

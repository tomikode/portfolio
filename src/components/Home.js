import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
	const location = useLocation();

	const determineShow = () => {
		if (location.pathname === "/") return "container home";
		return "container home hide";
	};

	return <div className={determineShow()}>Home</div>;
};

export default Home;

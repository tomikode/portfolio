import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import Arrow from "./Arrow.js";
import Typing from "./Typing";

// https://www.youtube.com/watch?v=UTHgr6NLeEw
// fix growing div size bug

const Home = () => {
	const location = useLocation();

	const determineShow = () => {
		if (location.pathname === "/") return "container home";
		return "container home hide";
	};

	return (
		<div id="home" className={determineShow()}>
			<div className="section">
				<div className="centreContainer">
					<div className="centre">
						<div className="centreArrowText">Scroll down slowly</div>
						<Arrow />
					</div>
				</div>
			</div>
			<div>
				<Typing />
			</div>
		</div>
	);
};

export default Home;

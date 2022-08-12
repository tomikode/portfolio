import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import Arrow from "./Arrow.js";


// https://www.youtube.com/watch?v=UTHgr6NLeEw

const Home = () => {
	const location = useLocation();


	useEffect(() => {

		return () => {
		};
	}, []);

	const determineShow = () => {
		if (location.pathname === "/") return "container home";
		return "container home hide";
	};

	return (
		<div id="home" className={determineShow()}>
			<div className="section">
				<div className="landing">
					<div className="centre">
						<div className="centreText">
							Scroll down slowly
						</div>
						<Arrow />
					</div>
				</div>
			</div>
			<div className="section" />
		</div>
	);
};

export default Home;

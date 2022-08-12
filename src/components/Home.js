import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Home.css";
import Arrow from "./Arrow.js";


// set scroll position to top when changing tabs
// scroll down to next vh when reaches certain bottom point
// disable scrolling??
// https://www.youtube.com/watch?v=UTHgr6NLeEw

const Home = () => {
	const location = useLocation();
	const lastScrollTop = useRef(0);
	const scrollRef = useRef(0);


	const onScroll = (e) => {
		const thisScroll = window.scrollY;
		const home = document.getElementById("home")
		console.log('here')
		if (lastScrollTop.current < thisScroll) {
			const home = document.getElementById("home")
			home.style.transform = "translateY(-100vh)";
		} else {
			home.style.transform = "translateY(100vh)";
		}
		lastScrollTop.current = window.scrollY;
	};

	useEffect(() => {
		document.addEventListener("scroll", onScroll);

		return () => {
			document.removeEventListener("scroll", onScroll);
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
		</div>
	);
};

export default Home;

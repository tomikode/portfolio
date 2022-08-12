import React, { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import '../styles/Navbar.css';
import { useLocation } from "react-router-dom";

const Navbar = () => {

	const location = useLocation();

	const onScroll = (e) => {
		const height = document.documentElement.scrollHeight
		const current = window.scrollY
		const windowHeight = window.innerHeight
		const newPercent = 100 * current / (height - windowHeight)
		const bar = document.getElementById("progress")
		bar.style.width = `${newPercent}%`
	}

	useEffect(() => {
		document.addEventListener("scroll", onScroll)

		return () => {
			document.removeEventListener("scroll", onScroll)
		}
	}, [])

	const resetScroll = () => {
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		resetScroll()
	}, [location])

	return (
		<div className="navbar">
			<div id="progress" className="progress" />
			<div className="navbarFlex">
				<img src="tp.png" className="logo" />
				<MobileMenu location={location} />
				<DesktopMenu location={location} />		
			</div>
		</div>
	);
};

export default Navbar;

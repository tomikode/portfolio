import React, { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import '../styles/Navbar.css';
import { Link } from "react-router-dom";


const Navbar = ({ location }) => {

	const onScroll = () => {
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


	useEffect(() => {
		const bar = document.getElementById("progress")
		bar.classList.add("hideProgress")
		setTimeout(() => {
			window.scrollTo(0, 0)
			bar.classList.remove("hideProgress")
		}, 300)
	}, [location.key])

	useEffect(() => {
		const navbar = document.getElementById("navbar")
		navbar.classList.add("hide")
		setTimeout(() => {
			navbar.classList.remove("hide")
		}, 1300)
		window.addEventListener("beforeunload", () => {
			window.scrollTo(0, 0)
		})
	}, [])


	return (
		<div id="navbar" className="navbar hide">
			<div id="progress" className="progress" />
			<div className="navbarFlex">
				<Link to="/"><img src="tplogo.png" className="tplogo" alt="TP Logo" /></Link>
				<MobileMenu location={location} />
				<DesktopMenu location={location} />		
			</div>
		</div>
	);
};

export default Navbar;

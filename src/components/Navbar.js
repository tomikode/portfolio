import React, { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import '../styles/Navbar.css';

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
		setTimeout(() => {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
		}, 300)		
	}, [location.key])

	useEffect(() => {
		const navbar = document.getElementById("navbar")
		navbar.classList.add("hide")
		setTimeout(() => {
			navbar.classList.remove("hide")
		}, 1300)
	}, [])

	return (
		<div id="navbar" className="navbar hide">
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

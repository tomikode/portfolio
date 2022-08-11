import React from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import '../styles/Navbar.css';
import { useLocation } from "react-router-dom";

const Navbar = () => {

	const location = useLocation();

	return (
		<div className="navbar">
			<div className="navbarFlex">
				<img src="tp.png" className="logo" />
				<MobileMenu location={location} />
				<DesktopMenu location={location} />		
			</div>
		</div>
	);
};

export default Navbar;

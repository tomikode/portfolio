import React from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import '../styles/Navbar.css';

const Navbar = () => {

	return (
		<div className="navbar">
			<div className="navbarFlex">
				<img src="tp.png" className="logo" />
				<MobileMenu />
				<DesktopMenu />		
			</div>
		</div>
	);
};

export default Navbar;

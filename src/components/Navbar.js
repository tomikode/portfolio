import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Menu from "./Menu";

const Navbar = () => {

	const showMenu = () => {
		const body = document.querySelector("body")
		body.classList.add("disableScroll")
	};

	return (
		<div className="navbar">
			<div className="navbarFlex">
				<img src="tp.png" className="logo" />
				<MenuIcon onClick={showMenu} className="icon" />
			</div>
			<div className="menu">
				<Menu />
			</div>
		</div>
	);
};

export default Navbar;

import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Menu from "./Menu";

const Navbar = () => {
	const showMenu = () => {
		const menu = document.getElementById("menu");
		menu.classList.add("showMenu");
		const links = document.querySelectorAll(".menu ul li");
		for (let link of links) {
			link.classList.add("showLink");
		}
		document.getElementById("menuIcon").classList.add("hideIcon")
		document.getElementById("xIcon").classList.add("showXIcon")
	};

	const hideMenu = () => {
		const menu = document.getElementById("menu");
		menu.classList.remove("showMenu");
		const links = document.querySelectorAll(".menu ul li");
		for (let link of links) {
			link.classList.remove("showLink");
		}
		document.getElementById("menuIcon").classList.remove("hideIcon")
		document.getElementById("xIcon").classList.remove("showXIcon")
	}

	return (
		<div className="navbar">
			<div className="navbarFlex">
				<img src="tp.png" className="logo" />
				<MenuIcon onClick={showMenu} className="icon" id="menuIcon" />
				<XIcon onClick={hideMenu} className="icon xIcon" id="xIcon" />
			</div>
			<Menu />
		</div>
	);
};

export default Navbar;

import React, { useEffect } from "react";
import Linkedin from "./Linkedin";
import Github from "./Github";
import { Link } from "react-router-dom";
import {
	ChatAlt2Icon,
	HomeIcon,
	XIcon,
	MenuIcon,
} from "@heroicons/react/solid";

const MobileMenu = ({ location }) => {
	const determineClasses = (link) => {
		return link === location.pathname;
	};

	useEffect(() => {
		const home = document.querySelector(".mobileMenu .homeLink");
		const contact = document.querySelector(".mobileMenu .contactLink");
		if (determineClasses("/")) {
			home.classList.add("currentLink");
			contact.classList.remove("currentLink");
		} else {
			home.classList.remove("currentLink");
			contact.classList.add("currentLink");
		}
	}, [location]);

	const showMenu = () => {
		const menu = document.getElementById("mobileMenu");
		menu.classList.add("showMobileMenu");
		const links = document.querySelectorAll(".mobileMenu ul a");
		for (let link of links) {
			link.classList.add("showLink");
		}
		document.getElementById("menuIcon").classList.add("hideIcon");
		document.getElementById("xIcon").classList.add("showXIcon");
	};

	const hideMenu = () => {
		const menu = document.getElementById("mobileMenu");
		menu.classList.remove("showMobileMenu");
		const links = document.querySelectorAll(".mobileMenu ul a");
		for (let link of links) {
			link.classList.remove("showLink");
		}
		document.getElementById("menuIcon").classList.remove("hideIcon");
		document.getElementById("xIcon").classList.remove("showXIcon");
	};

	return (
		<>
			<MenuIcon onClick={showMenu} className="icon" id="menuIcon" />
			<XIcon onClick={hideMenu} className="icon xIcon" id="xIcon" />
			<div className="mobileMenu" id="mobileMenu">
				<ul>
					<div onClick={hideMenu}>
						<Link to="/" className="mobileLink homeLink">
							<HomeIcon className="linkedIcon" />
							Home
						</Link>
					</div>
					<div onClick={hideMenu}>
						<Link to="/contact" className="mobileLink contactLink">
							<ChatAlt2Icon className="linkedIcon" />
							Contact
						</Link>
					</div>
					<a
						className="mobileLink linkedInLink"
						href="https://www.linkedin.com/in/tomipiisila/"
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin className="linkedIcon" />
						LinkedIn
					</a>
					<a
						className="mobileLink gitHubLink"
						href="https://github.com/tomikode"
						target="_blank"
						rel="noreferrer"
					>
						<Github className="linkedIcon" />
						GitHub
					</a>
				</ul>
			</div>
		</>
	);
};

export default MobileMenu;

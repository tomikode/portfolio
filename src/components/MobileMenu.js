import React from "react";
import Linkedin from "./Linkedin";
import Github from "./Github";
import {
	ChatAlt2Icon,
	HomeIcon,
	XIcon,
	MenuIcon,
} from "@heroicons/react/solid";

const MobileMenu = () => {
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
					<a className="mobileLink homeLink">
						<HomeIcon className="linkedIcon" />
						Home
					</a>
					<a className="mobileLink contactLink">
						<ChatAlt2Icon className="linkedIcon" />
						Contact
					</a>
					<a
						className="mobileLink linkedInLink"
						href="https://www.linkedin.com/in/tomipiisila/"
						target="_blank"
					>
						<Linkedin />
						LinkedIn
					</a>
					<a
						className="mobileLink gitHubLink"
						href="https://github.com/tomikode"
						target="_blank"
					>
						<Github />
						GitHub
					</a>
				</ul>
			</div>
		</>
	);
};

export default MobileMenu;

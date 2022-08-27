import React, { useEffect } from "react";
import Linkedin from "./Linkedin";
import Github from "./Github";
import { ChatAlt2Icon, HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const DesktopMenu = ({ location }) => {
	const determineClasses = (link) => {
		return link === location.pathname;
	};

	useEffect(() => {
		const home = document.querySelector(".desktopMenu .homeLink")
		const contact = document.querySelector(".desktopMenu .contactLink");
		if (determineClasses("/")) {
			home.classList.add("currentLink");
			contact.classList.remove("currentLink");
		} else {
			home.classList.remove("currentLink");
			contact.classList.add("currentLink");
		}
	}, [location]);

	return (
		<div className="desktopMenu" id="desktopMenu">
			<ul>
				<Link to="/" className="desktopLink homeLink">
					<HomeIcon className="linkedIcon" />
					Home
				</Link>
				<Link to="/contact" className="desktopLink contactLink">
					<ChatAlt2Icon className="linkedIcon" />
					Contact
				</Link>
				<a
					className="desktopLink linkedInLink"
					href="https://www.linkedin.com/in/tomipiisila/"
					target="_blank"
					rel="noreferrer"
				>
					<Linkedin className="linkedIcon" />
					LinkedIn
				</a>
				<a
					className="desktopLink gitHubLink"
					href="https://github.com/tomikode"
					target="_blank"
					rel="noreferrer"
				>
					<Github className="linkedIcon" />
					GitHub
				</a>
			</ul>
		</div>
	);
};

export default DesktopMenu;

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
		const home = document.getElementsByClassName("homeLink")[1];
		const contact = document.getElementsByClassName("contactLink")[1];
		if (determineClasses("/")) {
			home.classList.add("currentLink");
			contact.classList.remove("currentLink");
		} else {
			home.classList.remove("currentLink");
			contact.classList.add("currentLink");
		}
	}, [location]);

	const resetScroll = () => {
		window.scrollTo(0, 0);
	};

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
				>
					<Linkedin />
					LinkedIn
				</a>
				<a
					className="desktopLink gitHubLink"
					href="https://github.com/tomikode"
					target="_blank"
				>
					<Github />
					GitHub
				</a>
			</ul>
		</div>
	);
};

export default DesktopMenu;

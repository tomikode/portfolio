import React from "react";
import Linkedin from "./Linkedin";
import Github from "./Github";
import { ChatAlt2Icon, HomeIcon } from "@heroicons/react/solid";

const Menu = () => {
	return (
		<div className="menu" id="menu">
			<ul>
				<li className="menuLink homeLink">
					<HomeIcon className="linkedIcon" />
					Home
				</li>
				<li className="menuLink contactLink">
					<ChatAlt2Icon className="linkedIcon" />
					Contact
				</li>
				<li className="menuLink linkedInLink">
					<Linkedin />
					LinkedIn
				</li>
				<li className="menuLink gitHubLink">
					<Github />
					GitHub
				</li>
			</ul>
		</div>
	);
};

export default Menu;

import { MailIcon } from "@heroicons/react/solid";
import React from "react";
import "../styles/IconRow.css";
import Github from "./Github";
import Linkedin from "./Linkedin";

const IconRow = ({ show }) => {
	const openMail = () => {
		window.open(`mailto:tomi.piisila@gmail.com?subject=Message to Tomi`);
	};

	const getClass = () => {
		if (show) return "rowIcon";
		return "rowIcon hideRowIcon";
	};

	return (
		<div className="iconRow" id="iconRow">
			<MailIcon onClick={openMail} className={getClass()} />
			<a
				className=""
				href="https://www.linkedin.com/in/tomipiisila/"
				target="_blank"
				rel="noreferrer"
			>
				<Linkedin className={getClass()} />
			</a>
			<a
				className=""
				href="https://github.com/tomikode"
				target="_blank"
				rel="noreferrer"
			>
				<Github className={getClass()} />
			</a>
		</div>
	);
};

export default IconRow;

import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
	const location = useLocation();

	const determineShow = () => {
		if (location.pathname === "/contact") {
			// setTimeout(() => {
			// 	window.scrollTo(0, 0);
			// }, 1000)
			return "container contact";
		}
		return "container contact hide";
	};

	return <div className={determineShow()}>Contact</div>;
};

export default Contact;

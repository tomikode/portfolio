import React from "react";

const Contact = ({ location }) => {

	const determineShow = () => {
		if (location.pathname === "/contact") return "container contact";
		return "container contact hide";
	};

	return (
		<div id="contact" className={determineShow()}>
			Contact
		</div>
	);
};

export default Contact;

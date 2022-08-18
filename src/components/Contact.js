import React, { useEffect } from "react";

const Contact = ({ location }) => {

	useEffect(() => {
		const contact = document.getElementById("contact")
		if (location.pathname === "/contact") {
			contact.classList = "container contact hide"
			setTimeout(() => {
				contact.classList = "container contact"
			}, 300)
		} else {
			contact.classList = "container contact hide"
		}
	}, [location.pathname])

	return (
		<div id="contact" className="container contact hide">
			Contact
		</div>
	);
};

export default Contact;

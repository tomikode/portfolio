import React, { useEffect } from "react";
import "../styles/Contact.css";
import ContactCanvas from "./ContactCanvas";
import IconRow from "./IconRow";

const Contact = ({ location }) => {
	useEffect(() => {
		const contact = document.getElementById("contact");
		if (location.pathname === "/contact") {
			contact.classList = "container contact hide";
			setTimeout(() => {
				contact.classList = "container contact";
			}, 300);
		} else {
			contact.classList = "container contact hide";
		}
	}, [location.pathname]);

	return (
		<div id="contact" className="container contact hide">
			<div className="contactBox">
				<h1>Get In Touch</h1>
				<div className="textAndIcons">
					<div>
						<p>
							Feel free to contact me for any inquiries. I will
							try to respond as quick as I can! Or you can check
							out my GitHub to see the projects I have worked on.
						</p>
					</div>
					<IconRow show={true} />
				</div>
			</div>
			<ContactCanvas />
		</div>
	);
};

export default Contact;

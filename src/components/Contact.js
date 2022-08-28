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
	}, [location.key]);

	useEffect(() => {
		setTimeout(() => {
			const underline = document.getElementById("underline");
			const icons = document.getElementsByClassName("rowIcon");
			underline.classList.add("underlineGrow");
			for (let i = 0; i < icons.length; i++) {
				if (i === 0) icons[i].classList.add("showRowIcon");
				else
					setTimeout(() => {
						icons[i].classList.add("showRowIcon");
					}, 500 * i);
			}
		}, 2000);
	}, []);

	return (
		<div id="contact" className="container contact hide">
			<ContactCanvas />
			<div className="contactBox">
				<div className="contactTitle">
					<h1>Get In Touch</h1>
					<div id="underline" className="underline" />
				</div>
				<div className="textAndIcons">
					<div>
						<p>
							Feel free to contact me for any inquiries. I will
							try to respond as quick as I can! Or you can check
							out my GitHub to see the projects I have worked on.
						</p>
					</div>
					<IconRow show={false} />
				</div>
			</div>
		</div>
	);
};

export default Contact;

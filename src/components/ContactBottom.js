import { MailIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import "../styles/ContactBottom.css";
import BottomCanvas from "./BottomCanvas";
import Github from "./Github";
import Linkedin from "./Linkedin";

const ContactBottom = () => {
	const checkShows = () => {
		const underline = document.getElementById("underline");
		const icons = document.getElementsByClassName("rowIcon")
		const showHeight = (window.innerHeight * 3) / 5;
		if (underline.getBoundingClientRect().top < showHeight) {
			underline.classList.add("underlineGrow");
			for (let i = 0; i < icons.length; i++){
				if (i === 0)
					icons[i].classList.add("showRowIcon")
				else 
					setTimeout(() => {
						icons[i].classList.add("showRowIcon")
					}, 500 * i)
			}
			document.removeEventListener("scroll", checkShows);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", checkShows);

		return () => {
			document.removeEventListener("scroll", checkShows);
		};
	});

	const openMail = () => {
		window.open(`mailto:tomi.piisila@gmail.com?subject=Message to Tomi`);
	}

	return (
		<div id="contactBottomContainer">
			<div id="contactBottomForm" className="contactBottomForm">
				<div className="canvasSide">
					<BottomCanvas />
				</div>
				<div className="descSide">
					<div className="formTitle">
						<h1>Socials</h1>
						<div id="underline" className="underline" />
					</div>
					<div>
						<p>
							Feel free to contact me for any inquiries. I will
							try to respond as quick as I can! Or you can check
							out my GitHub to see the projects I have worked on.
						</p>
					</div>
					<div className="iconRow" id="iconRow">
						<MailIcon onClick={openMail} className="rowIcon" />
						<a
							className=""
							href="https://www.linkedin.com/in/tomipiisila/"
							target="_blank"
							rel="noreferrer"
						>
						<Linkedin className="rowIcon" />
						</a>
						<a
							className=""
							href="https://github.com/tomikode"
							target="_blank"
							rel="noreferrer"
						>
							<Github className="rowIcon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBottom;

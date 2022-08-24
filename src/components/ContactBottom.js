import React, { useEffect } from "react";
import "../styles/ContactBottom.css";

//https://uicookies.com/beautiful-css-forms/

const ContactBottom = () => {
	const checkShows = () => {
		const underline = document.getElementById("underline");
		const showHeight = (window.innerHeight * 3) / 5;
		if (underline.getBoundingClientRect().top < showHeight) {
			underline.classList.add("underlineGrow");
			document.removeEventListener("scroll", checkShows);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", checkShows);

		return () => {
			document.removeEventListener("scroll", checkShows);
		};
	});

	return (
		<div id="contactBottomContainer">
			<div className="contactBottomForm">
				<div className="canvasSide"></div>
				<div className="formSide">
					<div className="formTitle">
						<h1>Contact Me</h1>
						<div id="underline" className="underline" />
					</div>
					<form>
						<div className="inputGroup">
							<input type="text"></input>
							<label>Name</label>
						</div>
						<div className="inputGroup">
							<input type="text"></input>
							<label>Email</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactBottom;

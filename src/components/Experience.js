import React, { useEffect } from "react";
import Canvas from "./Canvas";
import "../styles/Experience.css";

const Experience = () => {
	const checkBoxes = () => {
		const sections = document.getElementsByClassName("expSection");
		const showHeight = (window.innerHeight * 4) / 5;
		let slideNumber = 0;
		for (const section of sections) {
			const top = section.getBoundingClientRect().top;
			if (top < showHeight) {
				section.classList.add("slideIn");
				slideNumber++;
			}
		}
		if (slideNumber === 4)
			document.removeEventListener("scroll", checkBoxes);
	};

	useEffect(() => {
		document.addEventListener("scroll", checkBoxes);
		return () => {
			document.removeEventListener("scroll", checkBoxes);
		};
	}, []);

	return (
		<div id="experienceContainer" className="centreContainer">
			<Canvas />
			<div className="maxWidthContainer">
				<div className="expFlexContainer">
					<div className="expSection about">
						<div className="expTitle">About Me</div>
						<div className="expDesc">
							Hi there!
							<br />
							My name is Tomi Piisila
							<br />
							I am 3rd year university student studying at UTS. 
							I am a young web developer most skilled with JavaScript.
							<img
								className="profilePic"
								src="profile pic zoom.jpg"
								alt="Tomi"
							/>
						</div>
					</div>
					<div className="expSection languageExp expEven">
						<div className="expTitle">Experience</div>
						<div className="expDesc">
							<div>
								Primary skills:
								<ul>
									<li>JavaScript</li>
									<li>React JS</li>
									<li>Next JS</li>
									<li>HTML + CSS</li>
								</ul>
								Secondary skills:
								<ul>
									<li>SVG</li>
									<li>Express</li>
									<li>MongoDB</li>
									<li>C#, C++, C</li>
									<li>WordPress</li>
									<li>Java</li>
									<li>SQL</li>
									<li>Unity</li>
									<li>Python</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="expSection uniExp">
						<div className="expTitle">University</div>
						<div className="expDesc">
							Studying Bachelor of Science in IT Diploma in IT
							Professional Practice
							<br />
							Major in Enterprise Systems Development
							<br />
							<br />
							Finishing Study: Nov 2023
							<br />
							WAM: 88.48 (GPA: 6.67)
						</div>
					</div>
					<div className="expSection interests expEven">
						<div className="expTitle">Interests</div>
						<div className="expDesc">
							<div>
								My favourite interests are:
								<ul>
									<li>Bodybuilding</li>
									<li>Coding</li>
									<li>Reading</li>
									<li>Meditation</li>
									<li>Gaming</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;

import React, { useEffect } from "react";
import "../styles/QuickType.css";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import SectionArrow from "./SectionArrow";

const QuickTypePreview = () => {
	const onScroll = () => {
		const qt = document.getElementsByClassName("quicktype")[0];
		const qtText = document.getElementsByClassName("projectText")[0];
		const showHeight = (window.innerHeight * 4) / 5;
		if (qtText.getBoundingClientRect().top < showHeight) {
			qt.classList.add("showType");
			const children = qtText.children;
			for (let i = 0; i < children.length; i++) {
				if (i > 0) {
					setTimeout(() => {
						children[i].classList.add("showQtText");
					}, i * 500);
				} else children[i].classList.add("showQtText");
			}
			document.removeEventListener("scroll", onScroll);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", onScroll);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, []);

	const openQt = () => {
		window.open("https://quicktype.vercel.app/", "_blank").focus();
	};

	return (
		<>
			<div id="quicktypeContainer">
				<div className="maxWidthContainer">
					<div className="quicktypeFlex">
						<div className="projectText">
							<h1>Project Example</h1>
							<p className="projectDesc">
								QuickType was a project aimed at creating a
								typing test web application that can be used to
								measure the speed of one's typing or simply
								practice. Test it out here! Or click the button
								below to go directly to the site.
							</p>
							<button className="button" onClick={openQt}>
								<p>QuickType</p>
								<ExternalLinkIcon id="qtLink" />
							</button>
						</div>
						<embed
							className="quicktype"
							src="https://quicktype.vercel.app/"
						/>
					</div>
				</div>
			</div>
			<SectionArrow />
		</>
	);
};

export default QuickTypePreview;

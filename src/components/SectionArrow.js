import React, { useEffect } from "react";
import "../styles/SectionArrow.css";

const SectionArrow = () => {

	const checkGrow = () => {
		const triangle = document.getElementById("triangle")
		const showHeight = (window.innerHeight * 3) / 5;
		if (triangle.getBoundingClientRect().top < showHeight){
			triangle.style.height = "200px";
			document.removeEventListener("scroll", checkGrow)
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", checkGrow);
		return () => {
			document.removeEventListener("scroll", checkGrow)
		}
	}, []);

	return (
		<div className="triangleBackground">
			<svg
				viewBox="0 0 509 254"
				xmlns="http://www.w3.org/2000/svg"
				id="triangle"
				preserveAspectRatio="none"
				className="triangle"
			>
				<rect
					x="254.558"
					y="-255"
					width="360"
					height="360"
					transform="rotate(45 255 -255)"
				/>
			</svg>
		</div>
	);
};

export default SectionArrow;

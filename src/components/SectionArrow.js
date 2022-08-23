import React, { useEffect } from "react";
import "../styles/SectionArrow.css";

const SectionArrow = () => {
	useEffect(() => {
		document.addEventListener("scroll", (e) => {
			// const left = document.getElementById("leftTriangle")
            // const right = document.getElementById("rightTriangle")
			// const showHeight = (window.innerHeight * 4) / 5;
            // console.log('dafuq')
			// if (left.getBoundingClientRect().top < showHeight){
            //     console.log('yes')
            //     left.classList.add("showLeft")
            //     right.classList.add("showRight")
            // }
		});
	}, []);

	return (
		<>
			<div id="leftTriangle" className="left" />
			<div id="rightTriangle" className="right" />
		</>
	);
};

export default SectionArrow;

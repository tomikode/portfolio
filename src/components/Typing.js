import React, { useEffect, useRef, useState } from "react";
import "../styles/Typing.css";
import Arrow from "./Arrow";

const Typing = () => {
	const toType = ["tomi piisila", "a web developer"];
	const typedPos = useRef(0);
	const phrasePos = useRef(0);

	const [typed, setTyped] = useState("");

	useEffect(() => {
		typeCycle();
	}, []);

	const typeCycle = () => {
		const cursor = document.getElementById("cursor");
		if (!cursor) return
		if (typedPos.current < toType[phrasePos.current].length) {
			typedPos.current++;
			setTyped(toType[phrasePos.current].slice(0, typedPos.current));
			setTimeout(() => {
				typeCycle();
			}, 50);
		} else {
			cursor.classList.add("breathing");
			setTimeout(() => {
				cursor.classList.remove("breathing");
				backspaceCycle();
			}, 2000);
		}
	};

	const backspaceCycle = () => {
		const cursor = document.getElementById("cursor");
		if (!cursor) return
		if (typedPos.current > 0) {
			typedPos.current--;
			setTyped(toType[phrasePos.current].slice(0, typedPos.current));
			setTimeout(() => {
				backspaceCycle();
			}, 50);
		} else {
			if (phrasePos.current === toType.length - 1) {
				phrasePos.current = 0;
			} else {
				phrasePos.current++;
			}
			cursor.classList.add("breathing");
			setTimeout(() => {
				cursor.classList.remove("breathing");
				typeCycle();
			}, 500);
		}
	};

	return (
		<div className="typedContainer">
			<div className="maxWidthContainer">
				<div className="typingBoxContainer">
					<div className="centreTyping">
						<p>{">"} whoami</p>
						<div className="typingLetters">
							<p className="typingWord">{">"}</p>
							{typed.split(" ").map((letter, index) => {
								return (
									<p className="typingWord" key={index}>
										{letter}
									</p>
								);
							})}
							<div className="cursor" id="cursor" />
						</div>
					</div>
				</div>
			</div>
			<Arrow />
		</div>
	);
};

export default Typing;

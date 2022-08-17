import React, { useEffect, useRef, useState } from "react";
import "../styles/Typing.css";

const Typing = () => {
	const toType = ["tomi piisila", "a web developer", "a uni student"];
	const typedPos = useRef(0);
	const phrasePos = useRef(0);

	const [typed, setTyped] = useState("");

	useEffect(() => {
		typeCycle();
	}, []);

	const typeCycle = () => {
		if (typedPos.current < toType[phrasePos.current].length) {
			typedPos.current++;
			setTyped(toType[phrasePos.current].slice(0, typedPos.current));
			setTimeout(() => {
				typeCycle();
			}, 100);
		} else {
			const cursor = document.getElementById("cursor");
			cursor.classList.add("breathing");
			setTimeout(() => {
				cursor.classList.remove("breathing");
				backspaceCycle();
			}, 2000);
		}
	};

	const backspaceCycle = () => {
		if (typedPos.current > 0) {
			typedPos.current--;
			setTyped(toType[phrasePos.current].slice(0, typedPos.current));
			setTimeout(() => {
				backspaceCycle();
			}, 100);
		} else {
			if (phrasePos.current === 2) {
				phrasePos.current = 0;
			} else {
				phrasePos.current++;
			}
			const cursor = document.getElementById("cursor");
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
		</div>
	);
};

export default Typing;

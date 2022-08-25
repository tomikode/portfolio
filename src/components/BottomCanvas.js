import { configure } from "@testing-library/react";
import React, { useEffect, useRef } from "react";

const BottomCanvas = () => {
	const canvasRef = useRef(null);
	const ctxRef = useRef(null);

	class Particle {
		constructor() {
			this.x = Math.random() * canvasRef.current.width;
			this.y = Math.random() * canvasRef.current.height;
			this.opacity = Math.random();
			this.size = Math.random() * 5 + 1;
			this.growth = Math.random() * 0.001 - 0.0005;
			this.speedX = Math.random() * 0.3;
			this.speedY = Math.random() * 0.1 - 0.05;
		}

		startLeft() {
			this.x = -10;
			this.y = Math.random() * canvasRef.current.height;
		}

		update() {
			this.x += this.speedX;
			this.y += this.speedY;
			if (this.size + this.growth > 0) this.size += this.growth;
		}

		draw() {
			ctxRef.current.globalAlpha = this.opacity;
			ctxRef.current.fillStyle = `white`;
			ctxRef.current.beginPath();
			ctxRef.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctxRef.current.fill();
		}

		checkGone() {
			if (this.x > canvasRef.current.width + 10) return true;
		}
	}

	const canvasSize = () => {
        const canvasSide = document.getElementsByClassName("canvasSide")[0]
		canvasRef.current.width = canvasSide.clientWidth;
		canvasRef.current.height = canvasSide.clientHeight;
        console.log('stuff')
	};

	useEffect(() => {
		canvasRef.current = document.getElementById("bottomCanvas");
		ctxRef.current = canvasRef.current.getContext("2d");
		window.addEventListener("resize", canvasSize);
		canvasSize()
		init();
		animate();
		return () => {
			window.removeEventListener("resize", canvasSize);
		};
	}, []);

	let particleArray = [];

	const init = () => {
		particleArray = [];
		for (let i = 0; i < 300; i++) {
			createParticle();
		}
	};

	const updateParticles = () => {
		for (let i = 0; i < particleArray.length; i++) {
			if (particleArray[i].checkGone()) {
				particleArray.splice(i, 1)
				i--
				continue
			}
			particleArray[i].update();
			particleArray[i].draw();
		}
	};

	const createParticle = () => {
		const part = new Particle();
		particleArray.push(part);
	};

	const animate = () => {
		if(!document.getElementById("bottomCanvas"))
			return
		ctxRef.current.clearRect(
			0,
			0,
			canvasRef.current.width,
			canvasRef.current.height
		);
		updateParticles();
		setTimeout(() => {
			const part = new Particle()
			part.startLeft()
			particleArray.push(part)
		}, 100);
		requestAnimationFrame(animate);
	};

	return <canvas id="bottomCanvas" />;
};

export default BottomCanvas;

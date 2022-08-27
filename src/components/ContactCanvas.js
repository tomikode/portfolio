import React, { useEffect, useRef } from "react";

const ContactCanvas = () => {
	const canvasRef = useRef(null);
	const ctxRef = useRef(null);

	const tilt = 400;

	class Particle {
		constructor() {
			this.x1 = Math.random() * (canvasRef.current.width + tilt);
			this.y1 = 0;
			this.x2 = this.x1 - tilt;
			this.y2 = canvasRef.current.height;
			this.width = Math.random() * 6;
			this.opacity = Math.random();
			this.speedX = Math.random() * 0.3 - 0.15;
		}

		startLeftOrRight() {
			const startLeft = Math.random() * 2;
			if (startLeft < 1) {
				this.x1 = 0;
				this.y1 = 0;
				this.x2 = -tilt;
				this.y2 = canvasRef.current.height;
			} else {
				this.x1 = canvasRef.current.width + tilt;
				this.y1 = 0;
				this.x2 = canvasRef.current.width;
				this.y2 = canvasRef.current.height;
			}
		}

		update() {
			this.x1 += this.speedX;
			this.x2 += this.speedX;
		}

		draw() {
			ctxRef.current.globalAlpha = this.opacity;
			ctxRef.current.strokeStyle = `rgb(0, 200, 200)`;
			ctxRef.current.beginPath();
			ctxRef.current.lineWidth = this.width;
			ctxRef.current.moveTo(this.x1, this.y1);
			ctxRef.current.lineTo(this.x2, this.y2);
			ctxRef.current.stroke();
		}

		checkGone() {
			if (this.x2 > canvasRef.current.width + 10) return true;
            if (this.x1 < -10) return true;
            return false;
		}
	}

	const canvasSize = () => {
		const canvasSide = document.getElementById("contact");
		canvasRef.current.width = canvasSide.clientWidth;
		canvasRef.current.height = canvasSide.clientHeight;
	};

	useEffect(() => {
		canvasRef.current = document.getElementById("contactCanvas");
		ctxRef.current = canvasRef.current.getContext("2d");
		window.addEventListener("resize", canvasSize);
		canvasSize();
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
				particleArray.splice(i, 1);
				i--;
				continue;
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
		if (!document.getElementById("contactCanvas")) return;
		ctxRef.current.clearRect(
			0,
			0,
			canvasRef.current.width,
			canvasRef.current.height
		);
		updateParticles();
		setTimeout(() => {
			const part = new Particle();
			part.startLeftOrRight();
			particleArray.push(part);
		}, 2000);
		requestAnimationFrame(animate);
	};

	return <canvas id="contactCanvas" />;
};

export default ContactCanvas;

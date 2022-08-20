import React, { useEffect, useRef } from "react";

const Canvas = () => {
	const canvasRef = useRef(null);
	const ctxRef = useRef(null);

	const mouse = {
		x: undefined,
		y: undefined,
	};

	class Particle {
		constructor() {
            this.alive = new Date()
            this.dead = new Date()
            this.dead.setSeconds(this.dead.getSeconds() + 2)
			this.x = Math.random() * canvasRef.current.width;
			this.y = Math.random() * canvasRef.current.height;
            this.opacity = (this.dead - this.alive) / 2
			this.size = Math.random() * 5 + 1;
			this.speedX = Math.random() * 2 - 1;
			this.speedY = Math.random() * 2;
		}

		update() {
			this.x += this.speedX;
			this.y += this.speedY;
            this.size *= 0.995
		}

        draw(){
            this.alive = new Date()
            this.opacity = (this.dead - this.alive) / 2000
            ctxRef.current.globalAlpha = this.opacity
            ctxRef.current.fillStyle = `rgb(25, 31, 25)`;
            ctxRef.current.lineWidth = 3;
            ctxRef.current.beginPath();
            ctxRef.current.moveTo(0, 0)
            ctxRef.current.lineTo(this.x, this.y)
            // ctxRef.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctxRef.current.stroke();
        }

        checkGone(){
            if (this.x > canvasRef.current.width || this.x < 0 || this.y > canvasRef.current.height)
                return true;

        }
	}

	const canvasSize = () => {
		canvasRef.current.width = window.innerWidth;
		canvasRef.current.height = window.innerHeight;
	};

	useEffect(() => {
		canvasRef.current = document.getElementById("testCanvas");
		ctxRef.current = canvasRef.current.getContext("2d");
        ctxRef.current.fillStyle = 'rgb(25, 31, 25)';
		canvasSize();
		window.addEventListener("resize", canvasSize);
		canvasRef.current.addEventListener("mousemove", getMouse);
		animate();
		return () => {
			window.removeEventListener("resize", canvasSize());
			canvasRef.current.removeEventListener("mousemove", getMouse);
		};
	}, []);

	const getMouse = (e) => {
		mouse.x = e.layerX;
		mouse.y = e.layerY;
		// drawCircle()
	};

    const particleArray = []

    const updateParticles = () => {
        for (let i = 0; i < particleArray.length; i++){
            particleArray[i].update()
            particleArray[i].draw()
    }
}

	const animate = () => {
		ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        const part = new Particle()
        particleArray.push(part)
        updateParticles()
        setTimeout(() => {
            particleArray.shift()
        }, 2000)
		requestAnimationFrame(animate);
	};

	return <canvas id="testCanvas" />;
};

export default Canvas;

"use client";

import { useEffect, useRef, useState } from "react";

export default function VantaBirds({ children, className = "" }) {
	const vantaRef = useRef(null);
	const [vantaEffect, setVantaEffect] = useState(null);

	useEffect(() => {
		let effect = null;

		const loadVanta = async () => {
			try {
				// Load legacy Three.js from CDN dynamically to avoid version conflicts with @react-three/drei
				if (!window.THREE) {
					await new Promise((resolve, reject) => {
						const script = document.createElement("script");
						script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
						script.onload = resolve;
						script.onerror = reject;
						document.head.appendChild(script);
					});
				}

				const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;

				if (vantaRef.current && !effect) {
					effect = BIRDS({
						el: vantaRef.current,
						THREE: window.THREE,
						mouseControls: true,
						touchControls: true,
						gyroControls: false,
						minHeight: 600,
						minWidth: 200,
						scale: 1.0,
						scaleMobile: 1.0,
						backgroundColor: 0x0a0f1e,
						color1: 0x2563eb,
						color2: 0x9333ea,
						colorMode: "variance",
						birdSize: 1.2,
						wingSpan: 25.0,
						speedLimit: 4.0,
						separation: 60.0,
						alignment: 40.0,
						cohesion: 30.0,
						quantity: 4.0,
					});
					setVantaEffect(effect);
				}
			} catch (err) {
				console.warn("Vanta.js failed to initialize:", err);
			}
		};

		loadVanta();

		return () => {
			if (effect) effect.destroy();
		};
	}, []);

	return (
		<div
			ref={vantaRef}
			className={className}
			style={{
				position: "relative",
				width: "100%",
				minHeight: "600px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "0 0 28px 28px",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					position: "relative",
					zIndex: 2,
					textAlign: "center",
					padding: "3rem 1.5rem",
				}}
			>
				{children}
			</div>
		</div>
	);
}

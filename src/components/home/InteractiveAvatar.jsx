'use client';

import style from '@/styles/InteractiveAvatar.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function InteractiveAvatar() {
	const cardRef = useRef(null);
	const svgRef = useRef(null);
	const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
	const [headTilt, setHeadTilt] = useState({ rotateX: 0, rotateY: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!cardRef.current || !svgRef.current) return;
			const rect = svgRef.current.getBoundingClientRect();

			// Center of the face/avatar on the viewport
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			// Vector distance from avatar center to cursor
			const deltaX = e.clientX - centerX;
			const deltaY = e.clientY - centerY;

			// Normalize distance relative to window size
			const normX = deltaX / (window.innerWidth / 2);
			const normY = deltaY / (window.innerHeight / 2);

			// Max movement for pupils in SVG coordinates
			const maxMoveX = 14;
			const maxMoveY = 7;

			setPupilPos({
				x: Math.max(-maxMoveX, Math.min(maxMoveX, normX * maxMoveX * 1.5)),
				y: Math.max(-maxMoveY, Math.min(maxMoveY, normY * maxMoveY * 1.5)),
			});

			// Head 3D tilt
			const cardRect = cardRef.current.getBoundingClientRect();
			const cardCenterX = cardRect.left + cardRect.width / 2;
			const cardCenterY = cardRect.top + cardRect.height / 2;
			
			const cardDeltaX = e.clientX - cardCenterX;
			const cardDeltaY = e.clientY - cardCenterY;
			
			const tiltMax = 12;
			const tiltY = (cardDeltaX / (window.innerWidth / 2)) * tiltMax;
			const tiltX = -(cardDeltaY / (window.innerHeight / 2)) * tiltMax;

			setHeadTilt({
				rotateX: Math.max(-tiltMax, Math.min(tiltMax, tiltX)),
				rotateY: Math.max(-tiltMax, Math.min(tiltMax, tiltY)),
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div className={style.avatarStage}>
			<div
				ref={cardRef}
				className={style.trackerCard}
				style={{
					transform: `perspective(1000px) rotateX(${headTilt.rotateX}deg) rotateY(${headTilt.rotateY}deg)`,
				}}
			>
				<div className={style.svgWrapper}>
					<svg 
						ref={svgRef}
						viewBox="0 0 400 400" 
						xmlns="http://www.w3.org/2000/svg" 
						className={style.characterSvg}
					>
						{/* Background */}
						<defs>
							<linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#4f46e5" />
								<stop offset="100%" stopColor="#ec4899" />
							</linearGradient>
							<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
								<feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.15" />
							</filter>
						</defs>
						<circle cx="200" cy="200" r="190" fill="url(#avatarBg)" />

						<g filter="url(#shadow)">
							{/* Body */}
							<path d="M 90 400 C 90 270, 310 270, 310 400" fill="#1e293b" />
							<path d="M 120 400 C 120 310, 280 310, 280 400" fill="#334155" />

							{/* Neck */}
							<rect x="175" y="260" width="50" height="50" fill="#ffb8b8" />
							<rect x="175" y="260" width="50" height="20" fill="#e09f9f" /> {/* shadow */}

							{/* Face */}
							<rect x="120" y="100" width="160" height="190" rx="70" fill="#ffc8c8" />

							{/* Ears */}
							<circle cx="115" cy="190" r="18" fill="#ffb8b8" />
							<circle cx="285" cy="190" r="18" fill="#ffb8b8" />
							<circle cx="115" cy="190" r="8" fill="#e09f9f" opacity="0.6"/>
							<circle cx="285" cy="190" r="8" fill="#e09f9f" opacity="0.6"/>

							{/* Hair base */}
							<path d="M 110 150 C 100 60, 300 60, 290 150 C 290 100, 110 100, 110 150" fill="#0f172a" />
							<path d="M 100 140 C 120 80, 280 80, 300 140 C 280 50, 120 50, 100 140" fill="#0f172a" />
							<path d="M 110 130 Q 150 70 200 100 Q 250 70 290 130 Q 290 40 110 40 Z" fill="#1e293b" />

							{/* Eyebrows */}
							<path d="M 135 155 Q 155 145 175 155" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
							<path d="M 225 155 Q 245 145 265 155" fill="none" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />

							{/* Left Eye Socket */}
							<rect x="135" y="170" width="45" height="30" rx="15" fill="#ffffff" />
							{/* Right Eye Socket */}
							<rect x="220" y="170" width="45" height="30" rx="15" fill="#ffffff" />

							{/* Left Pupil */}
							<circle cx={157.5 + pupilPos.x} cy={185 + pupilPos.y} r="10" fill="#0f172a" style={{ transition: 'cx 0.1s ease-out, cy 0.1s ease-out' }} />
							<circle cx={160 + pupilPos.x} cy={182 + pupilPos.y} r="3" fill="#ffffff" style={{ transition: 'cx 0.1s ease-out, cy 0.1s ease-out' }} /> {/* Eye gleam */}
							
							{/* Right Pupil */}
							<circle cx={242.5 + pupilPos.x} cy={185 + pupilPos.y} r="10" fill="#0f172a" style={{ transition: 'cx 0.1s ease-out, cy 0.1s ease-out' }} />
							<circle cx={245 + pupilPos.x} cy={182 + pupilPos.y} r="3" fill="#ffffff" style={{ transition: 'cx 0.1s ease-out, cy 0.1s ease-out' }} />

							{/* Glasses (Optional, adds a tech vibe) */}
							<rect x="125" y="160" width="65" height="50" rx="10" fill="none" stroke="#3b82f6" strokeWidth="4" opacity="0.8" />
							<rect x="210" y="160" width="65" height="50" rx="10" fill="none" stroke="#3b82f6" strokeWidth="4" opacity="0.8" />
							<line x1="190" y1="185" x2="210" y2="185" stroke="#3b82f6" strokeWidth="4" opacity="0.8" />

							{/* Nose */}
							<path d="M 190 220 Q 200 240 210 220" fill="none" stroke="#e09f9f" strokeWidth="5" strokeLinecap="round" />

							{/* Mouth */}
							<path d="M 175 255 Q 200 270 225 255" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
}

'use client';
import { useRef } from 'react';
import "@/styles/animatedSkill.scss";
import gsap from 'gsap';

const AnimatedSkill = ({ icon, title, description, color, size, className = '' }) => {
	const cardRef = useRef(null);

	// Clamp size to 1-10 range
	const clampedSize = Math.min(10, Math.max(1, size || 1));
	// Boosted proficiency formula: converts scale [4 - 7] into realistic [65% - 95%]
	const proficiency = Math.min(98, Math.max(30, Math.round(clampedSize * 10 + 25)));

	// Level evaluation based on real calculated proficiency percentage
	const getLevel = (pct) => {
		if (pct >= 90) return "Expert";
		if (pct >= 80) return "Advanced";
		return "Proficient";
	};

	const handleMouseMove = (e) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		const normX = x / (rect.width / 2);
		const normY = y / (rect.height / 2);

		gsap.to(cardRef.current, {
			rotateY: normX * 7,
			rotateX: -normY * 7,
			y: -6,
			duration: 0.25,
			ease: "power1.out",
			transformPerspective: 800,
		});
	};

	const handleMouseLeave = () => {
		if (!cardRef.current) return;
		gsap.to(cardRef.current, {
			rotateY: 0,
			rotateX: 0,
			y: 0,
			duration: 0.5,
			ease: "power2.out",
		});
	};

	const cardStyle = { '--skill-color': color || '#2563eb' };

	return (
		<div 
			ref={cardRef} 
			style={cardStyle} 
			className={`eachSkillCard ${className}`}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{/* Top row: Icon + Level Badge */}
			<div className="cardHeader">
				<div className="skillIconWrapper">{icon}</div>
				<span className="levelBadge">{getLevel(proficiency)}</span>
			</div>

			{/* Title & Description */}
			<h3 className="skillTitle">{title}</h3>
			<p className="skillDesc">{description}</p>

			{/* Proficiency Progress Bar */}
			<div className="proficiencyTracker">
				<div className="trackerLabel">
					<span>Proficiency</span>
					<span>{proficiency}%</span>
				</div>
				<div className="progressBarOuter">
					<div className="progressBarInner" style={{ width: `${proficiency}%` }} />
				</div>
			</div>
		</div>
	);
};

export default AnimatedSkill;
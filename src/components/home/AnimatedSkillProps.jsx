import { useInView } from 'react-intersection-observer';
import "@/styles/animatedSkill.scss"; // Ensure this path is correct

const AnimatedSkill = ({ icon, title, description, color, size, className = '' }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Keep it visible after scrolling
		threshold: 0.1,
	});

	// Clamp size to 5-10 range
	const clampedSize = Math.min(10, Math.max(5, size || 5));
	const proficiency = clampedSize * 10; // 50% to 100%

	// Get a descriptive level name based on clamped proficiency
	const getLevel = (s) => {
		if (s >= 9) return "Expert";
		if (s >= 7) return "Advanced";
		return "Proficient";
	};

	const cardStyle = { '--skill-color': color || '#2563eb' };

	return (
		<div ref={ref} style={cardStyle} className={`eachSkillCard ${inView ? "fadeIn" : "fadeOut"} ${className}`}>
			{/* Top row: Icon + Level Badge */}
			<div className="cardHeader">
				<div className="skillIconWrapper">{icon}</div>
				<span className="levelBadge">{getLevel(clampedSize)}</span>
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
					<div className="progressBarInner" style={{ width: inView ? `${proficiency}%` : '0%' }} />
				</div>
			</div>
		</div>
	);
};

export default AnimatedSkill;
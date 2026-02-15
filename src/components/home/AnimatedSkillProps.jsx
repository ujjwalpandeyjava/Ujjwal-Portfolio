import { useInView } from 'react-intersection-observer';
import "@/styles/animatedSkill.scss"; // Ensure this path is correct

const AnimatedSkill = ({ icon, title, description, className = '' }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Keep it visible after scrolling
		threshold: 0.1,
	});

	return (
		<div ref={ref} className={`eachSkill ${inView ? "fadeIn" : "fadeOut"} ${className}`}>

			{/* Left Side: Icon + Name */}
			<div className="skillLeft">
				<div className="skillIcon">{icon}</div>
				<div className="skillTitle">{title}</div>
			</div>

			{/* Right Side: Description */}
			<div className="eachSkillDescription">
				{description}
			</div>

		</div>
	);
};

export default AnimatedSkill;
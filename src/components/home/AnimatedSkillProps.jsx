import { useInView } from 'react-intersection-observer';
import "@/styles/animatedSkill.scss"


const AnimatedSkill = ({ icon, title, description, className = '' }) => {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.1,
	});


	return (
		<div ref={ref} className={`eachSkill ${inView ? "fadeIn" : "fadeOut"} ${className}`}>
			<div className="skillIcon">{icon}</div>
			<div>{title}</div>
			<div className="eachSkillDescription">{description}</div>
		</div>
	);
};

export default AnimatedSkill;

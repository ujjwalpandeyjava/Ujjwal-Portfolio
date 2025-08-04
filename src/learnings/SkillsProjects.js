import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { SiNextra } from "react-icons/si";
import useDocumentTitle from '../assets/useDocumentTitle';
import workingImg from '../images/working_on_laptop.png';
import styles from "./ExperienceLearning.module.css";
import ProjectsByMe from './ProjectsByMe';
import Skills from './Skills';
import EducationExperience from "./EducationExperience";


function SkillsProjects() {
	useDocumentTitle("Project and Skills")


	return (
		<>
			<div className={styles.experienceTxt}>
				<img src={workingImg} alt="I got experience" />
				<div className={styles.journey}>
					<span className={styles.journeyHeading}>Embarking on my journey as a Senior Product Developer <br /> (Full-stack web developer)</span>
					<p className={styles.journeyText}>
						<RiDoubleQuotesL />
						I started with a strong foundation in Java, HTML, CSS, JavaScript, and MySQL. As I progressed, I expanded my skill set to include Spring-Boot, ReactJs, Typescript, SCSS, MongoDB. My educational background provided me theoretical knowledge, while my work experience allowed me to apply those theories in real-world applications.
						<RiDoubleQuotesR />
					</p>
				</div>
				<p className={styles.journeyOtherTxt}>
					<div className={styles.projectExperience}>Project Experience</div>
					<p>
						Overtime, I accumulated a wealth of experience that has shaped me. Each project, I undertook was a new learning experience, pushing me to explore new technologies and frameworks. I embraced all the challenges, viewing them as opportunities to grow and refine my skills. Today, I stand as a proficient developer, ready to take on any new challenge and provide innovative solutions.
					</p>
					<br />
					<SiNextra size="0.75rem" />My journey is a testament to my passion for fullstack web development holding fire for future!
				</p>
			</div>
			<EducationExperience />
			<ProjectsByMe />
			<Skills />
		</>
	)
}

export default SkillsProjects
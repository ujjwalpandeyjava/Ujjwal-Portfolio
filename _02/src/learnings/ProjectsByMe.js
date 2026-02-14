import ContactMe from '../contact/contactMe';
import Certificates from "../imageCarousel/certificate/Certificates";
import styles from './ProjectsByMe.module.css';
import { FaLink } from 'react-icons/fa6';




export default function ProjectsByMe() {
	return (
		<div className={styles.projectsByMe}>
			<h2><u style={{ textDecorationStyle: "double" }}>FEATURED PERSONAL PROJECTS</u></h2>

			<div className={styles.projectsCategories}>
				<div className={styles.projectsCategories_}>
					<div className={styles.projectSectionDetails}>
						<span>Frontend Projects</span>
						<p>
							Frontend projects with HTML, CSS, JavaScript, ReactJS.<br />
							From static pages to dynamic applications, each reflecting a commitment to engaging and responsive user experiences. Dive into the code.
						</p>
					</div>
					<div className={styles.projects}>
						<EachProjectCut projectName="My Fresher Portfolio" alt="My first portfolio" projectLink="https://ujjwalpandeyjava.github.io/Ujjwal-Portfolio/" imageSrc="https://i.pinimg.com/originals/7d/92/07/7d920792c0ab7efa9fee3464e8c696a3.jpg" />
						<EachProjectCut projectName="Ping Pong with physics" alt="JS canvas game ping pong" projectLink="https://ujjwalpandeyjava.github.io/PingPongGameLoaded/" imageSrc="https://i.pinimg.com/originals/67/6e/f2/676ef21bf17b9ae9f0f0511871096904.jpg" />
						<EachProjectCut projectName="Dozens UI mini-projects" alt="UI elements I created over time" projectLink="https://github.com/ujjwalpandeyjava/Components_Elements" imageSrc="https://i.pinimg.com/originals/40/43/9f/40439f509e514e15364bd07f1054877d.jpg" />
					</div>
				</div>
				<div className={styles.projectsCategories_}>
					<div className={styles.projectSectionDetails}>
						<span>Backend Featured</span>
						<p>
							Backend Development projects featuring Java, Advanced Java, Hibernate, Spring, Spring Boot, Spring Security, JPA, and more.<br />
							Engage in robust, secure, and efficient backend solutions. Dive into the code.
						</p>
					</div>
					<div className={styles.projects}>
						<EachProjectCut projectName="Some WARs, JARS, and DB Backups" alt="To show case WARS and JARS" projectLink="https://github.com/ujjwalpandeyjava/WARs-JARs-DBs" imageSrc="https://i.pinimg.com/originals/46/d9/6d/46d96d028c678d81a3594bb4ef5fe003.jpg" />
						<EachProjectCut projectName="JavaScript with server sides" alt="Nodes server side code repo" projectLink="https://github.com/ujjwalpandeyjava/NodeProjects" imageSrc="https://i.pinimg.com/originals/61/4e/7f/614e7fcd7c07198989c22699c1f8df33.jpg" />
						<EachProjectCut projectName="Java and framework server sides" alt="Java server side code repo" projectLink="https://github.com/ujjwalpandeyjava/JavaTestedProjects" imageSrc="https://i.pinimg.com/originals/40/43/9f/40439f509e514e15364bd07f1054877d.jpg" />
					</div>
				</div>
				<div className={styles.projectsCategories_}>
					<div className={styles.projectSectionDetails}>
						<span>Full Stack Featured</span>
						<p>Full Stack projects, seamlessly integrating Frontend (HTML, CSS, JS, React.js) and Backend (Java, Advanced Java, Hibernate, Spring, Spring Boot, Security, JPA). Engaging, responsive, and efficient. Dive into the code.</p>
					</div>
					<div className={styles.projects}>
						<EachProjectCut projectName="Computer institute management system" alt="management system" projectLink="https://github.com/ujjwalpandeyjava/User-Faculty_Institute_Workspace" imageSrc="https://ujjwalpandeyjava.github.io/Links/examplesPreviewImages/ComputerInstitute.png" />
						<EachProjectCut projectName="ToDo - Spring and Hibernate" alt="Java server side code repo" projectLink="https://github.com/ujjwalpandeyjava/SimpleToDo_withHibernate" imageSrc="https://ujjwalpandeyjava.github.io/Links/examplesPreviewImages/noImageFound.jpg" />
						<EachProjectCut projectName="Explore projects" alt="Full resp to explore" projectLink="https://github.com/ujjwalpandeyjava?tab=repositories" imageSrc="https://ujjwalpandeyjava.github.io/Links/examplesPreviewImages/deploy.jpeg" />
					</div>
				</div>
			</div>

			<Certificates />

			<div className={styles.contactMeContainer}><ContactMe /></div>

			<div id={styles.twoSectionBackground}></div>
		</div>
	)
}

function EachProjectCut({ imageSrc, alt, projectLink, projectName }) {
	return (
		<div className={styles.eachProject}>
			<img src={imageSrc} alt={alt} />
			<a href={projectLink} target="_blank" className={styles.projectNavLink} rel="noreferrer"><FaLink /></a>
			<span>{projectName}</span>
		</div>
	)
}
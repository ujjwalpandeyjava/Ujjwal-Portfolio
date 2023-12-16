import { FaLink } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import ContactMe from '../contact/contactMe';
import projectsCSS from './ProjectsByMe.module.css';
import projectThumbNail from './projectsByCategory/images/testThumbNail.png';
// import ImageCarousel from "../imageCarousel/ImageCarousel";
import Certificates from "../imageCarousel/certificate/Certificates";

export default function ProjectsByMe() {
	return (
		<div className={projectsCSS.projectsByMe}>
			<h2><u style={{ textDecorationStyle: "double" }}>FEATURED PROJECTS</u></h2>
			<div><i>Personal projects created during my learnings</i></div>
			<div className={projectsCSS.projectsCategories}>
				<div className={projectsCSS.projectsCategories_1}>
					<div className={projectsCSS.projectsCategories_}>
						<div className={projectsCSS.projectSectionDetails}>
							<span>Frontend Projects</span>
							<p>Frontend projects with HTML, CSS, JavaScript, ReactJS.<br />
								From static pages to dynamic applications, each reflecting a commitment to engaging and responsive user experiences. Dive into the code.</p>
							<NavLink to="/skills_projects/frontEndsProjects" className={projectsCSS.button}><span>Check more</span></NavLink>
						</div>
						<div className={projectsCSS.projects}>
							<div className={projectsCSS.eachProject}>
								<img src={projectThumbNail} alt='project' />
								<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
								<span>Project Name</span>
							</div>
							<div className={projectsCSS.eachProject}>
								<img src={projectThumbNail} alt='project' />
								<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
								<span>Project Name</span>
							</div>
							<div className={projectsCSS.eachProject}>
								<img src={projectThumbNail} alt='project' />
								<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
								<span>Project Name</span>
							</div>
						</div>
					</div>
					<div className={projectsCSS.projectsCategories_}>
						<div className={projectsCSS.projectSectionDetails}>
							<span>Back-end Featured</span>
							<p>Backend Development projects featuring Java, Advanced Java, Hibernate, Spring, Spring Boot, Spring Security, JPA, and more.<br />
								Engage in robust, secure, and efficient backend solutions. Dive into the code.</p>
							<NavLink to="/skills_projects/backEndProjects" className={projectsCSS.button} ><span>Check more</span></NavLink>
						</div>
						<div className={projectsCSS.projects}>
							<div className={projectsCSS.eachProject}>
								<img src={projectThumbNail} alt='project' />
								<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>

								<span>Project Name</span>
							</div>

							<div className={projectsCSS.eachProject}>
								<img src={projectThumbNail} alt='project' />
								<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
								<span>Project Name</span>
							</div>

							<div className={projectsCSS.eachProject}>
								<img src={projectThumbNail} alt='project' />
								<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
								<span>Project Name</span>
							</div>
						</div>
					</div>
				</div>
				<div className={projectsCSS.projectsCategories_}>
					<div className={projectsCSS.projectSectionDetails}>
						<span>Full Stack Featured</span>
						<p>Full Stack projects, seamlessly integrating Frontend (HTML, CSS, JS, React.js) and Backend (Java, Advanced Java, Hibernate, Spring, Spring Boot, Security, JPA). Engaging, responsive, and efficient. Dive into the code.</p>
						<NavLink to="/skills_projects/fullStackProjects" className={projectsCSS.button}><span>Check more</span></NavLink>
					</div>
					<div className={projectsCSS.projects}>
						<div className={projectsCSS.eachProject}>
							<img src={projectThumbNail} alt='project' />
							<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
							<span>Project Name</span>
						</div>

						<div className={projectsCSS.eachProject}>
							<img src={projectThumbNail} alt='project' />
							<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
							<span>Project Name</span>
						</div>

						<div className={projectsCSS.eachProject}>
							<img src={projectThumbNail} alt='project' />
							<a href="https://github.com/ujjwalpandeyjava?tab=repositories" target="_blank" className={projectsCSS.projectNavLink} rel="noreferrer"><FaLink /></a>
							<span>Project Name</span>
						</div>
					</div>
				</div>
			</div>
			{/* <ImageCarousel /> */}
			<Certificates />
			<div className={projectsCSS.contactMeContainer}><ContactMe /></div>
			<div id={projectsCSS.twoSectionBackground}></div>
		</div>
	)
}
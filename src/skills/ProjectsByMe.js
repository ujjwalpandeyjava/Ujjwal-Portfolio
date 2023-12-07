import { NavLink } from 'react-router-dom';
import ContactMe from '../contact/contactMe';
import projectsCSS from './ProjectsByMe.module.css';

function ProjectsByMe() {
	return (
		<div className={projectsCSS.projectsByMe}>
			<h2>FEATURED PROJECTS</h2>
			<div>Personal projects created during my that tech leading time</div>
			<div className={projectsCSS.projectsCategories}>
				<div className={projectsCSS.projectsCategories_1}>
					<div className={projectsCSS.projectsCategories_}>
						<div className={projectsCSS.projectSectionDetails}>
							<span>Frontend Projects</span>
							<p>A little about the why and how, and when I have created these products...</p>
							<NavLink to="/skills_projects/frontEndsProjects" className={projectsCSS.button}><span>Check more</span></NavLink>
						</div>
						<div className={projectsCSS.projects}>
							<div className={projectsCSS.eachProject}>1</div>
							<div className={projectsCSS.eachProject}>1</div>
							<div className={projectsCSS.eachProject}>1</div>
							<div className={projectsCSS.eachProject}>1</div>
						</div>
					</div>
					<div className={projectsCSS.projectsCategories_}>
						<div className={projectsCSS.projectSectionDetails}>
							<span>Back-end Featured</span>
							<p>A little about the why and how, and when I have created these products...</p>
							<NavLink to="/skills_projects/backEndProjects" className={projectsCSS.button} ><span>Check more</span></NavLink>
						</div>
						<div className={projectsCSS.projects}>
							<div className={projectsCSS.eachProject}>1</div>
							<div className={projectsCSS.eachProject}>1</div>
							<div className={projectsCSS.eachProject}>1</div>
							<div className={projectsCSS.eachProject}>1</div>
						</div>
					</div>
				</div>
				<div className={projectsCSS.projectsCategories_}>
					<div className={projectsCSS.projectSectionDetails}>
						<span>Full Stack Featured</span>
						<p>A little about the why and how, and when I have created these products...</p>
						<NavLink to="/skills_projects/fullStackProjects" className={projectsCSS.button}><span>Check more</span></NavLink>
					</div>
					<div className={projectsCSS.projects}>
						<div className={projectsCSS.eachProject}>1</div>
						<div className={projectsCSS.eachProject}>1</div>
						<div className={projectsCSS.eachProject}>1</div>
						<div className={projectsCSS.eachProject}>1</div>
					</div>
				</div>
			</div>
			<ContactMe />
			<div id={projectsCSS.twoSectionBackground}></div>
		</div>
	)
}

export default ProjectsByMe
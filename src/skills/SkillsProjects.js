import { useEffect } from 'react'
import ContactMe from '../contact/contactMe'
import ProjectsByMe from './ProjectsByMe'
import Skills from './Skills'
function SkillsProjects() {
	useEffect(() => {
		document.title = "Project and Skills"
	}, [])
	return (
		<>
			<ProjectsByMe />
			<Skills />
			<ContactMe />
		</>
	)
}

export default SkillsProjects
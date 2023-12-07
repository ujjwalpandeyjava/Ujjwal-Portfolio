import { useEffect } from 'react';
import { FaAngleDown, FaAngleUp, FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiHibernate } from "react-icons/si";
import eachSkills from './eachSkills.module.css';

export default function Skills() {
	const scrollHeight = 200
	useEffect(() => {
		document.documentElement.style.setProperty('--eachSkillHeightWidth', scrollHeight + 'px');
	}, [])

	const scrollSkills = (scrollTo) => {
		let container = document.getElementById('skillShowCase');
		if (scrollTo === 0)
			container.scrollTop -= scrollHeight;
		else {
			container.scrollTop += scrollHeight;
			if (container.scrollTop > container.scrollHeight - container.clientHeight)
				container.scrollTop = container.scrollHeight - container.clientHeight;
		}
	}
	return (
		<div className={eachSkills.skillSection}>
			Services
			<div className={eachSkills.heading}>
				Skill-Set
				<div className={eachSkills.underline}></div>
			</div>
			<div className={eachSkills.skillShowCase}>
				<div id='skillShowCase' className={eachSkills.allSkills}>
					<div className={eachSkills.eachSkill}>
						<FaGithub className={eachSkills.skillIcon} />
						<div>GitHub</div>
						<div className={eachSkills.eachSkillDescription}>
							Version control GitHub used to track history of code changes, and let multiple developers work aynsronouly.
						</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaJava className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Skill name</div>
						<div className={eachSkills.eachSkillDescription}> ___</div>
					</div>
				</div>
				<div className={eachSkills.previousNextAction}>
					<div className={eachSkills.previousSkill} onClick={() => scrollSkills(0)}><FaAngleUp size="1.75em" /></div>
					<div className={eachSkills.nextSkill} onClick={() => scrollSkills(1)}><FaAngleDown size="1.75em" /></div>
				</div>
			</div>
		</div>
	)
};
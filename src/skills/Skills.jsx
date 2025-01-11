import { useEffect } from 'react';
import { FaAngleDown, FaAngleUp, FaBitbucket, FaGithub, FaSitemap } from "react-icons/fa";
import { FaJava, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiPostman, SiSpringboot } from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import { VscSymbolInterface } from "react-icons/vsc";
import style from './Skills.module.css';


export default function Skills() {
	const scrollHeight = 200
	useEffect(() => {
		document.documentElement.style.setProperty('--eachSkillHeightWidth', scrollHeight + 'px');
	}, [])

	const scrollSkills = (scrollTo) => {
		let container = document.getElementById('skillShowCase');
		if (scrollTo === 0) {
			container.scrollTop -= scrollHeight;
		} else {
			container.scrollTop += scrollHeight;
			if (container.scrollTop > container.scrollHeight - container.clientHeight) {
				container.scrollTop = container.scrollHeight - container.clientHeight;
			}
		}
	}
	return (
		<div className={style.skillSection}>

			<div className={style.heading}>
				Skill-Set
				<div className={style.underline}></div>
			</div>

			<div className={style.skillShowCase}>
				<div id='skillShowCase' className={style.allSkills}>
					<div className={style.eachSkill}>
						<FaJava className={style.skillIcon} />
						<div>Java</div>
						<div className={style.eachSkillDescription}>Object Oriented Programming language used to write logic for applications server and JSP.</div>
					</div>
					{/* <div className={eachSkills.eachSkill}>
						<BiLogoSpringBoot className={eachSkills.skillIcon} />
						<div>Spring</div>
						<div className={eachSkills.eachSkillDescription}>I choose the Spring framework for its robust and all-condition module availability to simplify Java development, and showcase expertise in enhancing server capabilities effectively.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<GrJava className={eachSkills.skillIcon} />
						<div>Advanced Java</div>
						<div className={eachSkills.eachSkillDescription}>Used to write backend-business logic with the power of Java, allowing us to implement several protocols on the base of API properties & requirements.</div>
					</div> */}
					<div className={style.eachSkill}>
						<SiSpringboot className={style.skillIcon} />
						<div>Spring Boot</div>
						<div className={style.eachSkillDescription}>I choose Spring-Boot for rapid development of server with microservice environment.</div>
					</div>
					<div className={style.eachSkill}>
						<GrMysql className={style.skillIcon} />
						<div>MySQL</div>
						<div className={style.eachSkillDescription}>I have leveraged MySQL database skill, employing structured queries to efficiently store and manage data, ensuring robust data management.</div>
					</div>
					<div className={style.eachSkill}>
						<SiMongodb className={style.skillIcon} />
						<div>MongoDB</div>
						<div className={style.eachSkillDescription}>I proficiently utilize MongoDB as my NoSQL database, crafting queries through Spring JPA repositories for seamless data management.</div>
					</div>
					<div className={style.eachSkill}>
						<FaReact className={style.skillIcon} />
						<div>ReactJs</div>
						<div className={style.eachSkillDescription}>My mastery of SPA technology ReactJs with 2 years of experience gives me the ability to write class & function-based components to create Single Page Frontend Applications, with the help of JS and NodeJS.</div>
					</div>
					<div className={style.eachSkill}>
						<TbBrandJavascript className={style.skillIcon} />
						<div>JavaScript</div>
						<div className={style.eachSkillDescription}>The All rounder, allowing me to code anything and everything in one language, I rank myself 9.5/10 in JS.</div>
					</div>
					<div className={style.eachSkill}>
						<TbBrandTypescript className={style.skillIcon} />
						<div>TypeScript</div>
						<div className={style.eachSkillDescription}>Super set of Javascript to write most secure, and statically typed code.</div>
					</div>
					<div className={style.eachSkill}>
						<FaSitemap className={style.skillIcon} />
						<div>REST APIs</div>
						<div className={style.eachSkillDescription}>REST APIs for applications to let front end interaction with server.</div>
					</div>
					<div className={style.eachSkill}>
						<VscSymbolInterface className={style.skillIcon} />
						<div>HTML, CSS, SCSS</div>
						<div className={style.eachSkillDescription}>The core of any front-end technology, I have mastered even the minute details and keep myself updated.</div>
					</div>
					<div className={style.eachSkill}>
						<FaGithub className={style.skillIcon} />
						<div>GitHub</div>
						<div className={style.eachSkillDescription}>Version control system designed and developed for all case to track the code change history, and let multiple developers work asynchronously.</div>
					</div>
					<div className={style.eachSkill}>
						<FaBitbucket className={style.skillIcon} />
						<div>BitBucket</div>
						<div className={style.eachSkillDescription}>Version control system designed and developed with organizations need.</div>
					</div>
					<div className={style.eachSkill}>
						<SiPostman className={style.skillIcon} />
						<div>Postman</div>
						<div className={style.eachSkillDescription}>I always use it to know how my API is behaving and performing, Postman is a tool for building, testing, and modifying APIs, simplifying API development.</div>
					</div>
					{/* <div className={eachSkills.eachSkill}>
						<SiHibernate className={eachSkills.skillIcon} />
						<div>Hibernate</div>
						<div className={eachSkills.eachSkillDescription}>Hibernate simplifies SQL interactions by enabling Java-based queries with POJOs. It seamlessly maps Java objects to database tables, enhancing simplicity in data handling.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiJquery className={eachSkills.skillIcon} />
						<div>jQuery</div>
						<div className={eachSkills.eachSkillDescription}>Simplified JavaScript library to fasten up the JavaScript work.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaNode className={eachSkills.skillIcon} />
						<div>Nodejs</div>
						<div className={eachSkills.eachSkillDescription}>The runtime environment is used for all kinds of applications built on JavaScript.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<SiExpress className={eachSkills.skillIcon} />
						<div>Express</div>
						<div className={eachSkills.eachSkillDescription}>I used Express.js a Node.js framework to simplify the development of web server APIs and add helpful features.</div>
					</div>
					<div className={eachSkills.eachSkill}>
						<FaSalesforce className={eachSkills.skillIcon} />
						<div>Salesforce</div>
						<div className={eachSkills.eachSkillDescription}>I have worked with the Salesforce team to develop and deploy custom application on there platform.</div>
					</div> */}
				</div>
				<div className={style.previousNextAction}>
					<div className={style.previousSkill} onClick={() => scrollSkills(0)}><FaAngleUp size="1.75em" /></div>
					<div className={style.nextSkill} onClick={() => scrollSkills(1)}><FaAngleDown size="1.75em" /></div>
				</div>
			</div>
		</div>
	)
};
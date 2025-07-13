import { SiApachekafka, SiJirasoftware, SiMongodb, SiNextdotjs, SiPostman, SiRedis, SiRedux, SiSpringboot } from "react-icons/si";
import { FaAngleDown, FaAngleUp, FaBitbucket, FaCss3Alt, FaGithub, FaHtml5, FaSitemap, FaTasks } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbPackages } from "react-icons/tb";
import { FaJava, FaReact } from "react-icons/fa6";
import { useEffect } from 'react';
import { GrMysql } from "react-icons/gr";
import style from './Skills.module.css';



const scrollHeight = 250;
export default function Skills() {
	useEffect(() => {
		document.documentElement.style.setProperty('--eachSkillHeightWidth', scrollHeight + 'px');
	}, []);

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

					<div className={style.division}>Backend</div>
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
						<TbPackages className={style.skillIcon} />
						<div>Microservices</div>
						<div className={style.eachSkillDescription}>
							I design scalable and modular systems using microservices. This approach helps isolate functionality, improves maintainability, and accelerates deployment cycles.
						</div>
					</div>
					<div className={style.eachSkill}>
						<FaSitemap className={style.skillIcon} />
						<div>REST APIs</div>
						<div className={style.eachSkillDescription}>REST APIs for applications to let front end interaction with server.</div>
					</div>
					<div className={style.eachSkill}>
						<SiApachekafka className={style.skillIcon} />
						<div>Kafka</div>
						<div className={style.eachSkillDescription}>
							I use Kafka to build real-time data pipelines and streaming applications. It ensures high-throughput, fault-tolerant messaging across distributed systems.
						</div>
					</div>
					<div className={style.eachSkill}>
						<SiRedis className={style.skillIcon} />
						<div>Redis</div>
						<div className={style.eachSkillDescription}>
							Redis helps me manage caching, sessions, and real-time analytics. Its in-memory data structure makes it super fast and efficient for performance-critical apps.
						</div>
					</div>


					<div className={style.division}>DataBase</div>
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

					<div className={style.division}>Frontend</div>
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
						<FaReact className={style.skillIcon} />
						<div>ReactJs</div>
						<div className={style.eachSkillDescription}>My mastery of SPA technology ReactJs with 2 years of experience gives me the ability to write class & function-based components to create Single Page Frontend Applications, with the help of JS and NodeJS.</div>
					</div>
					<div className={style.eachSkill}>
						<SiNextdotjs className={style.skillIcon} />
						<div>Next.js</div>
						<div className={style.eachSkillDescription}>
							I use Next.js to build fast, SEO-friendly, and production-ready React applications. It offers features like file-based routing, server-side rendering (SSR), and static site generation (SSG) that streamline development.
						</div>
					</div>
					<div className={style.eachSkill}>
						<SiRedux className={style.skillIcon} />
						<div>Redux / Zustand</div>
						<div className={style.eachSkillDescription}>
							I manage application state efficiently using Redux for complex logic and Zustand for lightweight, modern state handling in React apps.
						</div>
					</div>
					<div className={style.eachSkill}>
						<FaHtml5 className={style.skillIcon} />
						<div>HTML / JSX / TSX</div>
						<div className={style.eachSkillDescription}>
							I structure web UIs using HTML and its modern variants like JSX and TSX in React/TypeScript projects, ensuring clean, semantic, and maintainable code.
						</div>
					</div>
					<div className={style.eachSkill}>
						<FaCss3Alt className={style.skillIcon} />
						<div>CSS / SCSS</div>
						<div className={style.eachSkillDescription}>
							I craft responsive, pixel-perfect layouts using advanced CSS and SCSS. Comfortable with flex, grid, animations, and custom themes.
						</div>
					</div>



					<div className={style.division}>Others</div>
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
					<div className={style.eachSkill}>
						<FaTasks className={style.skillIcon} />
						<div>Agile Methodologies</div>
						<div className={style.eachSkillDescription}>
							I follow Agile practices like Scrum and Kanban to ensure iterative development, continuous feedback, and fast delivery cycles.
						</div>
					</div>

					<div className={style.eachSkill}>
						<SiJirasoftware className={style.skillIcon} />
						<div>Jira</div>
						<div className={style.eachSkillDescription}>
							I use Jira to manage tasks, sprints, and project tracking efficiently, ensuring clarity and accountability across the team.
						</div>
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
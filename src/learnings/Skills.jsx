import { SiApachekafka, SiDocker, SiJirasoftware, SiMongodb, SiNextdotjs, SiPostman, SiRedis, SiRedux, SiSpringboot } from "react-icons/si";
import { FaBitbucket, FaCss3Alt, FaGithub, FaHtml5, FaSitemap, FaTasks } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript, TbPackages } from "react-icons/tb";
import { FaJava, FaReact } from "react-icons/fa6";
import { useEffect } from 'react';
import { GrMysql } from "react-icons/gr";
import style from './Skills.module.css';
import AnimatedSkill from "./newJourney/eachSkill/AnimatedSkillProps";
import { MdOutlineDesignServices } from "react-icons/md";


const scrollHeight = 250;
export default function Skills() {
	useEffect(() => {
		document.documentElement.style.setProperty('--eachSkillHeightWidth', scrollHeight + 'px');
	}, []);

	// const scrollSkills = (scrollTo) => {
	// 	let container = document.getElementById('skillShowCase');
	// 	if (scrollTo === 0) {
	// 		container.scrollTop -= scrollHeight;
	// 	} else {
	// 		container.scrollTop += scrollHeight;
	// 		if (container.scrollTop > container.scrollHeight - container.clientHeight) {
	// 			container.scrollTop = container.scrollHeight - container.clientHeight;
	// 		}
	// 	}
	// }



	return (
		<div className={style.skillSection}>

			<div className={style.heading}>
				Skill-Set
				<div className={style.underline}></div>
			</div>

			<div className={style.skillShowCase}>
				<div id='skillShowCase' className={style.allSkills}>

					<div className={style.division}>Backend</div>
					<AnimatedSkill icon={<FaJava />} title="Java" description="Object Oriented Programming language used to write logic for applications server and JSP." />
					{/* <AnimatedSkill icon={<BiLogoSpringBoot />} title="Spring" description="I choose the Spring framework for its robust and all-condition module availability to simplify Java development, and showcase expertise in enhancing server capabilities effectively." /> */}
					{/* <AnimatedSkill icon={<GrJava />} title="Advanced Java" description="Used to write backend-business logic with the power of Java, allowing us to implement several protocols on the base of API properties & requirements." /> */}
					<AnimatedSkill icon={<SiSpringboot />} title="Spring Boot" description="I choose Spring-Boot for rapid development of server with microservice environment." />
					<AnimatedSkill icon={<TbPackages />} title="Microservices" description="I design scalable and modular systems using microservices. This approach helps isolate functionality, improves maintainability, and accelerates deployment cycles." />
					<AnimatedSkill icon={<FaSitemap />} title="REST APIs" description="REST APIs for applications to let front end interaction with server." />
					<AnimatedSkill icon={<SiApachekafka />} title="Kafka" description="I use Kafka to build real-time data pipelines and streaming applications. It ensures high-throughput, fault-tolerant messaging across distributed systems." />
					<AnimatedSkill icon={<SiRedis />} title="Redis" description="Redis helps me manage caching, sessions, and real-time analytics. Its in-memory data structure makes it super fast and efficient for performance-critical apps." />
					<AnimatedSkill icon={<MdOutlineDesignServices />} title="System Architecture" description="I understand how to design scalable, decoupled, and efficient system architectures using microservices, APIs, message queues, databases, and caching. I'm experienced in balancing performance, reliability, and maintainability." />
					<AnimatedSkill icon={<SiDocker />} title="Docker" description="Docker allows packaging applications into containers for portability, consistency, and scalability. It accelerates deployment, isolates dependencies, and simplifies management in cloud and microservices environments." />


					<div className={style.division}>DataBase</div>
					<AnimatedSkill icon={<GrMysql />} title="MySQL" description="I have leveraged MySQL database skill, employing structured queries to efficiently store and manage data, ensuring robust data management." />
					<AnimatedSkill icon={<SiMongodb />} title="MongoDB" description="I proficiently utilize MongoDB as my NoSQL database, crafting queries through Spring JPA repositories for seamless data management." />


					<div className={style.division}>Frontend</div>
					<AnimatedSkill icon={<TbBrandJavascript />} title="JavaScript" description="The All rounder, allowing me to code anything and everything in one language, I rank myself 9.5/10 in JS." />
					<AnimatedSkill icon={<TbBrandTypescript />} title="TypeScript" description="Super set of Javascript to write most secure, and statically typed code." />
					<AnimatedSkill icon={<FaReact />} title="ReactJs" description="My mastery of SPA technology ReactJs with 2 years of experience gives me the ability to write class & function-based components to create Single Page Frontend Applications, with the help of JS and NodeJS." />
					<AnimatedSkill icon={<SiNextdotjs />} title="Next.js" description="I use Next.js to build fast, SEO-friendly, and production-ready React applications. It offers features like file-based routing, server-side rendering (SSR), and static site generation (SSG) that streamline development." />
					<AnimatedSkill icon={<SiRedux />} title="Redux / Zustand" description="I manage application state efficiently using Redux for complex logic and Zustand for lightweight, modern state handling in React apps." />
					<AnimatedSkill icon={<FaHtml5 />} title="HTML / JSX / TSX" description="I structure web UIs using HTML and its modern variants like JSX and TSX in React/TypeScript projects, ensuring clean, semantic, and maintainable code." />
					<AnimatedSkill icon={<FaCss3Alt />} title="CSS / SCSS" description="I craft responsive, pixel-perfect layouts using advanced CSS and SCSS. Comfortable with flex, grid, animations, and custom themes." />


					<div className={style.division}>Others</div>
					<AnimatedSkill icon={<FaGithub />} title="GitHub" description="Version control system designed and developed for all case to track the code change history, and let multiple developers work asynchronously." />
					<AnimatedSkill icon={<FaBitbucket />} title="BitBucket" description="Version control system designed and developed with organizations need." />
					<AnimatedSkill icon={<SiPostman />} title="Postman" description="I always use it to know how my API is behaving and performing, Postman is a tool for building, testing, and modifying APIs, simplifying API development." />
					<AnimatedSkill icon={<FaTasks />} title="Agile Methodologies" description="I follow Agile practices like Scrum and Kanban to ensure iterative development, continuous feedback, and fast delivery cycles." />
					<AnimatedSkill icon={<SiJirasoftware />} title="Jira" description="I use Jira to manage tasks, sprints, and project tracking efficiently, ensuring clarity and accountability across the team." />


					{/* <AnimatedSkill icon={<SiHibernate />} title="Hibernate" description="Hibernate simplifies SQL interactions by enabling Java-based queries with POJOs. It seamlessly maps Java objects to database tables, enhancing simplicity in data handling." /> */}
					{/* <AnimatedSkill icon={<SiJquery />} title="jQuery" description="Simplified JavaScript library to fasten up the JavaScript work." /> */}
					{/* <AnimatedSkill icon={<FaNode />} title="Nodejs" description="The runtime environment is used for all kinds of applications built on JavaScript." /> */}
					{/* <AnimatedSkill icon={<SiExpress />} title="Express" description="I used Express.js a Node.js framework to simplify the development of web server APIs and add helpful features." /> */}
					{/* <AnimatedSkill icon={<FaSalesforce />} title="Salesforce" description="I have worked with the Salesforce team to develop and deploy custom application on there platform." /> */}
				</div>
				{/* <div className={style.previousNextAction}>
					<button className={style.previousSkill} onClick={() => scrollSkills(0)}><FaAngleUp size="1.75em" /></button>
					<button className={style.nextSkill} onClick={() => scrollSkills(1)}><FaAngleDown size="1.75em" /></button>
				</div> */}
			</div>
		</div>
	)
};
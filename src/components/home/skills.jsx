"use client"

import SkillSphere from "@/components/3d/SkillSphere";
import AnimatedSkill from "@/components/home/AnimatedSkillProps";
import style from '@/styles/Skills.module.scss';
import { HeadingHalfUnderLine, HeadingUnderLine } from '@/utils/Headings';
import { useState } from 'react';
import { BiSolidFileJson } from "react-icons/bi";
import { FaBitbucket, FaCss3Alt, FaGithub, FaHtml5, FaSitemap, FaTasks } from "react-icons/fa";
import { FaAngular, FaJava, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiApachekafka, SiCucumber, SiDocker, SiExpo, SiJenkins, SiJirasoftware, SiJunit5, SiMongodb, SiNextdotjs, SiPostman, SiRedis, SiRedux, SiSpringboot, SiXml } from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript, TbPackages } from "react-icons/tb";
import { BsFiletypeXml } from "react-icons/bs";
import { SiSaopaulometro } from "react-icons/si";


export const skillsData = [
	// --- Backend ---
	{ type: "Backend", size: 7, title: "Java", icon: <FaJava />, desc: "Object Oriented Programming language used to write logic for applications server and JSP.", color: "#2ecc71" },
	{ type: "Backend", size: 5, title: "Spring Boot", icon: <SiSpringboot />, desc: "I choose Spring-Boot for rapid development of server with microservice environment.", color: "#2ecc71" },
	{ type: "Backend", size: 4, title: "Microservices", icon: <TbPackages />, desc: "I design scalable and modular systems using microservices. This approach helps isolate functionality and improves maintainability.", color: "#2ecc71" },
	{ type: "Backend", size: 3, title: "REST APIs", icon: <FaSitemap />, desc: "REST APIs for applications to let front end interaction with server.", color: "#2ecc71" },
	{ type: "Backend", size: 3, title: "Kafka", icon: <SiApachekafka />, desc: "I use Kafka to build real-time data pipelines and streaming applications.", color: "#2ecc71" },
	{ type: "Backend", size: 5, title: "Redis", icon: <SiRedis />, desc: "Redis helps me manage caching, sessions, and real-time analytics. Its in-memory data structure makes it super fast.", color: "#2ecc71" },
	{ type: "Backend", size: 4, title: "System Architecture", icon: <MdOutlineDesignServices />, desc: "I understand how to design scalable, decoupled, and efficient system architectures using microservices and APIs.", color: "#2ecc71" },

	// --- Mobile app ---
	{ type: "Mobile", size: 7, title: "React Native", icon: <FaReact />, desc: "I have experience in building cross-platform mobile applications using React Native.", color: "#F7931E" },
	{ type: "Mobile", size: 3, title: "Expo", icon: <SiExpo />, desc: "I have experience in building cross-platform mobile applications using Expo.", color: "#F7931E" },

	// --- Frontend ---
	{ type: "Frontend", size: 5, title: "JavaScript", icon: <TbBrandJavascript />, desc: "The All rounder, allowing me to code anything and everything in one language, I rank myself 9.5/10 in JS.", color: "#339af0" },
	{ type: "Frontend", size: 5, title: "TypeScript", icon: <TbBrandTypescript />, desc: "Super set of Javascript to write most secure, and statically typed code.", color: "#339af0" },
	{ type: "Frontend", size: 6, title: "ReactJs", icon: <FaReact />, desc: "My mastery of SPA technology ReactJs gives me the ability to write class & function-based components.", color: "#339af0" },
	{ type: "Frontend", size: 6, title: "Next.js", icon: <SiNextdotjs />, desc: "I use Next.js to build fast, SEO-friendly, and production-ready React applications with SSR and SSG.", color: "#339af0" },
	{ type: "Frontend", size: 4, title: "Angular", icon: <FaAngular />, desc: "I have experience in building dynamic web applications using Angular.", color: "#339af0" },
	{ type: "Frontend", size: 4, title: "Redux / Zustand", icon: <SiRedux />, desc: "I manage application state efficiently using Redux for complex logic and Zustand for lightweight state handling.", color: "#339af0" },
	{ type: "Frontend", size: 4, title: "HTML / JSX / TSX", icon: <FaHtml5 />, desc: "I structure web UIs using HTML and its modern variants like JSX and TSX in React/TypeScript projects.", color: "#339af0" },
	{ type: "Frontend", size: 4, title: "CSS / SCSS", icon: <FaCss3Alt />, desc: "I craft responsive, pixel-perfect layouts using advanced CSS and SCSS. Comfortable with flex, grid, animations.", color: "#339af0" },

	// --- DataBase ---
	{ type: "DataBase", size: 5, title: "MySQL", icon: <GrMysql />, desc: "I have leveraged MySQL database skill, employing structured queries to efficiently store and manage data.", color: "#22d3ee" },
	{ type: "DataBase", size: 5, title: "MongoDB", icon: <SiMongodb />, desc: "I proficiently utilize MongoDB as my NoSQL database, crafting queries through Spring JPA repositories.", color: "#22d3ee" },

	// --- Others ---
	{ type: "Others", size: 4, title: "GitHub", icon: <FaGithub />, desc: "Version control system designed and developed for all case to track the code change history.", color: "#94a3b8" },
	{ type: "Others", size: 4, title: "BitBucket", icon: <FaBitbucket />, desc: "Version control system designed and developed with organizations need.", color: "#94a3b8" },
	{ type: "Others", size: 4, title: "SOAP", icon: <SiXml />, desc: "Experience with SOAP web services for building and consuming enterprise-level APIs.", color: "#94a3b8" },
	{ type: "Others", size: 4, title: "Agile Methods", icon: <FaTasks />, desc: "I follow Agile practices like Scrum and Kanban to ensure iterative development and fast delivery cycles.", color: "#94a3b8" },
	{ type: "Others", size: 4, title: "Jira", icon: <SiJirasoftware />, desc: "I use Jira to manage tasks, sprints, and project tracking efficiently, ensuring clarity across the team.", color: "#94a3b8" },
	{ type: "Others", size: 4, title: "Docker", icon: <SiDocker />, desc: "Docker allows packaging applications into containers for portability, consistency, and scalability.", color: "#94a3b8" },
	{ type: "Others", size: 4, title: "CI/CD", icon: <SiJenkins />, desc: "I implement CI/CD pipelines using Jenkins/GitHub Actions/GitLab to automate builds, tests, and deployments.", color: "#94a3b8" },

	// --- Data ---
	{ type: "Testing", size: 4, title: "Cucumber", icon: <SiCucumber />, desc: "Tool for BDD (Behavior Driven Development) that supports writing tests in plain-text Gherkin syntax.", color: "#94a3b8" },
	{ type: "Testing", size: 4, title: "JUnit", icon: <SiJunit5 />, desc: "A programmer-oriented unit testing framework for the Java programming language.", color: "#94a3b8" },
	{ type: "Testing", size: 4, title: "SoapUI", icon: <SiSaopaulometro />, desc: "The world's most widely used automated testing tool for SOAP and REST APIs.", color: "#94a3b8" },

	// --- Data ---
	{ type: "Data", size: 4, title: "Postman", icon: <SiPostman />, desc: "I always use it to know how my API is behaving and performing. Postman is a tool for building and testing APIs.", color: "#94a3b8" },
	{ type: "Data", size: 4, title: "JSON", icon: <BiSolidFileJson />, desc: "Use JSON for data interchange between the client and server.", color: "#94a3b8" },
	{ type: "Data", size: 4, title: "XML", icon: <BsFiletypeXml />, desc: "Extensible Markup Language used for storing and transporting structured data across systems.", color: "94a3b8" },
];
// ["Backend", "Mobile", "Frontend", "DataBase", "Others"];
const categories = [...new Set(skillsData.map(skill => skill.type))];

export default function Skills() {
	const [activeTab, setActiveTab] = useState("All");
	const visibleSkills = skillsData.filter((skill) => activeTab === "All" || skill.type === activeTab);


	return (
		<div className={style.skillSection}>
			<div className={style.filterTabs}>
				<HeadingUnderLine txt="Skill-Set" />&emsp;&emsp;
				<button className={activeTab === "All" ? style.activeBtn : ""} onClick={() => setActiveTab("All")}>All</button>
				{categories.map((cat) => <button key={cat} className={activeTab === cat ? style.activeBtn : ""} onClick={() => setActiveTab(cat)}>{cat}</button>)}
			</div>

			<div className={style.sphereStage}>
				<SkillSphere listOfSkills={visibleSkills} />
			</div>

			<div id='skillShowCase' className={style.allSkills}>
				{activeTab === "All" ?
					categories.map((category) => <div key={category} className={style.categoryGroup}>
						<HeadingHalfUnderLine txt={category} />
						{skillsData.filter(skill => skill.type === category).map((skill, index) => <AnimatedSkill key={index} icon={skill.icon} title={skill.title} description={skill.desc} />)}
					</div>) :
					skillsData.filter(skill => skill.type === activeTab).map((skill, index) => <AnimatedSkill key={index} icon={skill.icon} title={skill.title} description={skill.desc} />)}
			</div>
		</div>
	)
};

"use client"

import AnimatedSkill from "@/components/home/AnimatedSkillProps";
import style from '@/styles/Skills.module.scss';
import { useEffect, useState } from 'react';
import { FaBitbucket, FaCss3Alt, FaGithub, FaHtml5, FaSitemap, FaTasks } from "react-icons/fa";
import { FaJava, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiApachekafka, SiDocker, SiJenkins, SiJirasoftware, SiMongodb, SiNextdotjs, SiPostman, SiRedis, SiRedux, SiSpringboot } from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript, TbPackages } from "react-icons/tb";
import { HeadingHalfUnderLine, HeadingUnderLine } from '@/utils/Headings';

const scrollHeight = 250;

// 1. Organize data for easier filtering
const skillsData = [
	// --- Backend ---
	{ type: "Backend", title: "Java", icon: <FaJava />, desc: "Object Oriented Programming language used to write logic for applications server and JSP." },
	{ type: "Backend", title: "Spring Boot", icon: <SiSpringboot />, desc: "I choose Spring-Boot for rapid development of server with microservice environment." },
	{ type: "Backend", title: "Microservices", icon: <TbPackages />, desc: "I design scalable and modular systems using microservices. This approach helps isolate functionality and improves maintainability." },
	{ type: "Backend", title: "REST APIs", icon: <FaSitemap />, desc: "REST APIs for applications to let front end interaction with server." },
	{ type: "Backend", title: "Kafka", icon: <SiApachekafka />, desc: "I use Kafka to build real-time data pipelines and streaming applications." },
	{ type: "Backend", title: "Redis", icon: <SiRedis />, desc: "Redis helps me manage caching, sessions, and real-time analytics. Its in-memory data structure makes it super fast." },
	{ type: "Backend", title: "System Architecture", icon: <MdOutlineDesignServices />, desc: "I understand how to design scalable, decoupled, and efficient system architectures using microservices and APIs." },

	// --- DataBase ---
	{ type: "DataBase", title: "MySQL", icon: <GrMysql />, desc: "I have leveraged MySQL database skill, employing structured queries to efficiently store and manage data." },
	{ type: "DataBase", title: "MongoDB", icon: <SiMongodb />, desc: "I proficiently utilize MongoDB as my NoSQL database, crafting queries through Spring JPA repositories." },

	// --- Frontend ---
	{ type: "Frontend", title: "JavaScript", icon: <TbBrandJavascript />, desc: "The All rounder, allowing me to code anything and everything in one language, I rank myself 9.5/10 in JS." },
	{ type: "Frontend", title: "TypeScript", icon: <TbBrandTypescript />, desc: "Super set of Javascript to write most secure, and statically typed code." },
	{ type: "Frontend", title: "ReactJs", icon: <FaReact />, desc: "My mastery of SPA technology ReactJs gives me the ability to write class & function-based components." },
	{ type: "Frontend", title: "Next.js", icon: <SiNextdotjs />, desc: "I use Next.js to build fast, SEO-friendly, and production-ready React applications with SSR and SSG." },
	{ type: "Frontend", title: "Redux / Zustand", icon: <SiRedux />, desc: "I manage application state efficiently using Redux for complex logic and Zustand for lightweight state handling." },
	{ type: "Frontend", title: "HTML / JSX / TSX", icon: <FaHtml5 />, desc: "I structure web UIs using HTML and its modern variants like JSX and TSX in React/TypeScript projects." },
	{ type: "Frontend", title: "CSS / SCSS", icon: <FaCss3Alt />, desc: "I craft responsive, pixel-perfect layouts using advanced CSS and SCSS. Comfortable with flex, grid, animations." },

	// --- Others ---
	{ type: "Others", title: "GitHub", icon: <FaGithub />, desc: "Version control system designed and developed for all case to track the code change history." },
	{ type: "Others", title: "BitBucket", icon: <FaBitbucket />, desc: "Version control system designed and developed with organizations need." },
	{ type: "Others", title: "Postman", icon: <SiPostman />, desc: "I always use it to know how my API is behaving and performing. Postman is a tool for building and testing APIs." },
	{ type: "Others", title: "Agile Methodologies", icon: <FaTasks />, desc: "I follow Agile practices like Scrum and Kanban to ensure iterative development and fast delivery cycles." },
	{ type: "Others", title: "Jira", icon: <SiJirasoftware />, desc: "I use Jira to manage tasks, sprints, and project tracking efficiently, ensuring clarity across the team." },
	{ type: "Others", title: "Docker", icon: <SiDocker />, desc: "Docker allows packaging applications into containers for portability, consistency, and scalability." },
	{ type: "Others", title: "CI/CD", icon: <SiJenkins />, desc: "I implement CI/CD pipelines using Jenkins/GitHub Actions/GitLab to automate builds, tests, and deployments." },
];

const categories = ["Backend", "DataBase", "Frontend", "Others"];

export default function Skills() {
	const [activeTab, setActiveTab] = useState("All");

	useEffect(() => {
		document.documentElement.style.setProperty('--eachSkillHeightWidth', scrollHeight + 'px');
	}, []);

	return (
		<div className={style.skillSection}>
			<HeadingUnderLine txt="Skill-Set" />

			{/* 2. Filter Buttons */}
			<div className={style.filterTabs}>
				<button
					className={activeTab === "All" ? style.activeBtn : ""}
					onClick={() => setActiveTab("All")}
				>
					All
				</button>
				{categories.map((cat) => (
					<button
						key={cat}
						className={activeTab === cat ? style.activeBtn : ""}
						onClick={() => setActiveTab(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			<div id='skillShowCase' className={style.allSkills}>
				{/* 3. Conditional Rendering Logic */}
				{activeTab === "All" ? (
					// Logic A: Show ALL with Headings
					categories.map((category) => (
						<div key={category} className={style.categoryGroup}>
							<HeadingHalfUnderLine txt={category} />
							{skillsData
								.filter(skill => skill.type === category)
								.map((skill, index) => (
									<AnimatedSkill
										key={index}
										icon={skill.icon}
										title={skill.title}
										description={skill.desc}
									/>
								))
							}
						</div>
					))
				) : (
					// Logic B: Show ONLY selected items, NO Headings
					skillsData
						.filter(skill => skill.type === activeTab)
						.map((skill, index) => (
							<AnimatedSkill
								key={index}
								icon={skill.icon}
								title={skill.title}
								description={skill.desc}
							/>
						))
				)}
			</div>
		</div>
	)
};
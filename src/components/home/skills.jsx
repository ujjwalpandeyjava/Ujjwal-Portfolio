"use client"

import SkillSphere from "@/components/3d/SkillSphere";
import AnimatedSkill from "@/components/home/AnimatedSkillProps";
import { useBoundStore } from '@/store/useBoundStore';
import style from '@/styles/Skills.module.scss';
import { HeadingHalfUnderLine, HeadingUnderLine } from '@/utils/Headings';
import { Button } from "@mantine/core";
import { useEffect, useState } from 'react';
import { BiSolidFileJson } from "react-icons/bi";
import { BsFiletypeXml, BsGearFill, BsLightningChargeFill, BsPauseCircleFill, BsPlayFill } from "react-icons/bs";
import { FaBitbucket, FaCss3Alt, FaGithub, FaHtml5, FaSitemap, FaTasks } from "react-icons/fa";
import { FaAngular, FaJava, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiApachekafka, SiCucumber, SiDocker, SiExpo, SiJenkins, SiJirasoftware, SiJunit5, SiMongodb, SiNextdotjs, SiPostman, SiPostgresql, SiRedis, SiRedux, SiSaopaulometro, SiSpringboot, SiXml } from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript, TbCube3dSphere, TbPackages } from "react-icons/tb";
import GravityPills from '@/components/home/GravityPills';




export const skillsData = [
	// --- Backend ---
	{ type: "Backend", size: 9, title: "Java", icon: <FaJava />, desc: "Object Oriented Programming language used to write logic for applications server and JSP.", color: "#2ecc71" },
	{ type: "Backend", size: 8, title: "Spring Boot", icon: <SiSpringboot />, desc: "I choose Spring-Boot for rapid development of server with microservice environment.", color: "#2ecc71" },
	{ type: "Backend", size: 7, title: "Microservices", icon: <TbPackages />, desc: "I design scalable and modular systems using microservices. This approach helps isolate functionality and improves maintainability.", color: "#2ecc71" },
	{ type: "Backend", size: 8, title: "REST APIs", icon: <FaSitemap />, desc: "REST APIs for applications to let front end interaction with server.", color: "#2ecc71" },
	{ type: "Backend", size: 6, title: "Kafka", icon: <SiApachekafka />, desc: "I use Kafka to build real-time data pipelines and streaming applications.", color: "#2ecc71" },
	{ type: "Backend", size: 7, title: "Redis", icon: <SiRedis />, desc: "Redis helps me manage caching, sessions, and real-time analytics. Its in-memory data structure makes it super fast.", color: "#2ecc71" },
	{ type: "Backend", size: 7, title: "System Architecture", icon: <MdOutlineDesignServices />, desc: "I understand how to design scalable, decoupled, and efficient system architectures using microservices and APIs.", color: "#2ecc71" },

	// --- Mobile app ---
	{ type: "Mobile", size: 8, title: "React Native", icon: <FaReact />, desc: "I have experience in building cross-platform mobile applications using React Native.", color: "#F7931E" },
	{ type: "Mobile", size: 6, title: "Expo", icon: <SiExpo />, desc: "I have experience in building cross-platform mobile applications using Expo.", color: "#F7931E" },

	// --- Frontend ---
	{ type: "Frontend", size: 9, title: "JavaScript", icon: <TbBrandJavascript />, desc: "The All rounder, allowing me to code anything and everything in one language, I rank myself 9.5/10 in JS.", color: "#339af0" },
	{ type: "Frontend", size: 8, title: "TypeScript", icon: <TbBrandTypescript />, desc: "Super set of Javascript to write most secure, and statically typed code.", color: "#339af0" },
	{ type: "Frontend", size: 9, title: "ReactJs", icon: <FaReact />, desc: "My mastery of SPA technology ReactJs gives me the ability to write class & function-based components.", color: "#339af0" },
	{ type: "Frontend", size: 9, title: "Next.js", icon: <SiNextdotjs />, desc: "I use Next.js to build fast, SEO-friendly, and production-ready React applications with SSR and SSG.", color: "#339af0" },
	{ type: "Frontend", size: 6, title: "Angular", icon: <FaAngular />, desc: "I have experience in building dynamic web applications using Angular.", color: "#339af0" },
	{ type: "Frontend", size: 7, title: "Redux / Zustand", icon: <SiRedux />, desc: "I manage application state efficiently using Redux for complex logic and Zustand for lightweight state handling.", color: "#339af0" },
	{ type: "Frontend", size: 8, title: "HTML / JSX / TSX", icon: <FaHtml5 />, desc: "I structure web UIs using HTML and its modern variants like JSX and TSX in React/TypeScript projects.", color: "#339af0" },
	{ type: "Frontend", size: 8, title: "CSS / SCSS", icon: <FaCss3Alt />, desc: "I craft responsive, pixel-perfect layouts using advanced CSS and SCSS. Comfortable with flex, grid, animations.", color: "#339af0" },

	// --- DataBase ---
	{ type: "DataBase", size: 8, title: "PostgreSQL", icon: <SiPostgresql />, desc: "Advanced open-source relational database used for complex queries, indexing, JSON operations, and ACID compliance.", color: "#22d3ee" },
	{ type: "DataBase", size: 8, title: "MySQL", icon: <GrMysql />, desc: "I have leveraged MySQL database skill, employing structured queries to efficiently store and manage data.", color: "#22d3ee" },
	{ type: "DataBase", size: 7, title: "MongoDB", icon: <SiMongodb />, desc: "I proficiently utilize MongoDB as my NoSQL database, crafting queries through Spring JPA repositories.", color: "#22d3ee" },

	// --- Others ---
	{ type: "Others", size: 8, title: "GitHub", icon: <FaGithub />, desc: "Version control system designed and developed for all case to track the code change history.", color: "#94a3b8" },
	{ type: "Others", size: 7, title: "BitBucket", icon: <FaBitbucket />, desc: "Version control system designed and developed with organizations need.", color: "#94a3b8" },
	{ type: "Others", size: 6, title: "SOAP", icon: <SiXml />, desc: "Experience with SOAP web services for building and consuming enterprise-level APIs.", color: "#94a3b8" },
	{ type: "Others", size: 7, title: "Agile Methods", icon: <FaTasks />, desc: "I follow Agile practices like Scrum and Kanban to ensure iterative development and fast delivery cycles.", color: "#94a3b8" },
	{ type: "Others", size: 7, title: "Jira", icon: <SiJirasoftware />, desc: "I use Jira to manage tasks, sprints, and project tracking efficiently, ensuring clarity across the team.", color: "#94a3b8" },
	{ type: "Others", size: 7, title: "Docker", icon: <SiDocker />, desc: "Docker allows packaging applications into containers for portability, consistency, and scalability.", color: "#94a3b8" },
	{ type: "Others", size: 7, title: "CI/CD", icon: <SiJenkins />, desc: "I implement CI/CD pipelines using Jenkins/GitHub Actions/GitLab to automate builds, tests, and deployments.", color: "#94a3b8" },

	// --- Testing ---
	{ type: "Testing", size: 6, title: "Cucumber", icon: <SiCucumber />, desc: "Tool for BDD (Behavior Driven Development) that supports writing tests in plain-text Gherkin syntax.", color: "#94a3b8" },
	{ type: "Testing", size: 7, title: "JUnit", icon: <SiJunit5 />, desc: "A programmer-oriented unit testing framework for the Java programming language.", color: "#94a3b8" },
	{ type: "Testing", size: 6, title: "SoapUI", icon: <SiSaopaulometro />, desc: "The world's most widely used automated testing tool for SOAP and REST APIs.", color: "#94a3b8" },

	// --- Data ---
	{ type: "Data", size: 8, title: "Postman", icon: <SiPostman />, desc: "I always use it to know how my API is behaving and performing. Postman is a tool for building and testing APIs.", color: "#94a3b8" },
	{ type: "Data", size: 8, title: "JSON", icon: <BiSolidFileJson />, desc: "Use JSON for data interchange between the client and server.", color: "#94a3b8" },
	{ type: "Data", size: 7, title: "XML", icon: <BsFiletypeXml />, desc: "Extensible Markup Language used for storing and transporting structured data across systems.", color: "#94a3b8" },
];

const categories = [...new Set(skillsData.map(skill => skill.type))];

export default function Skills() {
	const show3D = useBoundStore((state) => state.show3DModel);
	const enable3D = useBoundStore((state) => state.enable3D);
	const disable3D = useBoundStore((state) => state.disable3D);
	const openPerformanceModal = useBoundStore((state) => state.openPerformanceModal);

	const [activeTab, setActiveTab] = useState("All");
	const [isPaused, setIsPaused] = useState(false);
	const visibleSkills = skillsData.filter((skill) => activeTab === "All" || skill.type === activeTab);

	useEffect(() => {
		if (isPaused) return;

		const timer = setTimeout(() => {
			const allTabs = ["All", ...categories];
			const currentIndex = allTabs.indexOf(activeTab);
			const nextIndex = (currentIndex + 1) % allTabs.length;
			setActiveTab(allTabs[nextIndex]);
		}, 10000);

		return () => clearTimeout(timer);
	}, [activeTab, isPaused]);

	return (
		<div
			className={style.skillSection}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className={style.skillsHeader}>
				<HeadingUnderLine txt="My Technical Skill-Set" />
				<p className={style.skillsSubtitle}>
					A comprehensive directory of frontend/backend frameworks, database servers, devops pipelines, and testing suites I use to design high-performance systems.
				</p>
			</div>

			<div className={style.filterTabs}>
				<button
					className={activeTab === "All" ? style.activeBtn : ""}
					onClick={() => setActiveTab("All")}
				>
					All
					{activeTab === "All" && (
						<span className={`${style.progressCover} ${isPaused ? style.paused : ""}`} />
					)}
				</button>
				{categories.map((cat) => (
					<button
						key={cat}
						className={activeTab === cat ? style.activeBtn : ""}
						onClick={() => setActiveTab(cat)}
					>
						{cat}
						{activeTab === cat && (
							<span className={`${style.progressCover} ${isPaused ? style.paused : ""}`} />
						)}
					</button>
				))}
			</div>

			{show3D ? (
				<div className={style.sphereStageWrapper}>
					<div className={style.sphereTopBar}>
						<div className={style.statusPill}>
							<span className={style.pulseDot} />
							<span>3D Cosmos Active</span>
						</div>
						<div className={style.topActions}>
							<Button
								size="xs"
								radius="xl"
								variant="default"
								leftSection={<BsGearFill size={13} />}
								onClick={openPerformanceModal}
								style={{
									backgroundColor: 'rgba(255, 255, 255, 0.85)',
									backdropFilter: 'blur(8px)',
									color: '#334155',
									fontWeight: 600,
								}}
							>
								Settings
							</Button>
							<Button
								size="xs"
								radius="xl"
								color="red"
								variant="light"
								leftSection={<BsPauseCircleFill size={14} />}
								onClick={disable3D}
								style={{
									backgroundColor: 'rgba(254, 242, 242, 0.9)',
									backdropFilter: 'blur(8px)',
									fontWeight: 600,
								}}
							>
								Pause 3D
							</Button>
						</div>
					</div>

					<SkillSphere listOfSkills={visibleSkills} />

					<div className={style.sphereTip}>
						<span>Drag to spin • Hover spheres to inspect</span>
					</div>
				</div>
			) : (
				<>
					<div className={style.paused3DCard}>
						<div className={style.pausedIconWrapper}>
							<TbCube3dSphere size={32} />
						</div>
						<div className={style.pausedBadge}>
							<BsLightningChargeFill size={12} />
							<span>Eco / 2D Mode Active</span>
						</div>
						<h3 className={style.pausedTitle}>Interactive 3D Skill Sphere is Paused</h3>
						<p className={style.pausedDesc}>
							Lightweight 2D view is currently enabled for maximum responsiveness and battery conservation. You can launch the interactive 3D physics cosmos anytime.
						</p>
						<div className={style.pausedActions}>
							<Button
								size="md"
								radius="xl"
								leftSection={<BsPlayFill size={20} />}
								onClick={enable3D}
								style={{
									background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
									boxShadow: '0 4px 16px rgba(37, 99, 235, 0.28)',
									fontWeight: 600,
								}}
							>
								Launch 3D Experience
							</Button>
							<Button
								size="md"
								radius="xl"
								variant="default"
								leftSection={<BsGearFill size={15} />}
								onClick={openPerformanceModal}
								style={{
									fontWeight: 600,
									color: '#475569',
								}}
							>
								Performance Options
							</Button>
						</div>
					</div>
					<GravityPills />
				</>
			)}

			<div id='skillShowCase' className={style.allSkills}>
				{activeTab === "All" ?
					categories.map((category) => (
						<div key={category} className={style.categoryGroup}>
							<HeadingHalfUnderLine txt={category} />
							<div className={style.allSkills}>
								{skillsData.filter(skill => skill.type === category).map((skill, index) => (
									<AnimatedSkill
										key={index}
										icon={skill.icon}
										title={skill.title}
										description={skill.desc}
										color={skill.color}
										size={skill.size}
									/>
								))}
							</div>
						</div>
					)) : (
						skillsData.filter(skill => skill.type === activeTab).map((skill, index) => (
							<AnimatedSkill
								key={index}
								icon={skill.icon}
								title={skill.title}
								description={skill.desc}
								color={skill.color}
								size={skill.size}
							/>
						))
					)
				}
			</div>
		</div>
	);
}

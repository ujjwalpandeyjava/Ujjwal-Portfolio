"use client"

import Skill3DView from "@/components/home/Skill3DView";
import SkillNormalView from "@/components/home/SkillNormalView";
import { useBoundStore } from '@/store/useBoundStore';
import style from '@/styles/Skills.module.scss';
import { HeadingUnderLine } from '@/utils/Headings';
import Link from 'next/link';

import { BiSolidFileJson } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import { FaBitbucket, FaCss3Alt, FaGithub, FaHtml5, FaSitemap, FaTasks } from "react-icons/fa";
import { FaAngular, FaBrain, FaGitAlt, FaJava, FaReact, FaRobot } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiApachekafka, SiCucumber, SiDocker, SiExpo, SiGooglecloud, SiHuggingface, SiJenkins, SiJirasoftware, SiJunit5, SiMongodb, SiNextdotjs, SiPostman, SiPostgresql, SiRedis, SiRedux, SiSpring, SiSpringboot, SiXml } from "react-icons/si";
import { TbBrandJavascript, TbBrandTypescript, TbPackages, TbVectorTriangle } from "react-icons/tb";

export const skillsData = [
	// --- AI & Intelligent Systems ---
	{ type: "AI", size: 3, title: "Spring AI", icon: <SiSpringboot />, desc: "Integration of enterprise AI capabilities, embeddings, and chat models into Spring Boot microservices.", color: "#8b5cf6" },
	{ type: "AI", size: 4, title: "RAG Systems", icon: <FaBrain />, desc: "Architecting Retrieval-Augmented Generation pipelines for context-grounded, high-accuracy conversational AI.", color: "#a855f7" },
	{ type: "AI", size: 4, title: "LLMs & LangChain", icon: <SiHuggingface />, desc: "Integrating OpenAI and Hugging Face models into production workflows with LangChain and prompt engineering.", color: "#ec4899" },
	{ type: "AI", size: 3, title: "Vector Search", icon: <TbVectorTriangle />, desc: "Vector indexing, embeddings generation, and similarity search for low-latency semantic knowledge retrieval.", color: "#6366f1" },
	{ type: "AI", size: 3, title: "AI Orchestration", icon: <FaRobot />, desc: "Multi-agent coordination, automated chat engines (Eva talk, AION), and live support bots.", color: "#3b82f6" },

	// --- Backend ---
	{ type: "Backend", size: 7, title: "Java", icon: <FaJava />, desc: "Core language used for enterprise microservices, fintech payment processing, and high-load servers.", color: "#2ecc71" },
	{ type: "Backend", size: 6, title: "Spring Boot", icon: <SiSpringboot />, desc: "Rapid development of enterprise-grade microservices with production metrics, security, and REST APIs.", color: "#2ecc71" },
	{ type: "Backend", size: 5, title: "Spring Cloud", icon: <SiSpring />, desc: "Microservices coordination including service discovery, centralized configuration, and circuit breakers.", color: "#2ecc71" },
	{ type: "Backend", size: 5, title: "Microservices", icon: <TbPackages />, desc: "Designing decoupled, scalable microservice architectures with isolated domain boundaries and fault tolerance.", color: "#2ecc71" },
	{ type: "Backend", size: 6, title: "REST APIs", icon: <FaSitemap />, desc: "High-throughput, secure RESTful APIs engineered for seamless frontend and third-party integrations.", color: "#2ecc71" },
	{ type: "Backend", size: 4, title: "Kafka", icon: <SiApachekafka />, desc: "Event-driven distributed streaming pipelines for asynchronous processing and real-time event messaging.", color: "#231F20" },
	{ type: "Backend", size: 5, title: "Redis", icon: <SiRedis />, desc: "High-speed in-memory caching, distributed locks, session management, and rate limiting.", color: "#DC382D" },
	{ type: "Backend", size: 5, title: "System Architecture", icon: <MdOutlineDesignServices />, desc: "Decoupled enterprise system design, cron scheduling, fintech payment rails, and database modeling.", color: "#6366F1" },

	// --- Frontend ---
	{ type: "Frontend", size: 7, title: "JavaScript", icon: <TbBrandJavascript />, desc: "Modern ES6+ syntax, asynchronous programming, browser APIs, and event-driven frontends.", color: "#339af0" },
	{ type: "Frontend", size: 6, title: "TypeScript", icon: <TbBrandTypescript />, desc: "Strictly typed scalable codebases with comprehensive interfaces, generics, and compile-time safety.", color: "#339af0" },
	{ type: "Frontend", size: 7, title: "ReactJs", icon: <FaReact />, desc: "Component-driven architecture, custom hooks, performant state management, and optimized render cycles.", color: "#339af0" },
	{ type: "Frontend", size: 7, title: "Next.js", icon: <SiNextdotjs />, desc: "Production React framework with SSR, SSG, Turbopack, App Router, and server actions.", color: "#339af0" },
	{ type: "Frontend", size: 4, title: "Angular", icon: <FaAngular />, desc: "Enterprise frontend development for fintech client Sabre using components, services, and RxJS.", color: "#339af0" },
	{ type: "Frontend", size: 5, title: "Redux / Zustand", icon: <SiRedux />, desc: "Predictable application state management with Redux Toolkit and lightweight modular Zustand stores.", color: "#339af0" },
	{ type: "Frontend", size: 6, title: "HTML / JSX / TSX", icon: <FaHtml5 />, desc: "Semantic markup, accessible UI components, and clean component composition.", color: "#339af0" },
	{ type: "Frontend", size: 6, title: "CSS / SCSS", icon: <FaCss3Alt />, desc: "Modular CSS/SCSS architecture, flexbox/grid layouts, responsive breakpoints, and smooth keyframe animations.", color: "#339af0" },

	// --- Mobile app ---
	{ type: "Mobile", size: 6, title: "React Native", icon: <FaReact />, desc: "Cross-platform mobile applications for iOS and Android with smooth UI and native bridging.", color: "#fb923c" },
	{ type: "Mobile", size: 4, title: "Expo", icon: <SiExpo />, desc: "Accelerated React Native tooling for rapid development, testing, and OTA update workflows.", color: "#fb923c" },

	// --- DataBase ---
	{ type: "DataBase", size: 6, title: "PostgreSQL", icon: <SiPostgresql />, desc: "Relational database modeling, complex indexing, JSONB queries, and ACID transactional integrity.", color: "#336791" },
	{ type: "DataBase", size: 6, title: "MySQL", icon: <GrMysql />, desc: "Relational schema design, query optimization, indexing strategies, and Spring Data JPA integration.", color: "#00758F" },
	{ type: "DataBase", size: 5, title: "MongoDB", icon: <SiMongodb />, desc: "Document-oriented NoSQL storage for flexible schemas, AI document metadata, and fast retrieval.", color: "#13AA52" },

	// --- Testing ---
	{ type: "Testing", size: 5, title: "JUnit5", icon: <SiJunit5 />, desc: "Unit and integration test suites ensuring robust logic across Java and Spring Boot microservices.", color: "#94a3b8" },
	{ type: "Testing", size: 4, title: "Cucumber", icon: <SiCucumber />, desc: "Behavior-Driven Development (BDD) test execution using Gherkin feature definitions.", color: "#94a3b8" },

	// --- DevOps & Cloud ---
	{ type: "DevOps", size: 5, title: "Docker", icon: <SiDocker />, desc: "Containerizing microservices and frontends for deterministic, reproducible deployments.", color: "#2496ED" },
	{ type: "DevOps", size: 4, title: "Google Cloud (GCP)", icon: <SiGooglecloud />, desc: "Cloud deployment and infrastructure hosting on Compute Engine, Cloud Run, and IAM services.", color: "#4285F4" },
	{ type: "DevOps", size: 5, title: "CI/CD", icon: <SiJenkins />, desc: "Automated build, test, and release pipelines using GitHub Actions, Jenkins, and container registries.", color: "#D24939" },
	{ type: "DevOps", size: 7, title: "Git", icon: <FaGitAlt />, desc: "Branching workflows, interactive rebasing, merge resolutions, and clean commit hygiene.", color: "#F05032" },
	{ type: "DevOps", size: 6, title: "GitHub", icon: <FaGithub />, desc: "Version control hosting, pull request code reviews, issue tracking, and automated CI workflows.", color: "#24292e" },
	{ type: "DevOps", size: 5, title: "BitBucket", icon: <FaBitbucket />, desc: "Enterprise repository hosting, branch permissions, and pull request workflows.", color: "#0052CC" },
	{ type: "DevOps", size: 5, title: "Agile Methods", icon: <FaTasks />, desc: "Scrum and Kanban agile sprints, iterative backlog grooming, and fast delivery cadences.", color: "#10B981" },
	{ type: "DevOps", size: 5, title: "Jira", icon: <SiJirasoftware />, desc: "Sprint management, ticket tracking, epic structuring, and team collaboration.", color: "#2684FF" },

	// --- Data Formats & Protocols ---
	{ type: "Data", size: 7, title: "JSON", icon: <BiSolidFileJson />, desc: "Standard data interchange format for RESTful APIs, payload validation, and client-server communication.", color: "#94a3b8" },
	{ type: "Data", size: 6, title: "Postman", icon: <SiPostman />, desc: "API testing, automated collection runners, header verification, and integration documentation.", color: "#94a3b8" },
	{ type: "Data", size: 5, title: "XML", icon: <BsFiletypeXml />, desc: "Structured enterprise data schemas and legacy SOAP integration pipelines.", color: "#94a3b8" },
];

export const categories = [...new Set(skillsData.map(skill => skill.type))];

export default function Skills() {
	const show3D = useBoundStore((state) => state.show3DModel);

	return (
		<div id="skills" className={style.skillSection}>
			<div className={style.skillsHeader}>
				<HeadingUnderLine txt="My Technical Skill-Set" />
				<p className={style.skillsSubtitle}>
					A comprehensive directory of AI engineering pipelines, enterprise backend microservices, modern frontend frameworks, and cloud infrastructure I use to design high-performance systems.
				</p>
			</div>

			{show3D ? (
				<Skill3DView skillsData={skillsData} categories={categories} />
			) : (
				<SkillNormalView />
			)}

			<div className={style.showcaseCtaWrapper}>
				<Link href="/skills" className={style.showcaseCtaBtn}>
					Explore Full Skills Showcase &amp; Directory &rarr;
				</Link>
			</div>
		</div>
	);
}

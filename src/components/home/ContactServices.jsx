"use client";

import React, { useState } from "react";
import style from "@/styles/ContactServices.module.scss";
import { HeadingUnderLine } from "@/utils/Headings";
import { FaBug, FaCloud, FaDatabase, FaGoogleDrive, FaLaptopCode, FaMobileScreenButton, FaServer } from "react-icons/fa6";
import { MdSystemUpdateAlt } from "react-icons/md";
import LivingSystem from "./LivingSystem";

const services = [
	{
		id: "web-dev",
		icon: <FaLaptopCode />,
		title: "Web Development",
		badge: "Frontend & SEO",
		desc: "Building premium, fully responsive, high-performance web applications using modern React, Next.js, and clean CSS/SCSS styling.",
		template: "Hi Ujjwal, I would like to connect with you regarding a web development project. "
	},
	{
		id: "server-dev",
		icon: <FaServer />,
		title: "Server Development",
		badge: "Scalable & Secure",
		desc: "Designing robust, scale-optimized backend architectures, secure RESTful APIs, and database structures using Java and Spring Boot microservices.",
		template: "Hi Ujjwal, I need support with server/backend development for my application. "
	},
	{
		id: "mobile-dev",
		icon: <FaMobileScreenButton />,
		title: "Mobile App Development",
		badge: "iOS & Android",
		desc: "Developing smooth, native-like cross-platform mobile applications for Android & iOS using React Native and Expo.",
		template: "Hi Ujjwal, I am looking to develop a cross-platform mobile app. "
	},
	{
		id: "bug-fixes",
		icon: <FaBug />,
		title: "Bug Fixes & Code Audit",
		badge: "Fix & Optimize",
		desc: "Untangling legacy code issues, resolving memory leaks, fixing layout breaks, and optimising slow database queries or API endpoints.",
		template: "Hi Ujjwal, I have some bugs/performance issues in my app that need fixing. "
	},
	{
		id: "db-opt",
		icon: <FaDatabase />,
		title: "Database Optimization",
		badge: "Speed & Caching",
		desc: "Structuring high-speed MySQL/MongoDB schemas, setting up caching with Redis, and ensuring data consistency and query performance.",
		template: "Hi Ujjwal, I would like to design/optimize our database schema. "
	},
	{
		id: "api-devops",
		icon: <FaCloud />,
		title: "API & DevOps Setup",
		badge: "CI/CD & Cloud",
		desc: "Integrating third-party APIs, setting up Jenkins/GitHub Actions automated pipelines, Docker containerization, and cloud deployment.",
		template: "Hi Ujjwal, I need help with API integrations / deployment / DevOps setup. "
	},
	{
		id: "gcp",
		icon: <FaGoogleDrive />,
		title: "Google Cloud Platform",
		badge: "GCP & Infra",
		desc: "Setting up and managing Google Cloud services — Compute Engine, Cloud Run, Cloud Storage, Firebase, BigQuery, and serverless architectures for production workloads.",
		template: "Hi Ujjwal, I need help with Google Cloud Platform setup and management. "
	},
	{
		id: "system-upgrade",
		icon: <MdSystemUpdateAlt />,
		title: "Upgrade Your System",
		badge: "Modernize & Scale",
		desc: "Migrating legacy codebases to modern stacks, upgrading frameworks, improving performance bottlenecks, refactoring monoliths to microservices, and future-proofing your architecture.",
		template: "Hi Ujjwal, I want to upgrade/modernize my existing system and tech stack. "
	}
];

export default function ContactServices() {
	const [selectedId, setSelectedId] = useState(null);

	const handleConnect = (id, template) => {
		setSelectedId(id);
		const messageArea = document.getElementById("contact-message");
		if (messageArea) {
			messageArea.value = template;
		}
		const nameInput = document.getElementById("contact-name");
		if (nameInput) {
			nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
			setTimeout(() => {
				if (messageArea) {
					messageArea.focus();
					const length = messageArea.value.length;
					messageArea.setSelectionRange(length, length);
				} else {
					nameInput.focus();
				}
			}, 800);
		}
	};

	return (
		<section className={style.servicesSection}>
			<HeadingUnderLine txt="Collaborate & Build" />

			<LivingSystem />

			<div className={style.grid}>
				{services.map((service) => {
					const isSelected = selectedId === service.id;
					return (
						<div 
							key={service.id} 
							className={`${style.card} ${isSelected ? style.selected : ""}`}
						>
							<div className={style.iconWrapper}>
								{service.icon}
							</div>
							<span className={style.badge}>{service.badge}</span>
							<h3>{service.title}</h3>
							<p className={style.desc}>{service.desc}</p>
							<button
								className={style.connectBtn}
								onClick={() => handleConnect(service.id, service.template)}
							>
								{isSelected ? "Message Prefilled! 💬" : "Start Project"}
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}

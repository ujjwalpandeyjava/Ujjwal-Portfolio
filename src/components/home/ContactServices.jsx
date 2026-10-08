"use client";

import React, { useState } from "react";
import style from "@/styles/ContactServices.module.scss";
import { HeadingUnderLine } from "@/utils/Headings";
import { FaGoogleDrive, FaLaptopCode, FaMobileScreenButton, FaServer } from "react-icons/fa6";
import { MdSystemUpdateAlt } from "react-icons/md";
import LivingSystem from "./LivingSystem";

const services = [
	{
		id: "web-dev",
		icon: <FaLaptopCode />,
		title: "Frontend Engineering",
		badge: "React & Next.js",
		desc: "Building premium, highly interactive, and SEO-optimized web applications with lightning-fast load times and stunning UI/UX.",
		template: "Hi Ujjwal, I would like to connect with you regarding a web development project. "
	},
	{
		id: "server-dev",
		icon: <FaServer />,
		title: "Backend Architecture",
		badge: "Scalable & Secure",
		desc: "Designing robust, highly scalable backend architectures and secure RESTful APIs using Java, Spring Boot, and microservices.",
		template: "Hi Ujjwal, I need support with server/backend development for my application. "
	},
	{
		id: "mobile-dev",
		icon: <FaMobileScreenButton />,
		title: "Mobile App Development",
		badge: "iOS & Android",
		desc: "Developing smooth, native-like cross-platform mobile applications for both Android and iOS ecosystems using React Native.",
		template: "Hi Ujjwal, I am looking to develop a cross-platform mobile app. "
	},
	{
		id: "gcp",
		icon: <FaGoogleDrive />,
		title: "Google Cloud Platform",
		badge: "Cloud Infra",
		desc: "Setting up, scaling, and managing cloud infrastructure using GCP services like Compute Engine, Cloud Run, and serverless architectures.",
		template: "Hi Ujjwal, I need help with Google Cloud Platform setup and management. "
	},
	{
		id: "system-upgrade",
		icon: <MdSystemUpdateAlt />,
		title: "System Modernization",
		badge: "Upgrade & Scale",
		desc: "Migrating legacy codebases to modern tech stacks, resolving performance bottlenecks, and future-proofing your entire system architecture.",
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

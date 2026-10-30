import aiBrain from "@/statics/images/aiBrain.svg";
import dataBase from "@/statics/images/buildServer.png";
import frontEnd from "@/statics/images/FrontEnd.png";
import webDev from "@/statics/images/FrontEnd2.png";
import microService from "@/statics/images/microServiceSmall.png";
import mobileApp from "@/statics/images/mobileApp.png";
import '@/styles/whatICanDo.scss';
import { HeadingUnderLine } from "@/utils/Headings";
import { Space } from "@mantine/core";
import Image from "next/image";

export default function WhatICanDo() {
	return (
		<div className="abilitiesSection">
			<Space h={20} />
			<HeadingUnderLine txt="My proficiency" />
			<Space h={36} />

			<div className="abilities">
				<div className="eachAbilities">
					<Image src={aiBrain} alt="AI & Intelligent Systems" />
					<div>AI &amp; Intelligent Systems</div>
					<div className="content">
						Architecting enterprise AI solutions, including Retrieval-Augmented Generation (RAG) systems, LLM integrations, and intelligent multi-agent workflows.
						<hr />
						<strong>Technologies:</strong> Spring AI, LLMs (OpenAI, Hugging Face), RAG, LangChain, Vector Search
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={dataBase} alt="Backend Development" />
					<div>Backend Architecture</div>
					<div className="content">
						Experienced in building industry-standard, high-throughput microservices using Spring Boot with Java, ensuring scalable distributed systems with maintainable DBs.
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, Spring Cloud, PostgreSQL, MongoDB, Redis
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={webDev} alt="Web Development" />
					<div>Full-Stack Web Dev</div>
					<div className="content">
						Building scalable, high-performance web applications using modern frontend frameworks and robust backend microservices with SSR/SSG.
						<hr />
						<strong>Technologies:</strong> Java, React, Next.js, TypeScript, Angular
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={microService} alt="Microservice Development" />
					<div>Microservices &amp; Cloud</div>
					<div className="content">
						Designing decoupled microservice architectures, event-driven pipelines with Kafka, Docker containerization, and GCP cloud deployments.
						<hr />
						<strong>Technologies:</strong> Microservices, Kafka, Docker, GCP, CI/CD, Redis, REST APIs
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={frontEnd} alt="Frontend Development" />
					<div>Frontend Engineering</div>
					<div className="content">
						Crafting responsive, immersive user interfaces with state management, pixel-perfect styling, and micro-interactions.
						<hr />
						<strong>Technologies:</strong> React, Next.js, TypeScript, Redux, Zustand, SCSS, HTML5
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={mobileApp} alt="Mobile App Development" />
					<div>Mobile App Development</div>
					<div className="content">
						Cross-platform mobile applications for Android &amp; iOS with native performance, fluid interactions, and secure API bridging.
						<hr />
						<strong>Technologies:</strong> React Native, Expo, Mobile UI
					</div>
				</div>
			</div>
		</div>
	)
}

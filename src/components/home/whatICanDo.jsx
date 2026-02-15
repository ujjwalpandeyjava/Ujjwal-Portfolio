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
					<Image src={mobileApp} alt="" />
					<div>Mobile App Development</div>
					<div className="content">
						I am a mobile app developer with experience in building Android application.
						<hr />
						<strong>Technologies:</strong> React Native
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={webDev} alt="Web Development" />
					<div>Website Development</div>
					<div className="content">
						I build scalable, high-performance web applications using modern frontend frameworks and robust backend systems.
						<hr />
						<strong>Technologies:</strong> Java, Next.js, Angular, TypeScript
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={dataBase} alt="Backend Development" />
					<div>Backend Development</div>
					<div className="content">
						Experienced in building industry-standard, fast, and robust backend systems using Spring Boot with Java, ensuring a strong and scalable application backbone with maintainable Database.
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, and various Spring modules, MySQl, and MongoDB.
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={frontEnd} alt="Frontend Development" />
					<div>Frontend Development</div>
					<div className="content">
						Skilled in crafting immersive, user-friendly experiences with visually appealing and intuitive UI designs.
						Passionate about building responsive and dynamic web applications.
						<hr />
						<strong>Technologies:</strong> HTML, CSS, JavaScript, TypeScript, <b>ReactJS, Next.js</b>, SCSS, and various modern libraries.
					</div>
				</div>
				<div className="eachAbilities">
					<Image src={microService} alt="Microservice Development" />
					<div>Microservice Development</div>
					<div className="content">
						Proficient in designing scalable and modular backend architectures using microservice principles.
						Focused on separation of concerns, service isolation, and seamless communication between services.
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, REST APIs, Kafka, Docker, Redis, MySQL, MongoDB, and API Gateway tools.
					</div>
				</div>
			</div>
		</div>
	)
}

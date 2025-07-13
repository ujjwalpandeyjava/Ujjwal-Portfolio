import mobileApp from "../images/mobileApp.png";
import frontEnd from "../images/whatICanDo/FrontEnd.png";
import backend from "../images/whatICanDo/FrontEnd2.png";
import microService from "../images/whatICanDo/microServiceSmall.png";
import dataBase from "../images/whatICanDo/buildServer.png";
import style from './WhatICanDo.module.css';

function WhatICanDo() {
	return (
		<div className={style.abilitiesSection}>
			<h1>My proficiency</h1>
			<div className={style.abilities}>
				<div className={style.eachAbilities}>
					<img src={backend} alt="Backend Development" />
					<div>Backend Development</div>
					<div className={style.content}>
						Experienced in building industry-standard, fast, and robust backend systems using Spring Boot with Java, ensuring a strong and scalable application backbone.
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, and various Spring modules
					</div>
				</div>
				<div className={style.eachAbilities}>
					<img src={frontEnd} alt="Frontend Development" />
					<div>Frontend Development</div>
					<div className={style.content}>
						Skilled in crafting immersive, user-friendly experiences with visually appealing and intuitive UI designs.
						Passionate about building responsive and dynamic web applications.
						<hr />
						<strong>Technologies:</strong> HTML, CSS, JavaScript, TypeScript, <b>ReactJS</b>, SCSS, and various modern libraries.
					</div>
				</div>
				<div className={style.eachAbilities}>
					<img src={microService} alt="Microservice Development" />
					<div>Microservice Development</div>
					<div className={style.content}>
						Proficient in designing scalable and modular backend architectures using microservice principles.
						Focused on separation of concerns, service isolation, and seamless communication between services.
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, REST APIs, Kafka, Docker, Redis, MySQL, MongoDB, and API Gateway tools.
					</div>
				</div>
				<div className={style.eachAbilities}>
					<img src={dataBase} alt="Database development coding" />
					<div>Database Management</div>
					<div className={style.content}>
						Creating and maintaining the database for best performance is one of my best when come to backend development.
						<hr />
						<strong>Technologies:</strong> SQL: MySQl and NoSQL: MongoDB
					</div>
				</div>
				<div className={style.eachAbilities}>
					<img src={mobileApp} alt="" />
					<div>Mobile App Development</div>
					<div className={style.content}>
						I am a mobile app developer with experience in building Android application.
						<hr />
						<strong>Technologies:</strong> Kotlin, React Native
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhatICanDo
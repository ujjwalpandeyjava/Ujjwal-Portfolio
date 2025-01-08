import mobileApp from "../images/mobileApp.png";
import frontEnd from "../images/whatICanDo/FrontEnd.png";
import backend from "../images/whatICanDo/FrontEnd2.png";
import dataBase from "../images/whatICanDo/buildServer.png";
import style from './WhatICanDo.module.css';

function WhatICanDo() {
	return (
		<div className={style.abilitiesSection}>
			<h1>My proficiency</h1>
			<div className={style.abilities}>
				<div className={style.eachAbilities}>
					<img src={backend} alt="Server-side coding" />
					<div>Backend Development</div>
					<p>
						The backbone of any application is its server. I use spring boot with Java to deliver industry-standard, fast, robust server.
						<hr />
						<strong>Technologies:</strong> Java, Spring Boot, Hibernate, MongoDB, MySQL
					</p>
				</div>
				<div className={style.eachAbilities}>
					<img src={frontEnd} alt="Client-side coding" />
					<div>Frontend Development</div>
					<p>
						I am specialized in creating immersive and user-friendly experience, developing visually stunning and intuitive UI.
						<hr />
						<strong>Technologies:</strong> HTML, CSS, JavaScript, TypeScript, ReactJS, SCSS, and various modern libraries.
					</p>
				</div>
				<div className={style.eachAbilities}>
					<img src={dataBase} alt="Database development coding" />
					<div>Database Management</div>
					<p>
						Maintaining and structuring the data is one of the most crucial tasks a backend development.
						<hr />
						<strong>Technologies:</strong> SQL: MySQl and NoSQL: MongoDB
					</p>
				</div>
				<div className={style.eachAbilities}>
					<img src={mobileApp} alt="" />
					<div>Mobile App Development</div>
					<p>
						Occasional mobile app development with React Native, kotlin, swift. I can build a mobile app for both Android and iOS.
						<hr />
						<strong>Technologies:</strong> ReactNative, Swift, and Kotlin
					</p>
				</div>
			</div>
		</div>
	)
}

export default WhatICanDo
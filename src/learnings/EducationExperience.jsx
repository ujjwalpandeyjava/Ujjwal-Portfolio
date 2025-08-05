import eeCSS from './EducationExperience.module.css'

export default function EducationExperience() {
	return (
		<div className={eeCSS.sectionEE}>
			<div className={eeCSS.qualification}>
				<div className={eeCSS.heading}>Qualification</div>
				<div className={eeCSS.subHeading}>My Education</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Masters of Compute Application'>MCA - ML & AI <span className={eeCSS.time}>(2023 - 2025)</span> </div>
						<div className={eeCSS.someDetails}>
							Successfully completed with a strong focus on skills, academics, and job readiness. Achieved 8.17 CGPA.
							<br />
							Developed a solid understanding of how Artificial Intelligence and Machine Learning algorithms work, including work experience on IntellyMind.
						</div>
						<div className={eeCSS.type}><a href="https://amityonline.com/master-of-computer-applications-online" target="_blank" rel="noopener noreferrer">Masters from Amity University Online</a></div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Cloud and mobile software engineering'>GNIIT <span className={eeCSS.time}>(2019 - 2022)</span> </div>
						<div className={eeCSS.someDetails}>Dedicated 3 years boot-camp, learning full-stack Web development with java and javaScript from NIIT. I scored in top 10 with CGPA of 9.</div>
						<div className={eeCSS.type}><a href="https://www.niit.com/india/course/gniit-digital-be-real-world-ready/" target="_blank" rel="noopener noreferrer">Web Development Specialization</a></div>
						<br />
						<div className={eeCSS.type}><a href='https://www.niit.com/india/' target='_blank' rel="noopener noreferrer">National Institute of Information and Technologies</a></div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Bachelors of Computer Application'>BCA <span className={eeCSS.time}>(2018 - 2021)</span> </div>
						<div className={eeCSS.someDetails}>Acquired basic development skills and attended the GNIIT regularly to enhance my Web development skill.</div>
						<div className={eeCSS.type}><a href="https://www.ignouhelp.in/ignou-bca-syllabus-structure/" target="_blank" rel="noopener noreferrer">Graduation from IGNOU</a></div>
					</div>
				</div>
			</div>
			<div className={eeCSS.workExperience}>

				<div className={eeCSS.heading}>Work Experience</div>
				<div className={eeCSS.subHeading}>Companies I worked for</div>

				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Senior Product Developer'>IntellyLabs Technologies<span className={eeCSS.time}> (June/2024-Present) (1 year 2+ months)</span></div>
						<div className={eeCSS.someDetails}>AI Product + Service Based + Consulting <sub>(Full-Time)</sub></div>
						<details className={eeCSS.responsibilities} open>
							<summary>Responsibilities</summary>
							<ul>
								<li>- Developing the AI-powered product 'IntellyMind' including chat widget, admin panel, and live Support system  using Spring Boot micro services and React with TS, enabling real-time chat and live insights with 99% up-time.</li>
								{/* <li>- Developed micro-service-based Backend for, RepairingCompany.com - repair and tracking web application, LyncWyze - car pooling mobile apps.</li> */}
								{/* <li>- Currently developing a Customer Support Portal for Intellymind with Next.js (TS) and Spring Boot, expected to reduce ticket resolution time by 25%.</li> */}
								<li>- Developed React-based frontend applications using JavaScript (JS) and TypeScript (TS).  </li>
								<li>- Built and maintained backend microservices using Spring Boot.</li>
								<li>- Designed and developed Android applications using Kotlin.</li>
								<li>- Developed and delivering high-quality software solutions.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Senior Product Developer</div>
					</div>


					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='2 years 4 months'>AIWizards/Safety Labs Inc.<span className={eeCSS.time}> (Feb/2022-May/2024) (2 years 4 months)</span> </div>
						<div className={eeCSS.someDetails}>Product Based <sub>(Full-Time)</sub></div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>- Development and refinement of APIs and User Interfaces for in-house Telemedicine home-based Health care products.</li>
								<li>- Super-headed development and managed of the projects to oversee the production.</li>
								<li>- Developed high-processing front-end for dedicated low powered hardwares.</li>
								<li>- Integrated enterprise chat-bots, Appointment bots with AIs for web apps.</li>
								<li>- Worked very close with Salesforce developers and admin teams.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Java Developer {'>'} Full-Stack Developer</div>
					</div>

					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='3 Months'>Net Creative Mind Solutions<span className={eeCSS.time}> (Oct/2021-Jan/022) (3 months)</span> </div>
						<div className={eeCSS.someDetails}>Service to India Government <sub>(Full-Time)</sub></div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>- Worked on project, as team member in building Digitization software for government documents keeping with NewGen's software, including OmniDoc, OmniScanner.</li>
								<li>- Worked on DRDO and CEMILAC projects.</li>
								<li>- Create APIs and bug fixing for smooth transition of work.</li>
								<li>- Develop Figma into JSP, HTML, CSS code.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Java Developer Trainee</div>
					</div>

					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='6 months- While pursuing BCA and GNIIT'>NIIT<span className={eeCSS.time}> (May/2021-Oct/2021) (6 months)</span> </div>
						<div className={eeCSS.someDetails}>Educational Product Based  <sub>(Part-Time)</sub></div>
						<details className={eeCSS.responsibilities}>
							<summary title='Click to expand'>Responsibilities</summary>
							<ul>
								<li>- Create Ui with HTML, CSS, and JS for projects assigned in NIIT with teachers and developers.</li>
								<li>- Learn java for backend, at the end of this tenure, I was able to work on backend and frontend.</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Front-end Developer</div>
					</div>

				</div>
			</div>
		</div>
	)
}
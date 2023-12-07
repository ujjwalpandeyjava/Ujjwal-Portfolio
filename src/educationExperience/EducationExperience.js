import eeCSS from './EducationExperience.module.css'

export default function EducationExperience() {
	return (
		<div className={eeCSS.sectionEE}>
			<div className={eeCSS.qualification}>
				<div className={eeCSS.heading}>Qualification</div>
				<div className={eeCSS.subHeading}>My Education</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Masters of Compute Application'>MCA <span className={eeCSS.time}>(2023-2025)</span> </div>
						<div className={eeCSS.someDetails}>From Amity University</div>
						<div className={eeCSS.type}>Masters from Amity University</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Cloud and mobile software engineering'>GNIIT <span className={eeCSS.time}>(2019-2022)</span> </div>
						<div className={eeCSS.someDetails}>Scored 9 CGPA while learning multiple Web development skills in these 3 years, it awarded me mastery over full stack development from basic to advanced and taught me the importance of never stopped learning!</div>
						<div className={eeCSS.type}>Web development Specialization</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='Bachelors of Computer Application'>BCA <span className={eeCSS.time}>(2018-2021)</span> </div>
						<div className={eeCSS.someDetails}>Learned the basic development skills and attended the GNIIT regularly to enhance my Web and Cloud development skill, completed BCA in min time alloted by University without even a single subject back.</div>
						<div className={eeCSS.type}>Graduation from IGNOU</div>
					</div>
				</div>
			</div>
			<div className={eeCSS.workExperience}>
				<div className={eeCSS.heading}>Work Experience</div>
				<div className={eeCSS.subHeading}>My Awesome Experience</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title=''>Safety Labs<span className={eeCSS.time}> (Feb/2021-Till date)</span> </div>
						<div className={eeCSS.someDetails}>Tele-Medicine Home-Based Health-Care company, originated from Canada.</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>Create future change applicable web products as per the documentation</li>
								<li>Create new and Optimize old Java based API</li>
								<li>Recreate the front-end of application</li>
								<li>Led team for the production of application</li>
								<li>Connect with team for product documentation and share details for tesing</li>
								<li>Integrate APIs</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Java Developer &gt; Full-Stack Developer</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='3 Months'>Net Creative mind<span className={eeCSS.time}> (Oct/2020-Jan/021)</span> </div>
						<div className={eeCSS.someDetails}>Government product based company</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>Live Java APIs after validations</li>
								<li>Work with NextGen products</li>
								<li>Project initialization</li>
								<li>Design UI and code them on JSP and HTML CSS</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Java Developer Trainee</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='While I was pursuing BCA and GNIIT'>Daily Brief app<span className={eeCSS.time}> (Aug/2020-Oct/2020)</span> </div>
						<div className={eeCSS.someDetails}>New app</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>Did manual testing and shared informal reports</li>
								<li>Provided how the new UI is and provide figma</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Ambedissor</div>
					</div>
				</div>
			</div>
		</div>
	)
}
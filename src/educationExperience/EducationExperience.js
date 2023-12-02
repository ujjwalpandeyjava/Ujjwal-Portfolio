import eeCSS from './EducationExperience.module.css'

export default function EducationExperience() {
	return (
		<div className={eeCSS.sectionEE}>
			<div className={eeCSS.qualification}>
				<div className={eeCSS.heading}>Qualification</div>
				<div className={eeCSS.subHeading}>My Education</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='From Amity University'>MCA <span className={eeCSS.time}>(2023-2025)</span> </div>
						<div className={eeCSS.someDetails}>From Amity University</div>
						<div className={eeCSS.type}>Masters</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='From IIT'>GNIIT <span className={eeCSS.time}>(2019-2022)</span> </div>
						<div className={eeCSS.someDetails}>Cloud and mobile software engineering, these 3 years awarded me with full stack development skill from basic to advanced and taught me never stopped learning!</div>
						<div className={eeCSS.type}>Specialization</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='From IGNOU'>BCA <span className={eeCSS.time}>(2018-2021)</span> </div>
						<div className={eeCSS.someDetails}>Learned the basic development skills and attended the GNIIT regularly to enhance my web application development skill</div>
						<div className={eeCSS.type}>Graduation</div>
					</div>
				</div>
			</div>
			<div className={eeCSS.workExperience}>
				<div className={eeCSS.heading}>Work Experience</div>
				<div className={eeCSS.subHeading}>My Awesome Experience</div>
				<div className={eeCSS.details}>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='From '>name <span className={eeCSS.time}>(x-x)</span> </div>
						<div className={eeCSS.someDetails}>some detail in two line...</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>d</li>
								<li>d</li>
								<li>d</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Type</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='From '>name <span className={eeCSS.time}>(x-x)</span> </div>
						<div className={eeCSS.someDetails}>some detail in two line...</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>d</li>
								<li>d</li>
								<li>d</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Type</div>
					</div>
					<div className={eeCSS.eachWorkSection}>
						<div className={eeCSS.name} title='From '>name <span className={eeCSS.time}>(x-x)</span> </div>
						<div className={eeCSS.someDetails}>some detail in two line...</div>
						<details className={eeCSS.responsibilities}>
							<summary>Responsibilities</summary>
							<ul>
								<li>d</li>
								<li>d</li>
								<li>d</li>
							</ul>
						</details>
						<div className={eeCSS.type}>Type</div>
					</div>
				</div>
			</div>
		</div>
	)
}
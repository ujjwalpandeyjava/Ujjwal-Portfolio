import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// https://stephane-monnot.github.io/react-vertical-timeline/#/
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import BlockContainer from '../../assets/taging/BlockContainer';
import { GiJourney } from "react-icons/gi";
import Tag from '../../assets/taging/Tag';
import 'react-vertical-timeline-component/style.min.css';
import "./Journey.scss";



const commonProps = {
	vtElement0: {
		intersectionObserverProps: { triggerOnce: false, rootMargin: '0px 0px -40px 0px' },
		icon: <MdOutlineWorkHistory />,
		iconStyle: { background: '#2196f3ff', color: '#ffffff' },
		className: "vertical-timeline-element--work",
		contentStyle: { background: '#3fa5f96c', color: '#000000ff' },
		contentArrowStyle: { borderRight: '7px solid  #3fa5f96c' },
	},
	vtElement1: {
		intersectionObserverProps: { triggerOnce: false },
		className: "vertical-timeline-element--work",
		iconStyle: { background: 'rgb(33, 150, 243)', color: '#ffffff' },
		icon: <MdOutlineWorkHistory />,
		contentStyle: { background: '#ffffffff', color: '#000000ff' },
		contentArrowStyle: { borderRight: '7px solid  #ffffffff' },
	},
	vtElement2: {
		intersectionObserverProps: { triggerOnce: false },
		className: "vertical-timeline-element--education",
		iconStyle: { background: '#e91e63ff', color: '#ffffff' },
		icon: <FaGraduationCap />
	}
}
const Journey = () => {
	return (
		<div className="newSection">
			<h1 className='heading2'>My Learning Journey</h1>
			<div className="headingHint">Working and Educational Experience.</div>

			<VerticalTimeline animate={true} className="journey-timeline" lineColor="#3d50bdff">

				{/* Work Experience */}
				<VerticalTimelineElement date="May 2024 - August 2024" {...commonProps.vtElement0}>
					<BlockContainer element="span" margin={["mb"]}>
						<Tag c="gray">Java</Tag>
						<Tag c="gray">Spring Boot</Tag>
						<Tag c="gray">MicroService</Tag>
						<Tag c="gray">JavaScript</Tag>
						<Tag c="gray">TypeScript</Tag>
						<Tag c="gray">React</Tag>
						<Tag c="gray">Next</Tag>
					</BlockContainer>
					<h3 className="vertical-timeline-element-title">Senior Product Developer</h3>
					<h4 className="vertical-timeline-element-subtitle">IntellyLabs Technologies</h4>
					<div className='content'>
						<h5 className="vertical-timeline-element-subtitle">AI Product + Service Based + Consulting <sub>(Full-Time)</sub></h5>
						<h4>Responsibilities:</h4>
						<ul>
							<li> Developing the AI-powered product 'IntellyMind' including chat widget, admin panel, and live Support system  using Spring Boot micro services and React with TS, enabling real-time chat and live insights with 99% up-time.</li>
							{/* <li>- Developed micro-service-based Backend for, RepairingCompany.com - repair and tracking web application, LyncWyze - car pooling mobile apps.</li> */}
							<li> Developing a Customer Support Portal for Intellymind with Next.js (TS) and Spring Boot, expected to reduce ticket resolution time by 25%.</li>
							<li> Developed React-based frontend applications using JavaScript (JS) and TypeScript (TS).  </li>
							<li> Built and maintained backend microservices using Spring Boot.</li>
							<li> Designed and developed Android applications using Kotlin.</li>
							<li> Developed and delivering high-quality software solutions.</li>
						</ul>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement date="February 2022 - May 2024" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Java Developer {'>'} Full Stack Developer</h3>
					<h4 className="vertical-timeline-element-subtitle">AIWizards/Safety Labs Inc.</h4>
					<div className="content">
						<h5 className="vertical-timeline-element-subtitle">Product Based <sub>(Full-Time)</sub></h5>
						<h4>Responsibilities</h4>
						<ul>
							<li> Created APIs, User Interfaces, and integrated AI solutions, including chat-bots, TV web apps, and Salesforce apps.</li>
							<li> Developed appointment scheduling system, reducing healthcare management workload by 60% and revenue increase by 30%.</li>
							<li> Redesigned healthcare product UI, boosting performance and achieving a 60-65% increase in customer retention.</li>
							<li> Created a high-performance web-app for low-powered hardware, custom SironaOS for TVs ensuring seamless functionality.</li>
							<li> Collaborated closely with Salesforce developers and administrators to deliver tailored solutions.</li>
							<li> Worked with the QA team and authored comprehensive product documentation</li>
						</ul>
					</div>
				</VerticalTimelineElement>
				<VerticalTimelineElement date="July 2023 - June 2025" {...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">Master of Computer Applications - ML & AI</h3>
					<h4 className="vertical-timeline-element-subtitle">Postgraduate Degree</h4>
					<div className="content">
						{/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
						<p>
							Successfully completed with a strong focus on academics, job ready skills with AI and Web development. Achieved 8.17 CGPA.
							<br />
							Developed a solid understanding of how Artificial Intelligence and Machine Learning algorithms work, including work experience on IntellyMind.
						</p>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						{/* <Tag c='lightblue'>Cloud and mobile software engineering</Tag> */}
						<Tag c="lightblue"><a href="https://amityonline.com/master-of-computer-applications-online" target="_blank" rel="noopener noreferrer">Masters from Amity University</a></Tag>
						<Tag c="lightblue">Online</Tag>
						<Tag c="lightblue">8.17 CGPA</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				<VerticalTimelineElement date="October 2021 - January 022" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Java Developer Trainee</h3>
					<h4 className="vertical-timeline-element-subtitle">Net Creative Mind Solutions</h4>
					<div className="content">
						<h5 className="vertical-timeline-element-subtitle">Service to Indian Government <sub>(Full-Time)</sub></h5>
						<h4>Responsibilities</h4>
						<ul>
							<li> Worked on project, as team member in building Digitization software for government documents keeping with NewGen's software, including OmniDoc, OmniScanner.</li>
							<li> Worked on DRDO and CEMILAC projects.</li>
							<li> Create APIs and bug fixing for smooth transition of work.</li>
							<li> Develop Figma into JSP, HTML, CSS code.</li>
						</ul>
					</div>
				</VerticalTimelineElement>
				<VerticalTimelineElement date="October 2021 - January 022" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Front-end Developer</h3>
					<h4 className="vertical-timeline-element-subtitle">NIIT - National Institute of Information Technologies</h4>
					<div className="content">
						<h5 className="vertical-timeline-element-subtitle">Educational Product Based <sub>(Part-Time)</sub></h5>
						<h4>Responsibilities</h4>
						<ul>
							<li> Create Ui with HTML, CSS, and JS for projects assigned in NIIT with teachers and developers.</li>
							<li> Learn java for backend, at the end of this tenure, I was able to work on backend and frontend.</li>
						</ul>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement date="January 2019 - December 2022" {...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">Web Development Specialization - GNIIT</h3>
					<h4 className="vertical-timeline-element-subtitle">Cloud and mobile software engineering</h4>
					<div className="content">
						{/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
						<p>Dedicated 3 years boot-camp, learning full-stack Web development with java and javaScript from NIIT. I scored in top 10 with CGPA of 9.</p>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue">Regular</Tag>
						<Tag c="lightblue">9 CGPA</Tag>
						<Tag c="lightblue"><a href='https://www.niit.com/india/course/gniit-digital-be-real-world-ready/' target='_blank' rel="noopener noreferrer">National Institute of Information and Technologies</a></Tag>
					</BlockContainer>
				</VerticalTimelineElement>
				<VerticalTimelineElement date="July 2018 - June 2021" {...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">Bachelor of Computer Applications</h3>
					<h4 className="vertical-timeline-element-subtitle">Graduation Degree</h4>
					<div className="content">
						{/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
						<p>Acquired basic development skills and attended the GNIIT regularly to enhance my Web development skill.</p>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue">While NIIT</Tag>
						<Tag c="lightblue">6.75 CGPA</Tag>
						<Tag c="lightblue">Correspondence</Tag>
						<Tag c="lightblue"><a href="https://www.ignouhelp.in/ignou-bca-syllabus-structure/" target="_blank" rel="noopener noreferrer">IGNOU</a></Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* Start */}
				<VerticalTimelineElement date="2018 - present" iconStyle={{ background: '#10cc52ff', color: '#ffffff' }}
					icon={<GiJourney />} intersectionObserverProps={{ triggerOnce: false }}>
					<h3 className="vertical-timeline-element-title">Journey In NutShell</h3>
					<h4 className="vertical-timeline-element-subtitle">Curiosity turning into Proficiency</h4>
					<p>Began exploring programming, building basic projects, and developing a deep interest in technology and software development.</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div >
	);
};
export default Journey;
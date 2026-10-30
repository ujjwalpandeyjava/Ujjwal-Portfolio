"use client"

import BlockContainer from '@/components/taging/BlockContainer';
import Tag from '@/components/taging/Tag';
import "@/styles/journey.scss";
import { FaGraduationCap } from "react-icons/fa6";
import { GiJourney } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const commonProps = {
	vtElement0: {
		intersectionObserverProps: { triggerOnce: false, rootMargin: '0px 0px -40px 0px' },
		icon: <MdOutlineWorkHistory />,
		iconStyle: { background: '#2196f3', color: '#ffffff' },
		className: "vertical-timeline-element--work",
		contentStyle: { background: 'rgba(59, 130, 246, 0.15)', color: 'var(--text-primary)' },
		contentArrowStyle: { borderRight: '7px solid rgba(59, 130, 246, 0.15)' },
	},
	vtElement1: {
		intersectionObserverProps: { triggerOnce: false },
		className: "vertical-timeline-element--work",
		iconStyle: { background: 'rgb(33, 150, 243)', color: '#ffffff' },
		icon: <MdOutlineWorkHistory />,
		contentStyle: { background: 'var(--card-bg)', color: 'var(--text-primary)' },
		contentArrowStyle: { borderRight: '7px solid var(--card-bg)' },
	},
	vtElement2: {
		intersectionObserverProps: { triggerOnce: false },
		className: "vertical-timeline-element--education",
		iconStyle: { background: '#e91e63', color: '#ffffff' },
		icon: <FaGraduationCap />,
		contentStyle: { background: 'var(--card-bg)', color: 'var(--text-primary)' },
		contentArrowStyle: { borderRight: '7px solid var(--card-bg)' },
	}
};

const Journey = () => {
	return (
		<div>
			<h1 className='g-heading2'>My Professional &amp; Learning Journey</h1>
			<div className="g-headingHint">5+ Years of Hands-on Engineering &amp; Academic Milestones.</div>
			<VerticalTimeline animate={true} className="journey-timeline" lineColor="#3d50bdff">

				{/* Summary element */}
				<TotalExp />

				{/* 1. Coforge */}
				<VerticalTimelineElement date="Aug 2025 - Present" {...commonProps.vtElement0}>
					<h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
					<h4 className="vertical-timeline-element-subtitle">Coforge &bull; Client: Sabre</h4>
					<div className='content'>
						<h5 className="vertical-timeline-element-subtitle">Fintech &bull; Hybrid</h5>
						<h4>Key Impact &amp; Contributions:</h4>
						<ul>
							<li>Architected and developed enterprise fintech payment solutions for Sabre, engineering Spring Boot microservices, high-performance frontend applications, core enterprise systems, and scheduled cron job applications processing credit, debit, and alternative payment methods.</li>
							<li>Delivered high-impact recommendations for feature design and system optimizations that were successfully implemented, enhancing overall client functionality, application speed, and execution performance.</li>
						</ul>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue"><a href="https://coforge.com/" target="_blank" rel="noopener noreferrer">Coforge</a></Tag>
						<Tag c="lightblue">Hybrid</Tag>
						<Tag c="gray">Java</Tag>
						<Tag c="gray">Spring Boot</Tag>
						<Tag c="gray">Microservices</Tag>
						<Tag c="gray">Angular</Tag>
						<Tag c="gray">FinTech</Tag>
						<Tag c="gray">Payment Systems</Tag>
						<Tag c="gray">Cron Jobs</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* 2. Intellylabs Technologies */}
				<VerticalTimelineElement date="May 2024 - Aug 2025" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Senior Product Developer</h3>
					<h4 className="vertical-timeline-element-subtitle">Intellylabs Technologies</h4>
					<div className='content'>
						<h5 className="vertical-timeline-element-subtitle">AI Products &bull; WFH</h5>
						<h4>Key Impact &amp; Contributions:</h4>
						<ul>
							<li>Architected high-throughput RESTful APIs across Spring Boot microservices, enhancing data flow efficiency and reducing latency by 40%.</li>
							<li>Designed and deployed an AI RAG-powered chatbot and live support engine handling 100s of concurrent users and improving ticket resolution efficiency by 25%.</li>
							<li>Delivered responsive web and cross-platform applications using React and Next.js, accelerating development workflows and API integrations by 200%.</li>
							<li>Led technical execution across fast-paced product suites including Bitmart, LyncWyze, and Intellymind.</li>
						</ul>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue"><a href="https://intellylabs.com/" target="_blank" rel="noopener noreferrer">Intellylabs</a></Tag>
						<Tag c="lightblue">Work from Home</Tag>
						<Tag c="green">Spring AI</Tag>
						<Tag c="green">RAG Chatbot</Tag>
						<Tag c="gray">Java</Tag>
						<Tag c="gray">Spring Boot</Tag>
						<Tag c="gray">React.js</Tag>
						<Tag c="gray">Next.js</Tag>
						<Tag c="gray">TypeScript</Tag>
						<Tag c="gray">Docker</Tag>
						<Tag c="gray">MongoDB</Tag>
						<Tag c="gray">MySQL</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* 3. Safetylabs Inc. */}
				<VerticalTimelineElement date="Feb 2022 - May 2024" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
					<h4 className="vertical-timeline-element-subtitle">Safetylabs Inc.</h4>
					<div className="content">
						<h5 className="vertical-timeline-element-subtitle">Enterprise Healthcare Product &bull; Hybrid</h5>
						<h4>Key Impact &amp; Contributions:</h4>
						<ul>
							<li>Engineered enterprise healthcare web applications, reducing client processing workload by 60% and driving revenue growth by 30%.</li>
							<li>Overhauled legacy user interfaces using React and Redux, boosting platform render performance and elevating customer retention rates to 65%.</li>
							<li>Developed lightweight, high-performance web frontends tailored for low-powered hardware environments.</li>
							<li>Integrated OpenAI and Hugging Face Large Language Models (LLMs) into core product workflows using Spring AI and LangChain.</li>
							<li>Integrated Salesforce CRM integrations and customized automated chat solutions (Eva talk, AION).</li>
						</ul>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue">Safetylabs</Tag>
						<Tag c="lightblue">Hybrid</Tag>
						<Tag c="green">Spring AI</Tag>
						<Tag c="green">LangChain / LLMs</Tag>
						<Tag c="gray">Java</Tag>
						<Tag c="gray">Spring Boot</Tag>
						<Tag c="gray">React</Tag>
						<Tag c="gray">Redux</Tag>
						<Tag c="gray">Node.js</Tag>
						<Tag c="gray">Salesforce CRM</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* 4. Net Creativemind Solutions */}
				<VerticalTimelineElement date="Oct 2021 - Jan 2022" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Java Developer Trainee</h3>
					<h4 className="vertical-timeline-element-subtitle">Net Creativemind Solutions</h4>
					<div className="content">
						<h5 className="vertical-timeline-element-subtitle">Government Enterprise Projects &bull; On-Site</h5>
						<h4>Key Impact &amp; Contributions:</h4>
						<ul>
							<li>Developed web applications, notice portals, and document digitization interfaces for government projects (DRDO, CEMILAC).</li>
							<li>Implemented backend REST endpoints, data validations, and bug fixes across JSP and Advanced Java stacks.</li>
						</ul>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue"><a href="https://www.netcreativemind.com/" target="_blank" rel="noopener noreferrer">Net Creativemind</a></Tag>
						<Tag c="lightblue">On-Site</Tag>
						<Tag c="gray">Java</Tag>
						<Tag c="gray">Advanced Java</Tag>
						<Tag c="gray">JSP</Tag>
						<Tag c="gray">REST APIs</Tag>
						<Tag c="gray">HTML/CSS</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* 5. Master of Computer Applications in AI ML */}
				<VerticalTimelineElement date="July 2023 - August 2025" {...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">Master of Computer Applications in AI ML (MCA)</h3>
					<h4 className="vertical-timeline-element-subtitle">Amity University</h4>
					<div className="content">
						<p>
							Postgraduate Degree focused on Artificial Intelligence, Machine Learning algorithms, intelligent systems, and enterprise web architecture. Graduated with <strong>8.17 / 10 CGPA</strong>.
						</p>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue"><a href="https://amityonline.com/master-of-computer-applications-online" target="_blank" rel="noopener noreferrer">Amity University</a></Tag>
						<Tag c="green">AI &amp; Machine Learning</Tag>
						<Tag c="yellow">8.17 / 10 CGPA</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* 6. GNIIT Diploma */}
				<VerticalTimelineElement date="Jan 2019 - Dec 2022" {...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">GNIIT - Post Graduate Diploma Specialization</h3>
					<h4 className="vertical-timeline-element-subtitle">NIIT, New Delhi</h4>
					<div className="content">
						<p>Comprehensive 3-year software engineering curriculum covering Java full-stack, enterprise backend architecture, and cloud systems. Graduated in the top tier with <strong>9.00 / 10 CGPA</strong>.</p>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue">NIIT New Delhi</Tag>
						<Tag c="green">Software Engineering</Tag>
						<Tag c="yellow">9.00 / 10 CGPA</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* 7. Bachelor of Computer Applications */}
				<VerticalTimelineElement date="July 2018 - June 2021" {...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">Bachelor of Computer Applications (BCA)</h3>
					<h4 className="vertical-timeline-element-subtitle">IGNOU</h4>
					<div className="content">
						<p>Foundational computer science degree covering data structures, algorithms, database management, and object-oriented programming. Graduated with <strong>6.75 / 10 CGPA</strong>.</p>
					</div>
					<BlockContainer element="span" margin={["mt"]}>
						<Tag c="lightblue">IGNOU</Tag>
						<Tag c="green">Computer Applications</Tag>
						<Tag c="yellow">6.75 / 10 CGPA</Tag>
					</BlockContainer>
				</VerticalTimelineElement>

				{/* Summary element */}
				<TotalExp />

			</VerticalTimeline>
		</div>
	);
};
export default Journey;

const TotalExp = () => {
	return <VerticalTimelineElement date="2018 - Present" iconStyle={{ background: '#10cc52ff', color: '#ffffff' }}
		icon={<GiJourney />} intersectionObserverProps={{ triggerOnce: false }}>
		<h3 className="vertical-timeline-element-subtitle">5+ Years of Evolution &bull; Full Stack &amp; AI Engineering</h3>
		<div className="content">
			<RiDoubleQuotesL />
			From foundational computer applications to architecting high-throughput Spring Boot microservices, fintech payment engines, and production AI RAG systems handling concurrent users at scale.
			<RiDoubleQuotesR />
		</div>
	</VerticalTimelineElement>
}
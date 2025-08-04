import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
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
			<div className="headingHint">My work and educational progress.</div>

			<VerticalTimeline animate={true} className="journey-timeline" lineColor="#3d50bdff">
				{/* Work Experience */}
				<VerticalTimelineElement date="2011 - present" {...commonProps.vtElement0}>
					<h3 className="vertical-timeline-element-title">Creative Director</h3>
					<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
					<p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement date="2010 - 2011" {...commonProps.vtElement1}>
					<h3 className="vertical-timeline-element-title">Art Director</h3>
					<h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
					<p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
				</VerticalTimelineElement>
				{/* Education */}
				<VerticalTimelineElement date="2018 - 2021"{...commonProps.vtElement2}>
					<h3 className="vertical-timeline-element-title">Bachelor of Computer Application</h3>
					<h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
					<p>
						Acquired basic development skills and attended the GNIIT regularly to enhance my Web development skill.
						<span className="tags">
							<span className="tag"><a href="https://www.ignouhelp.in/ignou-bca-syllabus-structure/" target="_blank" rel="noopener noreferrer">Graduation from IGNOU</a></span>
						</span>
					</p>
				</VerticalTimelineElement>
				{/* Start */}
				<VerticalTimelineElement iconStyle={{ background: '#10cc52ff', color: '#ffffff' }} icon={<FaHourglassStart />}
					date="2018 - present" intersectionObserverProps={{ triggerOnce: false }}			>
					<h3 className="vertical-timeline-element-title">Start of My Tech Journey</h3>
					<h4 className="vertical-timeline-element-subtitle">Where curiosity turned into learning</h4>
					<p>Began exploring programming, building basic projects, and developing a deep interest in technology and software development.</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div >
	);
};
export default Journey;
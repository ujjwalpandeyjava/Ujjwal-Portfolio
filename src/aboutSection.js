import React, { Fragment, useState } from "react";
import aboutImage from './images/ujjwalAvatar3.png'
import './frag.css';
import Frag from "./frag";
import PreviewPDFs from "./previewPDFs";

function AboutSection(props) {
	const [viewPreview, setViewPreview] = useState(false);
	// console.log(props, percent);
	console.log(viewPreview);
	const previewPDFs = (viewPreview) ? < PreviewPDFs viewPreview={(x) => setViewPreview(x)} /> : "";
	return (
		<Fragment>
			<div id="aboutSection">
				<h1>About me</h1>
				<div id="firstInAbout">
					<div><img src={aboutImage} alt="That's me" /></div>
					<div id="aboutMe">
						<div>
							<div>Hi, my name is Ujjwal Pandey, I am pursuing graduation in:<br /><span>GNIIT</span> from<span> NIIT</span>,
								and <span>BCA</span> from<span> IGNOU</span><br /><br />
								I am a Full Stack Web Developer,
								I work with Java, Advanced-Java, JavaScript, React, MySQL, MongoDB, and so on... according to the projects I am working on.
								<br /><br />"<strong>Area of Interest</strong> includes: - "Full-stack Web app Development", and working with different technologies.<br />
								I am looking to connect with engineers and company to work with and on same field of interest.
							</div>
							<div id="downloadCV" style={{ color: 'black', fontWeight:'bolder', fontSize:'18px' }} onClick={() => (!viewPreview) ? setViewPreview(true) : console.log(`Already 'true' change from open full pages module`)}>Resume/CV<br /><em><sub>Preview-Download</sub></em></div>
							{(previewPDFs)}
						</div>
						<div id="bars">
							<div ><p>How good I am in?</p><hr /></div>
							<div className='group'>
								<p><span>Back-end Development</span><span>85%</span></p>
								<section><Frag percent="85%" /></section>
							</div>
							<div className='group'>
								<p><span>Front-end Development</span><span>90%</span></p>
								<section><Frag percent="90%" /></section>
							</div>
							<div className='group'>
								<p><span>ReactJs app Development</span><span>80%</span></p>
								<section><Frag percent="80%" /></section>
							</div>
							<div className='group'>
								<p> <span>Full-Stack app Development</span><span>100%</span></p>
								<section><Frag percent="100%" /></section>
							</div>
							<div className='group'>
								<p><span>Competitive programming</span><span>60%</span></p>
								<section><Frag percent="60%" /></section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default AboutSection;
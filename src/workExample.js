import  { Fragment } from "react";
import Iframe from "react-iframe";
import projectsPic from './images/projectPic.png';
import WorkingLanguages from './workingTechs/workingLanguages'

export default function WorkExample(props) {
	return (
		<Fragment>
			<div id="skills">
				<h1 className="sectionHeading">Proficiencies & Talents</h1>
				<div id="firstInExamples">
					<div><img src={projectsPic} alt="Me with certificate" /></div>
					<WorkingLanguages />
					<div id="aboutExamples" className='container' >
						<Iframe src="https://ujjwalpandeyjava.github.io/Links/examples.html" title="Projects by me" width="100%" height="600" ></Iframe>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
import React, { Fragment } from "react";
import Iframe from "react-iframe";
import projectsPic from './images/projectPic.png';

export default function WorkExample(props) {
	return (
		<Fragment>
			<div id="workExamplesSection">
				<h1>Projects by me</h1>
				<div id="firstInExamples">
					<div><img src={projectsPic} alt="Me with certificate" /></div>
					<div id="aboutExamples" className='container' >
						<Iframe src="https://ujjwalpandeyjava.github.io/Links/examples.html" title="Projects by me" width="100%" height="600" ></Iframe>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
import React, { Fragment } from "react";
import educationPic from './images/ujjwalAvatarEducation.png'


export default function EducationSection(props) {
	return (
		<Fragment>
			<div id="educationSection">
				<h1>Education Journey</h1>
				<div id="firstInEducation">
					<div><img src={educationPic} alt="That's me with certificate" /></div>
					<div id="aboutEducation">
						<div><h1>ACADEMIC</h1></div>
						<div><p><span>2019-Present</span> <br />GNIIT in Cloud and Mobile Software Engineering from NIIT</p></div>
						{/* <div><p><span>2018-Present</span> <br />1<sup>st</sup> division BCA Graduate</p></div> */}
						<div><p><span>2018-Present</span> <br />Qualified BCA Graduate</p></div>
						<div><p><span>2017</span> <br />12th from CBSE</p></div>
						<div><p><span>2015</span> <br />10th from CBSE</p></div>
						<div><h1>Educational Work</h1></div>
						<div><p>Practice and Graduation project<i><sub>(Chekout github)</sub></i></p></div>
						<div><p><span>Aug-Sept (2 months)</span> <br />Daily Brief Ambassador</p></div>
						<div><p><span>Oct-Present</span> <br />NetCreativeMind</p></div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
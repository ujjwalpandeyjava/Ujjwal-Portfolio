import { FaDownload } from "react-icons/fa";
import aboutMeCSS from './AboutMe.module.css'

export default function AboutMe() {
	return (
		<div className={aboutMeCSS.aboutMeCSS}>
			<div className={aboutMeCSS.paperIcon}></div>
			<div className={aboutMeCSS.aboutmeText}>About Me</div>
			<div className={aboutMeCSS.someDetails}></div>
			<div className={aboutMeCSS.otherDetails}>
				<div className={aboutMeCSS.personalDetails}>
					<table>
						<tr>
							<th colSpan={2}>Personal Details</th>
						</tr>
						<tr><td>DOB</td><td>31 may 1999</td></tr>
						<tr><td>DOB</td><td>31 may 1999</td></tr>
						<tr><td>DOB</td><td>31 may 1999</td></tr>
						<tr><td>DOB</td><td>31 may 1999</td></tr>
						<tr><td>DOB</td><td>31 may 1999</td></tr>
					</table>
					<div className={aboutMeCSS.eachPerInterest}><></></div>
				</div>
				<div className={aboutMeCSS.myInterest}>
					<h2>My Interests</h2>
					<div>
						<div className={aboutMeCSS.eachInterest}>
							<reactIcon />
							<span>text</span>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<reactIcon />
							<span>text</span>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<reactIcon />
							<span>text</span>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<reactIcon />
							<span>text</span>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<reactIcon />
							<span>text</span>
						</div>
						<div className={aboutMeCSS.eachInterest}>
							<reactIcon />
							<span>text</span>
						</div>
					</div>
				</div>
			</div>
			<button className={aboutMeCSS.resumeDownload}>Download CV <FaDownload /></button>
		</div>
	)
}
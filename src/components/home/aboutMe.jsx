"use client"

import { FaCode, FaDownload, FaHeadphones } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
// import PreviewPDFs from "../contact/resume/previewPDFs";
import aboutAvatar from "@/statics/images/SiteLogo.jpg";
import { useState } from "react";
import style from '@/styles/AboutMe.module.css';
import Image from "next/image";
import HeadingUnderLine from "@/utils/HeadingUnderLine";


export default function AboutMe() {
	const [viewPreview, setViewPreview] = useState(false);
	const toggleViewPreview = () => setViewPreview(old => !old)



	return (
		<div className={style.aboutMeCSS}>
			<HeadingUnderLine txt="About me" />
			<div className={style.paperIcon}><Image src={aboutAvatar} alt="Me telling details" /></div>

			<div className={style.someDetails}>
				<span className={style.myName}>A Software Developer Engineer!</span><br />
				I am Ujjwal Pandey, <b>specialized in Full-stack Web development,</b> Working at <a href="https://www.intellylabs.com/" target="_blank" rel="noreferrer">Intellylabs Technologies</a> as Senior Product Developer.<br />
				I am proficient in <span>Java + React Fullstack Development,</span> <b>with over 4 years</b> of extensive hands-on experience. Occasionally contributing to Android development using Kotlin.
			</div>

			<div className={style.otherDetails}>
				<div className={style.personalDetails}>
					<h2 >Personal Details</h2>
					<table>
						<thead>
							<tr>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Phone</td>
								<td>+91 8375990500</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>ujjwapandey.aps@gmail.com</td>
							</tr>
							<tr>
								<td>BirthDate</td>
								<td>31 May 1999</td>
							</tr>
							<tr>
								<td>Address</td>
								<td>Devoli, New Delhi, India, 110080</td>
							</tr>
							<tr>
								<td>Languages</td>
								<td>English | Hindi</td>
							</tr>
							<tr>
								<td>Job Status</td>
								<td style={{ textDecoration: "underline dotted", fontStyle: 'italic', fontWeight: "bold" }}>Working at <a href="https://www.intellylabs.com/">Intellylabs Technologies</a></td>
							</tr>
							<tr>
								<td>Job Profile</td>
								{/* <u style={{ textDecoration: "underline dotted", fontStyle: 'italic' }}>Java, JavaScript and Typescript</u> */}
								<td>Senior Product Developer</td>
							</tr>
						</tbody>
					</table>
				</div>


				<div className={style.myInterest}>
					<h2>My Interests</h2>
					<div className={style.myInterestBlocks}>
						<div className={style.eachInterest}>
							<FaCode size="2em" />
							<div>Code</div>
						</div>
						{/* <div className={style.eachInterest}>
							<GiTakeMyMoney size="2em" />
							<div>Money</div>
						</div> */}
						<div className={style.eachInterest}>
							<FaHeadphones size="2em" />
							<div>Music</div>
						</div>
						{/* <div className={style.eachInterest}>
							<MdMovieCreation size="2em" />
							<div>Cinema</div>
						</div> */}
						<div className={style.eachInterest}>
							<IoGameController size="2em" />
							<div>Game</div>
						</div>
						{/* <div className={style.eachInterest}>
							<GiDistraction size="2em" />
							<div>Anime</div>
						</div> */}
						{/*<div className={style.eachInterest}>
							<CgGym size="2em" />
							<div>Gym</div>
						</div> */}
					</div>
				</div>

			</div>

			<div style={{ textAlign: 'center' }}>
				<button className={style.resumeDownload} onClick={toggleViewPreview}>Download CV <FaDownload /></button>
			</div>

			{/* {viewPreview && <PreviewPDFs close={toggleViewPreview} />} */}
		</div>
	)
}
"server-only"

import aboutAvatar from "@/statics/images/SiteLogo.jpg";
import css from '@/styles/about.module.scss';
import { HeadingHalfUnderLine, HeadingUnderLine } from "@/utils/Headings";
import Image from "next/image";
import { FaCode, FaHeadphones } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";

export default function AboutMe() {
	return (
		<div className={css.aboutMeCSS}>
			<HeadingUnderLine txt="About me" />

			<div className={css.paperIcon}><Image src={aboutAvatar} alt="Me telling details" /></div>

			<div className={css.someDetails}>
				<span className={css.myName}>A Software Developer Engineer!</span><br />
				I am Ujjwal Pandey, <b>specialized in Full-stack Web development,</b> Working at <a href="https://www.coforge.com" target="_blank" rel="noreferrer">Coforge</a> as Senior Software Engineer.<br />
				I am proficient in <span>Java + React Fullstack Development,</span> <b>with over 4 years</b> of extensive hands-on experience. Occasionally contributing to Android development using Kotlin.
			</div>

			<div className={css.otherDetails}>
				<div className={css.personalDetails}>
					<HeadingHalfUnderLine txt="Personal Details" />
					<table>
						<tbody>
							<tr>
								<td className={css.label}>Phone</td>
								<td className={css.value}>+91 8375990500</td>
							</tr>
							<tr>
								<td className={css.label}>Email</td>
								<td className={css.value}>ujjwapandey.aps@gmail.com</td>
							</tr>
							<tr>
								<td className={css.label}>BirthDate</td>
								<td className={css.value}>31 May 1999</td>
							</tr>
							<tr>
								<td className={css.label}>Address</td>
								<td className={css.value}>Devoli, New Delhi, India, 110080</td>
							</tr>
							<tr>
								<td className={css.label}>Languages</td>
								<td className={css.value}>English | Hindi</td>
							</tr>
							<tr>
								<td className={css.label}>Job Status</td>
								<td className={css.value}><a style={{ color: 'inherit' }} href="https://www.coforge.com/" target="_blank" rel="noreferrer">Working at Coforge</a></td>
							</tr>
							<tr>
								<td className={css.label}>Job Profile</td>
								<td>Senior Product Developer</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className={css.myInterest}>
					<HeadingHalfUnderLine txt="My Interests" />
					<div className={css.myInterestBlocks}>
						<div className={css.eachInterest}>
							<div className={css.iconWrapper}>
								<FaCode size="1.5em" />
							</div>
							<div className={css.textWrapper}>
								<h3>Code</h3>
								<p>Problem-solving, Web Dev, Java, & Next.js.</p>
							</div>
						</div>
						<div className={css.eachInterest}>
							<div className={css.iconWrapper}>
								<FaHeadphones size="1.5em" />
							</div>
							<div className={css.textWrapper}>
								<h3>Music</h3>
								<p>Listening, acoustics, and finding new beats.</p>
							</div>
						</div>
						<div className={css.eachInterest}>
							<div className={css.iconWrapper}>
								<GrTechnology size="1.5em" />
							</div>
							<div className={css.textWrapper}>
								<h3>Tech</h3>
								<p>Exploring new gadgets, AI, and innovations.</p>
							</div>
						</div>
						<div className={css.eachInterest}>
							<div className={css.iconWrapper}>
								<IoGameController size="1.5em" />
							</div>
							<div className={css.textWrapper}>
								<h3>Game</h3>
								<p>Strategy, RPGs, and competitive gaming.</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
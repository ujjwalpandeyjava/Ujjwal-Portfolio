"server-only"

import css from '@/styles/about.module.scss';
import { MY_EMAIL_ID } from '@/utils/Constants';
import { HeadingHalfUnderLine, HeadingUnderLine } from "@/utils/Headings";
import { PROFILE_IMAGE } from "@/utils/siteAssets";
import Image from "next/image";
import { FaCode, FaHeadphones } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";

export const interestsList = [
	{
		title: "Code",
		desc: "Problem-solving, Web Dev, Java, & Next.js.",
		icon: <FaCode size="1.5em" />,
	},
	{
		title: "Tech",
		desc: "Exploring new gadgets, AI, and innovations.",
		icon: <GrTechnology size="1.5em" />,
	},
	{
		title: "Music",
		desc: "Listening, acoustics, and finding new beats.",
		icon: <FaHeadphones size="1.5em" />,
	},
	{
		title: "Game",
		desc: "Adventure, Strategy, RPGs, and competitive gaming.",
		icon: <IoGameController size="1.5em" />,
	},
];

export default function AboutMe() {
	return (
		<div className={css.aboutMeCSS}>
			<HeadingUnderLine txt="About me" />

			<div className={css.profileBlock}>
				<div className={css.paperIcon}>
					<Image src={PROFILE_IMAGE} alt="Portrait of Ujjwal Pandey" fill sizes="(max-width: 768px) 160px, 180px" />
				</div>
				<div className={css.someDetails}>
					<span className={css.myName}>I am Software Developer Engineer!</span>
					Ujjwal Pandey, <b>specialized in Full-stack Web development,</b> Working at <a href="https://www.coforge.com" target="_blank" rel="noreferrer">Coforge</a> as Senior Software Engineer.<br />
					I am proficient in <span>Java + React, Next.Js Fullstack Development,</span> <b>with over 4+ years</b> of extensive hands-on experience. Contributing to mobile app development.
				</div>
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
								<td className={css.value}>{MY_EMAIL_ID}</td>
							</tr>
							<tr>
								<td className={css.label}>BirthDate</td>
								<td className={css.value}>31 May 1999</td>
							</tr>
							<tr>
								<td className={css.label}>Address</td>
								<td className={css.value}>Devli, New Delhi, India, 110080</td>
							</tr>
							<tr>
								<td className={css.label}>Languages</td>
								<td className={css.value}>English | Hindi</td>
							</tr>
							<tr>
								<td className={css.label}>Job Status</td>
								<td className={css.value}><a style={{ color: 'inherit' }} href="https://www.coforge.com/" target="_blank" rel="noreferrer">Working at Coforge in (FinTech)</a></td>
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
						{interestsList.map((item, index) => (
							<div key={item.title || index} className={css.eachInterest}>
								<div className={css.iconWrapper}>
									{item.icon}
								</div>
								<div className={css.textWrapper}>
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>

			</div>
		</div>
	)
}

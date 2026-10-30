"server-only"

import css from '@/styles/about.module.scss';
import { MY_EMAIL_ID } from '@/utils/Constants';
import { HeadingHalfUnderLine, HeadingUnderLine } from "@/utils/Headings";
import Image from "next/image";
import { FaBrain, FaCode, FaHeadphones } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

export const interestsList = [
	{
		title: "Code",
		desc: "Scalable Microservices, Full-Stack Web, Java, & Next.js.",
		icon: <FaCode size="1.5em" />,
	},
	{
		title: "AI & LLMs",
		desc: "Spring AI, RAG Systems, Embeddings, & AI Orchestration.",
		icon: <FaBrain size="1.5em" />,
	},
	{
		title: "Music",
		desc: "Listening, acoustics, and discovering new rhythms.",
		icon: <FaHeadphones size="1.5em" />,
	},
	{
		title: "Gaming",
		desc: "Strategy, RPGs, problem-solving, and competitive play.",
		icon: <IoGameController size="1.5em" />,
	},
];

export default function AboutMe() {
	return (
		<div className={css.aboutMeCSS}>
			<HeadingUnderLine txt="About me" />

			<div className={css.profileBlock}>
				<div className={css.paperIcon}>
					<Image src="/professional-portrait.jpeg" alt="Professional Portrait of Ujjwal Pandey in Modern Office" fill sizes="(max-width: 768px) 160px, 180px" />
				</div>
				<div className={css.someDetails}>
					<span className={css.myName}>Hi, I&apos;m Ujjwal Pandey!</span>
					I am a <b>Senior Full Stack &amp; AI Engineer</b> currently working at <a href="https://www.coforge.com" target="_blank" rel="noreferrer">Coforge</a> as a Senior Software Engineer.<br />
					I bring <b>over 5+ years</b> of hands-on experience architecting high-throughput microservices using <span>Java, Spring Boot, React, and Next.js,</span> alongside engineering intelligent AI solutions including <span>Retrieval-Augmented Generation (RAG) systems, LLM integrations, and Spring AI.</span>
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
								<td className={css.value}><a style={{ color: 'inherit' }} href="https://www.coforge.com/" target="_blank" rel="noreferrer">Working at Coforge (FinTech / Payments)</a></td>
							</tr>
							<tr>
								<td className={css.label}>Job Profile</td>
								<td>Senior Software Engineer</td>
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

"use client"

import VantaHero from "@/components/3d/VantaHero";
import Journey from "@/components/home/Journey";
import { skillsData } from "@/components/home/skills";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import { Space } from "@mantine/core";
import style from '@/styles/SkillsPage.module.scss';

export default function JourneyPage() {
	return (
		<div className={style.pageContainer}>
			<VantaHero 
				title="My Journey"
				subtitle="A timeline of my professional career, education milestones, and the experiences that shaped me as a software engineer (developer)."
			/>

			<Space h={40} />
			<SkillsMarquee direction={true} skills={skillsData} />
			<SkillsMarquee direction={false} skills={skillsData} />
			<Space h={60} />
			<Journey />
		</div>
	);
}
"use client"

import VantaBirds from "@/components/3d/VantaBirds";
import Journey from "@/components/home/Journey";
import { skillsData } from "@/components/home/skills";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import { Space } from "@mantine/core";

export default function JourneyPage() {
	return (
		<>
			<VantaBirds>
				<h1
					style={{
						fontSize: "clamp(2rem, 5vw, 3.5rem)",
						fontWeight: 900,
						color: "#ffffff",
						letterSpacing: "-1px",
						margin: "0 0 1rem 0",
						lineHeight: 1.1,
						textShadow: "0 4px 20px rgba(0,0,0,0.4)",
					}}
				>
					My Journey
				</h1>
				<p
					style={{
						fontSize: "clamp(1rem, 2vw, 1.25rem)",
						color: "rgba(255, 255, 255, 0.75)",
						maxWidth: "600px",
						margin: "0 auto",
						lineHeight: 1.6,
					}}
				>
					A timeline of my professional career, education milestones, and the experiences that shaped me as a software engineer (developer).
				</p>
			</VantaBirds>

			<Space h={40} />
			<SkillsMarquee direction={true} skills={skillsData} />
			<SkillsMarquee direction={false} skills={skillsData} />
			<Space h={60} />
			<Journey />
		</>
	);
}
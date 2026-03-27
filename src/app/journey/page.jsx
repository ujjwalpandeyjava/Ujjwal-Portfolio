"server only"

import Journey from "@/components/home/Journey"
import { skillsData } from "@/components/home/skills"
import SkillsMarquee from "@/components/home/SkillsMarquee"
import { Space } from "@mantine/core"

export default function page() {
	return (
		<>
			<Space h={40} />
			<SkillsMarquee direction={true} skills={skillsData} />
			<SkillsMarquee direction={false} skills={skillsData} />
			<Space h={60} />
			<Journey />
		</>
	)
}
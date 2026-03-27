'use client';

import { Badge, Group, Box, useMantineTheme, Text, Tooltip } from '@mantine/core';
import classes from '@/styles/SkillsMarquee.module.scss';

/**
 * @typedef {Object} Skill
 * @property {string} title
 * @property {React.ReactNode} icon
 * @property {string} desc
 */

/**
 * @param {Object} props
 * @param {boolean} props.direction - true for LTR, false for RTL
 * @param {Skill[]} props.skills - Array of skill objects
 */
const SkillsMarquee = ({ direction = true, skills = [] }) => {
	const theme = useMantineTheme();
	const gap = theme.spacing.md;

	return (
		<Box className={classes.container}
			style={{ '--gap': typeof gap === 'number' ? `${gap}px` : gap }}
			aria-hidden="true">
			<div className={`${classes.scroll} ${!direction ? classes.reverse : ''}`}>
				<Group wrap="nowrap" gap="md" pr="md">
					{skills.map((skill, index) => (
						<Tooltip
							key={`${skill.title}-${index}`}
							label={skill.desc}
							withArrow
							position="top"
							multiline
							sw={220}
							events={{ hover: true, focus: true, touch: true }}
							transitionProps={{ transition: 'fade', duration: 200 }}>
							<Badge
								variant="gradient"
								gradient={{ to: 'indigo', deg: 168 }}
								size="xl"
								radius="md"
								className={classes.skillBadge}
								leftSection={skill.icon}
								styles={{
									section: { display: 'flex', alignItems: 'center' }
								}}>
								<Text size="sm" fw={600} component="span">{skill.title}</Text>
							</Badge>
						</Tooltip>
					))}
				</Group>
			</div>
		</Box>
	);
};
export default SkillsMarquee;
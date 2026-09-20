'use client';

import AnimatedSkill from '@/components/home/AnimatedSkillProps';
import style from '@/styles/SkillShowcase.module.scss';
import { HeadingHalfUnderLine } from '@/utils/Headings';

/**
 * SkillShowcase Component
 * Displays the categorized or filtered grid of skills with animations.
 *
 * @param {Object} props
 * @param {string} props.activeTab - Currently active filter tab ("All" or specific category)
 * @param {string[]} props.categories - List of unique skill category names
 * @param {Array} props.skillsData - Array of skill objects
 */
export default function SkillShowcase({ activeTab = 'All', categories = [], skillsData = [] }) {
	return (
		<div id="skillShowCase" className={style.allSkills}>
			{activeTab === 'All' ? (
				categories.map((category) => {
					const categorySkills = skillsData.filter((skill) => skill.type === category);
					if (categorySkills.length === 0) return null;

					return (
						<div key={category} className={style.categoryGroup}>
							<HeadingHalfUnderLine txt={category} />
							<div className={style.allSkills}>
								{categorySkills.map((skill, index) => (
									<AnimatedSkill
										key={`${category}-${skill.title || index}`}
										icon={skill.icon}
										title={skill.title}
										description={skill.desc}
										color={skill.color}
										size={skill.size}
									/>
								))}
							</div>
						</div>
					);
				})
			) : (
				skillsData
					.filter((skill) => skill.type === activeTab)
					.map((skill, index) => (
						<AnimatedSkill
							key={`${activeTab}-${skill.title || index}`}
							icon={skill.icon}
							title={skill.title}
							description={skill.desc}
							color={skill.color}
							size={skill.size}
						/>
					))
			)}
		</div>
	);
}

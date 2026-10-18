'use client';

import { useEffect, useRef } from 'react';
import AnimatedSkill from '@/components/home/AnimatedSkillProps';
import style from '@/styles/SkillShowcase.module.scss';
import { HeadingHalfUnderLine } from '@/utils/Headings';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * SkillShowcase Component
 * Displays the categorized or filtered grid of skills with GSAP ScrollTrigger batch animations.
 *
 * @param {Object} props
 * @param {string} props.activeTab - Currently active filter tab ("All" or specific category)
 * @param {string[]} props.categories - List of unique skill category names
 * @param {Array} props.skillsData - Array of skill objects
 */
export default function SkillShowcase({ activeTab = 'All', categories = [], skillsData = [] }) {
	const containerRef = useRef(null);

	useEffect(() => {
		if (typeof window === 'undefined' || !containerRef.current) return;

		const ctx = gsap.context(() => {
			const cards = gsap.utils.toArray('.eachSkillCard', containerRef.current);
			if (!cards.length) return;

			// Initial state
			gsap.set(cards, { opacity: 0, y: 35, scale: 0.94 });

			// Batch scroll reveal
			ScrollTrigger.batch(cards, {
				start: 'top 90%',
				once: true,
				onEnter: (batch) => {
					gsap.to(batch, {
						opacity: 1,
						y: 0,
						scale: 1,
						stagger: 0.05,
						duration: 0.55,
						ease: 'back.out(1.3)',
						overwrite: 'auto',
					});
				},
			});
		}, containerRef);

		const timer = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 300);

		return () => {
			clearTimeout(timer);
			ctx.revert();
		};
	}, [activeTab]);

	return (
		<div ref={containerRef} id="skillShowCase" className={style.allSkills}>
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

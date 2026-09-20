'use client';

import VantaBirds from '@/components/3d/VantaBirds';
import SkillShowcase from '@/components/home/SkillShowcase';
import { categories, skillsData } from '@/components/home/skills';
import SkillsMarquee from '@/components/home/SkillsMarquee';
import style from '@/styles/SkillsPage.module.scss';
import { Button, Container, Space } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeft, BsFilter, BsGrid1X2Fill } from 'react-icons/bs';

/**
 * SkillsPageClient Component
 * Interactive client shell for the dedicated Skills Showcase route.
 */
export default function SkillsPageClient() {
	const [activeCategory, setActiveCategory] = useState('All');

	return (
		<div className={style.pageContainer}>
			<VantaBirds>
				<div className={style.heroBadge}>
					<BsGrid1X2Fill size={13} />
					<span>Expertise &amp; Tech Matrix</span>
				</div>
				<h1 className={style.heroTitle}>Technical Skills Showcase</h1>
				<p className={style.heroSubtitle}>
					A comprehensive, deep-dive directory of modern web technologies, scalable backend architectures, database engines, and devops tooling I architect with.
				</p>
				<div className={style.heroActions}>
					<Link href="/#skills" style={{ textDecoration: 'none' }}>
						<Button
							size="sm"
							radius="xl"
							variant="default"
							leftSection={<BsArrowLeft size={14} />}
							style={{
								backgroundColor: 'rgba(255, 255, 255, 0.15)',
								backdropFilter: 'blur(8px)',
								color: '#ffffff',
								borderColor: 'rgba(255, 255, 255, 0.3)',
							}}
						>
							Interactive 3D Cosmos
						</Button>
					</Link>
				</div>
			</VantaBirds>

			<Space h={30} />
			<SkillsMarquee direction={true} skills={skillsData} />
			<SkillsMarquee direction={false} skills={skillsData} />
			<Space h={40} />

			<Container size="xl" className={style.contentWrapper}>
				<div className={style.filterBar}>
					<div className={style.filterBarHeader}>
						<BsFilter size={18} />
						<span>Filter by Domain:</span>
					</div>
					<div className={style.filterPills}>
						<button
							className={`${style.filterPill} ${activeCategory === 'All' ? style.activePill : ''}`}
							onClick={() => setActiveCategory('All')}
						>
							All Disciplines ({skillsData.length})
						</button>
						{categories.map((category) => {
							const count = skillsData.filter((s) => s.type === category).length;
							return (
								<button
									key={category}
									className={`${style.filterPill} ${activeCategory === category ? style.activePill : ''}`}
									onClick={() => setActiveCategory(category)}
								>
									{category} ({count})
								</button>
							);
						})}
					</div>
				</div>

				<SkillShowcase
					activeTab={activeCategory}
					categories={categories}
					skillsData={skillsData}
				/>
			</Container>
		</div>
	);
}

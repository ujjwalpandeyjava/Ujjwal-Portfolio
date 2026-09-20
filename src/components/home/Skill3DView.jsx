'use client';

import SkillSphere from '@/components/3d/SkillSphere';
import { useBoundStore } from '@/store/useBoundStore';
import style from '@/styles/Skill3DView.module.scss';
import { Button } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import { BsGearFill, BsPauseCircleFill } from 'react-icons/bs';

/**
 * Skill3DView Component
 * Renders the interactive 3D Skill Sphere stage, integrated filter tabs with auto-rotation, and controls.
 *
 * @param {Object} props
 * @param {Array} props.skillsData - Array of skill objects
 * @param {string[]} [props.categories] - Array of unique categories
 * @param {Array} [props.visibleSkills] - Optional pre-filtered skill array
 */
export default function Skill3DView({ skillsData = [], categories: customCategories, visibleSkills: propVisibleSkills }) {
	const disable3D = useBoundStore((state) => state.disable3D);
	const openPerformanceModal = useBoundStore((state) => state.openPerformanceModal);

	const categories = useMemo(() => {
		if (customCategories && customCategories.length > 0) return customCategories;
		return [...new Set(skillsData.map((skill) => skill.type))];
	}, [customCategories, skillsData]);

	const [activeTab, setActiveTab] = useState('All');
	const [isPaused, setIsPaused] = useState(false);

	const visibleSkills = useMemo(() => {
		if (propVisibleSkills) return propVisibleSkills;
		return skillsData.filter((skill) => activeTab === 'All' || skill.type === activeTab);
	}, [propVisibleSkills, skillsData, activeTab]);

	useEffect(() => {
		if (isPaused || categories.length === 0) return;

		const timer = setTimeout(() => {
			const allTabs = ['All', ...categories];
			const currentIndex = allTabs.indexOf(activeTab);
			const nextIndex = (currentIndex + 1) % allTabs.length;
			setActiveTab(allTabs[nextIndex]);
		}, 10000);

		return () => clearTimeout(timer);
	}, [activeTab, isPaused, categories]);

	return (
		<div
			className={style.skill3DContainer}
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
		>
			<div className={style.filterTabs}>
				<button
					className={activeTab === 'All' ? style.activeBtn : ''}
					onClick={() => setActiveTab('All')}
				>
					All
					{activeTab === 'All' && (
						<span className={`${style.progressCover} ${isPaused ? style.paused : ''}`} />
					)}
				</button>
				{categories.map((cat) => (
					<button
						key={cat}
						className={activeTab === cat ? style.activeBtn : ''}
						onClick={() => setActiveTab(cat)}
					>
						{cat}
						{activeTab === cat && (
							<span className={`${style.progressCover} ${isPaused ? style.paused : ''}`} />
						)}
					</button>
				))}
			</div>

			<div className={style.sphereStageWrapper}>
				<div className={style.sphereTopBar}>
					<div className={style.statusPill}>
						<span className={style.pulseDot} />
						<span>3D Cosmos Active</span>
					</div>
					<div className={style.topActions}>
						<Button
							size="xs"
							radius="xl"
							variant="default"
							leftSection={<BsGearFill size={13} />}
							onClick={openPerformanceModal}
							style={{
								backgroundColor: 'rgba(255, 255, 255, 0.85)',
								backdropFilter: 'blur(8px)',
								color: '#334155',
								fontWeight: 600,
							}}
						>
							Settings
						</Button>
						<Button
							size="xs"
							radius="xl"
							color="red"
							variant="light"
							leftSection={<BsPauseCircleFill size={14} />}
							onClick={disable3D}
							style={{
								backgroundColor: 'rgba(244, 63, 94, 0.1)',
								color: '#e11d48',
								backdropFilter: 'blur(8px)',
								fontWeight: 600,
							}}
						>
							Pause 3D
						</Button>
					</div>
				</div>

				<SkillSphere listOfSkills={visibleSkills} />

				<div className={style.sphereTip}>
					<span>Drag to spin • Hover spheres to inspect</span>
				</div>
			</div>
		</div>
	);
}

'use client';

import style from '@/styles/SkillsFilterBar.module.scss';
import { BsFilter } from 'react-icons/bs';

/**
 * SkillsFilterBar Component
 * Unified, responsive filter component used across both the Homepage (3D Skill Sphere)
 * and the dedicated Skills Showcase route (/skills).
 *
 * @param {Object} props
 * @param {string} props.activeCategory - Currently selected category ('All' or specific category)
 * @param {Function} props.onSelectCategory - Callback when a category pill is clicked
 * @param {string[]} props.categories - List of unique category names
 * @param {Array} props.skillsData - Complete dataset to compute live counts
 * @param {boolean} [props.showProgressSweep] - Optional flag to show auto-rotation timer progress
 * @param {boolean} [props.isPaused] - Whether auto-rotation is paused
 */
export default function SkillsFilterBar({
	activeCategory = 'All',
	onSelectCategory,
	categories = [],
	skillsData = [],
	showProgressSweep = false,
	isPaused = false,
}) {
	return (
		<div className={style.filterBar}>
			<div className={style.filterBarHeader}>
				<BsFilter size={18} />
				<span>Filter by Domain:</span>
			</div>
			<div className={style.filterPills}>
				<button
					type="button"
					className={`${style.filterPill} ${activeCategory === 'All' ? style.activePill : ''}`}
					onClick={() => onSelectCategory('All')}
				>
					All Disciplines ({skillsData.length})
					{showProgressSweep && activeCategory === 'All' && (
						<span className={`${style.progressCover} ${isPaused ? style.paused : ''}`} />
					)}
				</button>
				{categories.map((category) => {
					const count = skillsData.filter((s) => s.type === category).length;
					const isActive = activeCategory === category;
					return (
						<button
							type="button"
							key={category}
							className={`${style.filterPill} ${isActive ? style.activePill : ''}`}
							onClick={() => onSelectCategory(category)}
						>
							{category} ({count})
							{showProgressSweep && isActive && (
								<span className={`${style.progressCover} ${isPaused ? style.paused : ''}`} />
							)}
						</button>
					);
				})}
			</div>
		</div>
	);
}

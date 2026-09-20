'use client';

import GravityPills from '@/components/home/GravityPills';
import { useBoundStore } from '@/store/useBoundStore';
import style from '@/styles/SkillNormalView.module.scss';
import { Button } from '@mantine/core';
import { BsGearFill, BsLightningChargeFill, BsPlayFill } from 'react-icons/bs';
import { TbCube3dSphere } from 'react-icons/tb';

/**
 * SkillNormalView Component
 * Renders the lightweight 2D / Eco view with physics GravityPills and 3D activation trigger.
 */
export default function SkillNormalView() {
	const enable3D = useBoundStore((state) => state.enable3D);
	const openPerformanceModal = useBoundStore((state) => state.openPerformanceModal);

	return (
		<>
			<GravityPills />

			<div className={style.paused3DCard}>
				<div className={style.pausedIconWrapper}>
					<TbCube3dSphere size={32} />
				</div>
				<div className={style.pausedBadge}>
					<BsLightningChargeFill size={12} />
					<span>Eco / 2D Mode Active</span>
				</div>
				<h3 className={style.pausedTitle}>Interactive 3D Skill Sphere is Paused</h3>
				<p className={style.pausedDesc}>
					Lightweight 2D view is currently enabled for maximum responsiveness and battery conservation. You can launch the interactive 3D physics cosmos anytime.
				</p>
				<div className={style.pausedActions}>
					<Button
						size="md"
						radius="xl"
						leftSection={<BsPlayFill size={20} />}
						onClick={enable3D}
						style={{
							background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
							boxShadow: '0 4px 16px rgba(37, 99, 235, 0.28)',
							fontWeight: 600,
						}}
					>
						Launch 3D Experience
					</Button>
					<Button
						size="md"
						radius="xl"
						variant="default"
						leftSection={<BsGearFill size={15} />}
						onClick={openPerformanceModal}
						style={{
							fontWeight: 600,
							color: '#475569',
						}}
					>
						Performance Options
					</Button>
				</div>
			</div>
		</>
	);
}

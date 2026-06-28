'use client';
import { useBoundStore } from '@/store/useBoundStore';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BsRobot, BsLightningChargeFill } from "react-icons/bs";

const PerformanceModal = () => {
	const [opened, setOpened] = useState(false);
	const [isHydrated, setIsHydrated] = useState(false);

	const disable3D = useBoundStore((state) => state.disable3D);
	const isLowPerf = useBoundStore((state) => state.isLowPerformanceMode);

	// 1. Wait for hydration to ensure we can read sessionStorage
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	// 2. Logic to show modal
	useEffect(() => {
		if (isHydrated && !isLowPerf) {
			const timer = setTimeout(() => setOpened(true), 8000);
			return () => clearTimeout(timer);
		}
	}, [isHydrated, isLowPerf]);

	const handleConfirmLag = () => {
		disable3D();
		setOpened(false);
	};

	// Don't render anything until hydrated to prevent SSR/CSR mismatch
	if (!isHydrated) return null;

	return (
		<Modal
			opened={opened}
			onClose={() => setOpened(false)}
			title={
				<Group gap="sm" style={{ padding: '0.25rem 0' }}>
					<div style={{
						width: '42px',
						height: '42px',
						borderRadius: '50%',
						backgroundColor: '#ebf4ff',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: '#3b82f6'
					}}>
						<BsRobot size={22} />
					</div>
					<div>
						<Text fw={750} size="md" style={{ color: '#0f172a', lineHeight: '1.2' }}>Performance Check</Text>
						<Text size="xs" style={{ color: '#64748b', fontWeight: '500' }}>A quick suggestion for this page</Text>
					</div>
				</Group>
			}
			centered
			radius="24px"
			padding="xl"
			size="md"
			styles={{
				header: {
					borderBottom: '1px solid #f1f5f9',
					paddingBottom: '14px',
					marginBottom: '16px',
				},
				close: {
					color: '#64748b',
					borderRadius: '50%',
				},
				content: {
					backgroundColor: '#f8fafc',
				}
			}}
			overlayProps={{
				backgroundOpacity: 0.5,
				blur: 10,
			}}>
			<Stack gap="md">
				{/* Gradient Card */}
				<div style={{
					background: 'linear-gradient(135deg, #0b2545 0%, #134074 50%, #1d4e89 100%)',
					borderRadius: '20px',
					padding: '1.5rem',
					position: 'relative',
					color: '#ffffff',
					boxShadow: '0 10px 25px rgba(11, 37, 69, 0.15)',
					overflow: 'hidden'
				}}>
					{/* Decorative background light overlay */}
					<div style={{
						position: 'absolute',
						top: '-50%',
						right: '-20%',
						width: '200px',
						height: '200px',
						background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)',
						pointerEvents: 'none',
					}} />

					<Group justify="space-between" align="center" mb="md">
						<span style={{
							fontSize: '10px',
							fontWeight: '800',
							letterSpacing: '0.5px',
							background: 'rgba(255, 255, 255, 0.14)',
							padding: '5px 12px',
							borderRadius: '20px',
							textTransform: 'uppercase',
							color: '#f1f5f9',
							backdropFilter: 'blur(4px)',
						}}>
							Keep the page smooth
						</span>

						<div style={{
							width: '38px',
							height: '38px',
							borderRadius: '12px',
							border: '1px solid rgba(255, 255, 255, 0.2)',
							backgroundColor: 'rgba(255, 255, 255, 0.08)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#ffffff',
							backdropFilter: 'blur(4px)',
						}}>
							<BsLightningChargeFill size={18} />
						</div>
					</Group>

					<Text fw={800} style={{ fontSize: '1.55rem', lineHeight: '1.25', color: '#ffffff', marginBottom: '12px' }}>
						Want to pause the 3D model for a lighter experience?
					</Text>

					<Text size="sm" style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.5' }}>
						If you want to reduce motion or keep the interface feeling lighter, you can pause the 3D spheres for this session.
					</Text>
				</div>

				{/* Why Pause Card */}
				<div style={{
					backgroundColor: '#ffffff',
					border: '1px solid #f1f5f9',
					borderRadius: '16px',
					padding: '1.25rem',
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
				}}>
					<Text fw={750} size="sm" style={{ color: '#0f172a', marginBottom: '6px' }}>
						Why pause it?
					</Text>
					<Text size="xs" style={{ color: '#64748b', lineHeight: '1.5', fontWeight: '500' }}>
						It can make the page feel calmer and reduce animation on lower-powered devices or simply when you prefer a simpler view.
					</Text>
				</div>

				{/* Action Buttons */}
				<Group grow gap="md" mt="xs">
					<Button
						size="md"
						radius="xl"
						style={{
							backgroundColor: '#1d81e2',
							fontWeight: '600',
							boxShadow: '0 4px 12px rgba(29, 129, 226, 0.15)',
						}}
						onClick={() => setOpened(false)}
					>
						Keep 3D
					</Button>

					<Button
						size="md"
						radius="xl"
						style={{
							backgroundColor: '#6366f1',
							fontWeight: '600',
							boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
						}}
						onClick={handleConfirmLag}
					>
						Pause 3D
					</Button>
				</Group>
			</Stack>
		</Modal>
	);
};

export default PerformanceModal;
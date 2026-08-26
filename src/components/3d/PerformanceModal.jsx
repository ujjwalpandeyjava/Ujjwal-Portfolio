'use client';
import { useBoundStore } from '@/store/useBoundStore';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { BsRobot, BsLightningChargeFill, BsEyeFill, BsPauseCircleFill } from "react-icons/bs";

const PerformanceModal = () => {
	const [isHydrated, setIsHydrated] = useState(false);

	const isModalOpen = useBoundStore((state) => state.isPerformanceModalOpen);
	const openModal = useBoundStore((state) => state.openPerformanceModal);
	const closeModal = useBoundStore((state) => state.closePerformanceModal);
	const show3D = useBoundStore((state) => state.show3DModel);
	const enable3D = useBoundStore((state) => state.enable3D);
	const disable3D = useBoundStore((state) => state.disable3D);
	const isLowPerf = useBoundStore((state) => state.isLowPerformanceMode);

	// 1. Wait for hydration to ensure we can read sessionStorage
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	// 2. Logic to auto-prompt suggestion after 8 seconds if 3D is running smoothly
	useEffect(() => {
		if (isHydrated && !isLowPerf && show3D) {
			const timer = setTimeout(() => openModal(), 8000);
			return () => clearTimeout(timer);
		}
	}, [isHydrated, isLowPerf, show3D, openModal]);

	const handleEnable3D = () => {
		enable3D();
		closeModal();
	};

	const handleDisable3D = () => {
		disable3D();
		closeModal();
	};

	// Don't render anything until hydrated to prevent SSR/CSR mismatch
	if (!isHydrated) return null;

	return (
		<Modal
			opened={isModalOpen}
			onClose={closeModal}
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
						<Text fw={750} size="md" style={{ color: '#0f172a', lineHeight: '1.2' }}>Performance Center</Text>
						<Text size="xs" style={{ color: '#64748b', fontWeight: '500' }}>Customize rendering & visual fidelity</Text>
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
					background: show3D 
						? 'linear-gradient(135deg, #0b2545 0%, #134074 50%, #1d4e89 100%)'
						: 'linear-gradient(135deg, #1e1e38 0%, #2e2a72 50%, #4338ca 100%)',
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
							{show3D ? '3D Active Mode' : 'Lightweight / 2D Mode'}
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

					<Text fw={800} style={{ fontSize: '1.4rem', lineHeight: '1.25', color: '#ffffff', marginBottom: '12px' }}>
						{show3D 
							? 'Want to pause the 3D model for a lighter experience?' 
							: 'Enable interactive 3D physics & animations?'}
					</Text>

					<Text size="sm" style={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: '1.5' }}>
						{show3D 
							? 'If you experience frame drops or prefer a calmer interface, you can pause the 3D sphere anytime.'
							: 'Unlock full real-time interactive physics, inertia drag, and 3D skill orbit in your browser.'}
					</Text>
				</div>

				{/* Detail Card */}
				<div style={{
					backgroundColor: '#ffffff',
					border: '1px solid #f1f5f9',
					borderRadius: '16px',
					padding: '1.25rem',
					boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
				}}>
					<Text fw={750} size="sm" style={{ color: '#0f172a', marginBottom: '6px' }}>
						{show3D ? 'Why pause 3D?' : 'Why enable 3D?'}
					</Text>
					<Text size="xs" style={{ color: '#64748b', lineHeight: '1.5', fontWeight: '500' }}>
						{show3D
							? 'Pausing reduces GPU power usage and motion on lower-spec hardware or mobile devices.'
							: 'Experience interactive physics with responsive cursor repulsion and kinetic inertia.'}
					</Text>
				</div>

				{/* Action Buttons */}
				<Group grow gap="md" mt="xs">
					{show3D ? (
						<>
							<Button
								size="md"
								radius="xl"
								variant="default"
								style={{
									fontWeight: '600',
								}}
								onClick={closeModal}
							>
								Keep 3D Active
							</Button>

							<Button
								size="md"
								radius="xl"
								leftSection={<BsPauseCircleFill size={16} />}
								style={{
									backgroundColor: '#ef4444',
									fontWeight: '600',
									boxShadow: '0 4px 12px rgba(239, 68, 68, 0.25)',
								}}
								onClick={handleDisable3D}
							>
								Pause 3D
							</Button>
						</>
					) : (
						<>
							<Button
								size="md"
								radius="xl"
								variant="default"
								style={{
									fontWeight: '600',
								}}
								onClick={closeModal}
							>
								Stay in 2D Mode
							</Button>

							<Button
								size="md"
								radius="xl"
								leftSection={<BsEyeFill size={16} />}
								style={{
									background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
									fontWeight: '600',
									boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
								}}
								onClick={handleEnable3D}
							>
								Enable 3D Experience
							</Button>
						</>
					)}
				</Group>
			</Stack>
		</Modal>
	);
};

export default PerformanceModal;
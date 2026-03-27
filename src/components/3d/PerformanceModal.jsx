'use client';

import { useBoundStore } from '@/store/useBoundStore';
import { Button, Group, Modal, Stack, Text, ThemeIcon } from '@mantine/core';
import { useEffect, useState } from 'react';
import { PiOrangeBold } from "react-icons/pi";

const PerformanceModal = () => {
	const [opened, setOpened] = useState(false);
	const [isHydrated, setIsHydrated] = useState(false);

	const disable3D = useBoundStore((state) => state.disable3D);
	const isLowPerf = useBoundStore((state) => state.isLowPerformanceMode);

	// 1. Wait for hydration to ensure we can read sessionStorage
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
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
			title={<Text fw={700} size="lg">Performance Check</Text>}
			centered
			radius="md"
			padding="xl"
			overlayProps={{
				backgroundOpacity: 0.55,
				blur: 3,
			}}>
			<Stack align="center" gap="md">
				<ThemeIcon size={60} radius="xl" color="orange" variant="light">
					<PiOrangeBold size={35} />
				</ThemeIcon>

				<div style={{ textAlign: 'center' }}>
					<Text size="lg" fw={700}>Is the website lagging?</Text>
					<Text size="sm" c="dimmed" mt={5}>
						Would you like to shut down the 3D model for this session to improve speed?
					</Text>
				</div>

				<Group grow w="100%" mt="lg">
					<Button variant="light" color="gray" onClick={() => setOpened(false)}>
						No, it&apos;s smooth
					</Button>
					<Button variant="filled" color="orange" onClick={handleConfirmLag}>
						Yes, shut it down
					</Button>
				</Group>
			</Stack>
		</Modal>
	);
};

export default PerformanceModal;
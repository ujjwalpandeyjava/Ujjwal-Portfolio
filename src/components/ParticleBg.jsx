"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from 'react';


import { useMantineColorScheme } from '@mantine/core';

const ParticleBg = () => {
	const [init, setInit] = useState(false);
	const { colorScheme } = useMantineColorScheme();
	const isDark = colorScheme === 'dark';

	const options = useMemo(() => ({
		background: { color: { value: isDark ? "#0a0f1e" : "#cbf5fe" } },
		fpsLimit: 60,
		interactivity: {
			events: {
				onClick: { enable: true, mode: "push" },
				onHover: { enable: true, mode: "repulse" }
			},
			modes: {
				push: { quantity: 4 },
				repulse: { distance: 200, duration: 0.4 }
			},
		},
		particles: {
			color: { value: isDark ? "#60a5fa" : "#1c7ed6" },
			links: {
				color: isDark ? "#3b82f6" : "#49a1ee",
				distance: 150,
				enable: true,
				opacity: isDark ? 0.3 : 0.5,
				width: 1,
			},
			move: {
				direction: "none",
				enable: true,
				outModes: { default: "bounce" },
				random: false,
				speed: 3,
				straight: false,
			},
			number: {
				density: { enable: true },
				value: 80,
			},
			opacity: { value: isDark ? 0.3 : 0.5 },
			shape: { type: "circle" },
			size: { value: { min: 1, max: 5 } },
		},
		detectRetina: false,
		fullScreen: false
	}), [isDark]);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		})
			.then(() => {
				setInit(true);
			});
	}, []);


	return (init && <Particles id="tsParticles" options={options} className="particles-bg" />);
};

export default ParticleBg;
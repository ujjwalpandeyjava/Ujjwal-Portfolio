import { Physics, useSphere } from '@react-three/cannon';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import { skillsData } from '../home/skills';

// Performant global flag to track mouse clicks without triggering React re-renders
let isMouseDown = false;
if (typeof window !== 'undefined') {
	window.addEventListener('mousedown', () => (isMouseDown = true));
	window.addEventListener('mouseup', () => (isMouseDown = false));
	window.addEventListener('touchstart', () => (isMouseDown = true)); // For mobile
	window.addEventListener('touchend', () => (isMouseDown = false));
}

function SkillSphere({ word, size, color }) {
	// 1. Random start position
	const startPos = useMemo(() => [
		(Math.random() - 0.5) * 20,
		(Math.random() - 0.5) * 20,
		(Math.random() - 0.5) * 20
	], []);

	// 2. Physics setup
	const [ref, api] = useSphere(() => ({
		mass: 1,
		position: startPos,
		args: [size + 0.2],
		linearDamping: 0.9,
		angularDamping: 0.1,
		angularFactor: [0, 0.01, 0],
	}));

	// 3. Track accurate physics position
	const pos = useRef([0, 0, 0]);
	useEffect(() => {
		const unsubscribe = api.position.subscribe((p) => (pos.current = p));
		return unsubscribe;
	}, [api]);

	// 4. Movement Logic
	useFrame(() => {
		const [x, y, z] = pos.current;
		const distanceFromCenter = Math.sqrt(x * x + y * y + z * z);

		// If mouse is down, push them away (-200). If up, pull them in (150).
		// The ternary operator includes a safety boundary (distanceFromCenter < 35) so they don't get lost forever.
		let pullStrength = 12;
		if (isMouseDown) pullStrength = distanceFromCenter < 35 ? -7 : 0;

		const forceX = -x * pullStrength;
		const forceY = -y * pullStrength;
		const forceZ = -z * pullStrength;

		const swirlStrength = 1.5;
		const swirlX = -z * swirlStrength;
		const swirlZ = x * swirlStrength;

		api.applyForce([forceX + swirlX, forceY, forceZ + swirlZ], [x, y, z]);
	});

	return (
		<mesh ref={ref} castShadow receiveShadow>
			<sphereGeometry args={[size, 64, 64]} />

			{/* Kept only ONE material to allow the texture to paint correctly */}
			<meshStandardMaterial roughness={0.6} metalness={0.4}>
				<RenderTexture attach="map" anisotropy={16}>
					<PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
					<color attach="background" args={[color || '#c7c7c7']} />
					<Text fontSize={0.4} color="black" anchorX="center" anchorY="middle" fontWeight="bold">{word}</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
}

export default function Skills({ listOfSkills }) {
	return (
		<div style={{ marginBlock: "2em", width: '100%', height: '500px', backgroundColor: "#ffffff", cursor: 'pointer' }}>
			<Canvas camera={{ position: [0, 0, 45], fov: 50 }}>
				<ambientLight intensity={1.5} />
				<directionalLight position={[10, 10, 10]} intensity={2} castShadow />

				<Physics gravity={[0, 0, 0]} iterations={20}>
					{listOfSkills.map((skill, index) => <SkillSphere key={index} word={skill.title} size={skill.size} color={skill.color} />)}
				</Physics>
			</Canvas>
		</div>
	);
}
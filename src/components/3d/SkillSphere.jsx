import style from '@/styles/Skills.module.scss';
import { Physics, useSphere } from '@react-three/cannon';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';

// Performant global flags to track mouse inputs without triggering React re-renders
let isMouseDown = false;
let pointerX = 0;
let pointerY = 0;
let lastPointerX = 0;
let dragVelocityX = 0;
let currentSwirl = 0.6;
let lastUpdatedFrame = 0;

if (typeof window !== 'undefined') {
	window.addEventListener('mousedown', (e) => {
		isMouseDown = true;
		lastPointerX = e.clientX;
		dragVelocityX = 0;
	});
	window.addEventListener('mouseup', () => {
		isMouseDown = false;
	});
	window.addEventListener('mousemove', (e) => {
		pointerX = e.clientX;
		pointerY = e.clientY;
		if (isMouseDown) {
			const deltaX = e.clientX - lastPointerX;
			// Convert horizontal drag distance to spin velocity
			dragVelocityX = deltaX * 0.08;
			lastPointerX = e.clientX;
		}
	});

	window.addEventListener('touchstart', (e) => {
		isMouseDown = true;
		if (e.touches.length > 0) {
			lastPointerX = e.touches[0].clientX;
		}
		dragVelocityX = 0;
	}, { passive: true });
	window.addEventListener('touchend', () => {
		isMouseDown = false;
	});
	window.addEventListener('touchmove', (e) => {
		if (e.touches.length > 0) {
			pointerX = e.touches[0].clientX;
			pointerY = e.touches[0].clientY;
			if (isMouseDown) {
				const deltaX = e.touches[0].clientX - lastPointerX;
				dragVelocityX = deltaX * 0.08;
				lastPointerX = e.touches[0].clientX;
			}
		}
	}, { passive: true });
}

export default function Skills({ listOfSkills }) {
	return (
		<div className={style.sphereStage}>
			<Canvas camera={{ position: [0, 0, 45], fov: 50 }} dpr={[1, 1.5]}>
				<ambientLight intensity={1} />
				<directionalLight position={[10, 10, 10]} intensity={2} />
				<Suspense fallback={null}>
					<Physics gravity={[0, 0, 0]} iterations={5}>
						{listOfSkills.map((skill, index) => <SkillSphere key={skill.title} word={skill.title} size={skill.size} color={skill.color} />)}
					</Physics>
				</Suspense>
			</Canvas>
		</div>
	);
}

function SkillSphere({ word, size, color }) {
	const [hovered, setHovered] = useState(false); // Track hover state locally

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
		angularDamping: 0.01,
		angularFactor: [0, 0.01, 0], // Allow rotation on Y axis
	}));

	// 3. Track accurate physics position
	const pos = useRef([0, 0, 0]);
	useEffect(() => {
		const unsubscribe = api.position.subscribe((p) => (pos.current = p));
		return unsubscribe;
	}, [api]);

	// 4. Movement & Spin Logic
	useFrame((state) => {
		const [x, y, z] = pos.current;
		const distanceFromCenter = Math.sqrt(x * x + y * y + z * z);

		// Frame-rate independent decay of swirl (run once per frame)
		const frameId = state.gl.info.render.calls;
		if (frameId !== lastUpdatedFrame) {
			lastUpdatedFrame = frameId;
			// Decay drag velocity by friction
			dragVelocityX *= 0.85;
			if (isMouseDown) {
				// While swiping: drive swirl purely from the drag (reversed direction)
				currentSwirl = -dragVelocityX * 2.5;
			} else {
				// When released: smoothly bring swirl to zero → balls stop
				currentSwirl *= 0.88;
			}
		}

		const pullStrength = 12; // always pull toward center

		const forceX = -x * pullStrength;
		const forceY = -y * pullStrength;
		const forceZ = -z * pullStrength;

		// Swirl around Y axis driven by currentSwirl (user drag or zero)
		const swirlX = -z * currentSwirl;
		const swirlZ = x * currentSwirl;

		// Pointer Repulsion (Parting the Beads):
		// Project the 2D mouse pointer [-1 to 1] into 3D view space (Z=0 plane)
		const { viewport, pointer } = state;
		const mouse3DX = (pointer.x * viewport.width) / 2;
		const mouse3DY = (pointer.y * viewport.height) / 2;
		const mouse3DZ = 0;

		const dx = x - mouse3DX;
		const dy = y - mouse3DY;
		const dz = z - mouse3DZ;
		const distToPointer = Math.sqrt(dx * dx + dy * dy + dz * dz);

		const repulsionRadius = 14;
		let repForceX = 0;
		let repForceY = 0;
		let repForceZ = 0;

		if (distToPointer < repulsionRadius && distToPointer > 0.1) {
			// Calculate push force: stronger force closer to cursor
			const forceMagnitude = (1 - distToPointer / repulsionRadius) * 60;
			// Pushes the sphere away from pointer position
			repForceX = (dx / distToPointer) * forceMagnitude;
			repForceY = (dy / distToPointer) * forceMagnitude;
			repForceZ = (dz / distToPointer) * forceMagnitude;
		}

		api.applyForce([forceX + swirlX + repForceX, forceY + repForceY, forceZ + swirlZ + repForceZ], [x, y, z]);

		// DIRECT SPEED CONTROL
		if (hovered) {
			api.angularVelocity.set(0, -90, 0);
		} else {
			api.angularVelocity.set(0, -10, 0);
		}
	});

	return (
		<mesh
			ref={ref}
			onPointerOver={(e) => {
				e.stopPropagation(); // Prevents hovering multiple spheres at once
				setHovered(true);
			}}
			onPointerOut={() => setHovered(false)}
		>
			<sphereGeometry args={[size, 24, 24]} />
			<meshStandardMaterial
				roughness={0.6}
				metalness={0.4}
				emissive={hovered ? color : 'black'}
				emissiveIntensity={hovered ? 0.2 : 0}
			>
				<RenderTexture attach="map" anisotropy={16} frames={hovered ? Infinity : 3}>
					<PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
					<color attach="background" args={[color || '#c7c7c7']} />
					<Text fontSize={0.35} color="black" anchorX="center" anchorY="middle" fontWeight="bold">
						{word}
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
}
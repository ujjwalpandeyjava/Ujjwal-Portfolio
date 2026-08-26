'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { BsArrowClockwise, BsCursorFill } from 'react-icons/bs';
import style from '@/styles/GravityPills.module.scss';

/**
 * High-performance 2D Physics Gravity Pills component.
 * Items spawn at the top and fall with gravity, colliding against boundaries and each other.
 * Features minimum-distance target selection (eliminating neighbor offset mismatches),
 * HTML5 pointer capture, smooth kinetic throw momentum, and high-DPI rendering.
 */
export const defaultTopSkills = [
	{ text: "Java", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "Spring Boot", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "Microservices", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "REST APIs", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "Kafka", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "Redis", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "System Architecture", color: "#4ade80", bg: "rgba(20, 38, 28, 0.95)" },
	{ text: "ReactJs", color: "#38bdf8", bg: "rgba(15, 33, 58, 0.95)" },
	{ text: "Next.js", color: "#38bdf8", bg: "rgba(15, 33, 58, 0.95)" },
	{ text: "TypeScript", color: "#38bdf8", bg: "rgba(15, 33, 58, 0.95)" },
	{ text: "JavaScript", color: "#38bdf8", bg: "rgba(15, 33, 58, 0.95)" },
	{ text: "Redux / Zustand", color: "#38bdf8", bg: "rgba(15, 33, 58, 0.95)" },
	{ text: "React Native", color: "#fb923c", bg: "rgba(48, 28, 14, 0.95)" },
	{ text: "Docker", color: "#c084fc", bg: "rgba(38, 22, 60, 0.95)" },
	{ text: "CI/CD Pipelines", color: "#c084fc", bg: "rgba(38, 22, 60, 0.95)" },
	{ text: "PostgreSQL", color: "#22d3ee", bg: "rgba(12, 38, 48, 0.95)" },
	{ text: "MySQL", color: "#22d3ee", bg: "rgba(12, 38, 48, 0.95)" },
	{ text: "MongoDB", color: "#22d3ee", bg: "rgba(12, 38, 48, 0.95)" },
];

export default function GravityPills({
	items = defaultTopSkills,
	badgeText = "Interactive Skills Cosmos",
	height = 500,
	gravity = 0.45,
	restitution = 0.42,
	friction = 0.985,
}) {
	const canvasRef = useRef(null);
	const containerRef = useRef(null);
	const animFrameId = useRef(null);
	const bodiesRef = useRef([]);

	const mouseRef = useRef({
		x: -1000,
		y: -1000,
		vx: 0,
		vy: 0,
		lastX: -1000,
		lastY: -1000,
		lastTime: 0,
		isDown: false,
		draggedBody: null,
		dragOffset: { x: 0, y: 0 }
	});

	const [isInView, setIsInView] = useState(false);

	// Helper to calculate closest point between 2 line segments (for capsule-capsule collisions)
	const getClosestPointsBetweenSegments = (p1, p2, q1, q2) => {
		const d1x = p2.x - p1.x;
		const d1y = p2.y - p1.y;
		const d2x = q2.x - q1.x;
		const d2y = q2.y - q1.y;
		const rx = p1.x - q1.x;
		const ry = p1.y - q1.y;

		const a = d1x * d1x + d1y * d1y;
		const e = d2x * d2x + d2y * d2y;
		const f = d2x * rx + d2y * ry;

		let s = 0;
		let t = 0;

		if (a <= 0.0001 && e <= 0.0001) {
			s = 0;
			t = 0;
		} else if (a <= 0.0001) {
			s = 0;
			t = Math.max(0, Math.min(1, f / e));
		} else {
			const c = d1x * rx + d1y * ry;
			if (e <= 0.0001) {
				t = 0;
				s = Math.max(0, Math.min(1, -c / a));
			} else {
				const b = d1x * d2x + d1y * d2y;
				const denom = a * e - b * b;

				if (denom !== 0) {
					s = Math.max(0, Math.min(1, (b * f - c * e) / denom));
				} else {
					s = 0;
				}

				t = (b * s + f) / e;
				if (t < 0) {
					t = 0;
					s = Math.max(0, Math.min(1, -c / a));
				} else if (t > 1) {
					t = 1;
					s = Math.max(0, Math.min(1, (b - c) / a));
				}
			}
		}

		return {
			c1: { x: p1.x + d1x * s, y: p1.y + d1y * s },
			c2: { x: q1.x + d2x * t, y: q1.y + d2y * t }
		};
	};

	// Exact distance from pointer (x, y) to capsule line-segment
	const getCapsuleDistance = (b, x, y) => {
		const dx = x - b.x;
		const dy = y - b.y;
		const cos = Math.cos(b.angle);
		const sin = Math.sin(b.angle);

		// Transform point to local capsule coordinate space
		const localX = dx * cos + dy * sin;
		const localY = -dx * sin + dy * cos;

		// Find distance to central segment [-halfLength, +halfLength] along local X
		const clampedX = Math.max(-b.halfLength, Math.min(b.halfLength, localX));
		const segDx = localX - clampedX;
		const segDy = localY;

		return Math.sqrt(segDx * segDx + segDy * segDy);
	};

	// Initialize pill bodies
	const initBodies = useCallback((width, canvasHeight) => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;

		ctx.font = 'bold 14px "Inter", -apple-system, BlinkMacSystemFont, sans-serif';

		const newBodies = items.map((item, index) => {
			const text = typeof item === 'string' ? item : item.text || item.title || '';
			const customColor = typeof item === 'object' ? item.color : null;
			const customBg = typeof item === 'object' ? item.bg : null;

			const textMetrics = ctx.measureText(text);
			const pillHeight = 44;
			const pillRadius = pillHeight / 2;
			const pillWidth = Math.max(textMetrics.width + 42, 110);
			const halfLength = (pillWidth - pillHeight) / 2;

			// Scatter positions across top
			const colCount = Math.min(items.length, 5);
			const col = index % colCount;
			const row = Math.floor(index / colCount);

			const colWidth = (width - 160) / colCount;
			const startX = 80 + col * colWidth + (Math.random() - 0.5) * 40;
			const startY = -60 - row * 75 - Math.random() * 50;

			return {
				id: index,
				text,
				color: customColor || '#f8fafc',
				bg: customBg || 'rgba(28, 34, 48, 0.95)',
				borderColor: 'rgba(255, 255, 255, 0.16)',
				x: startX,
				y: startY,
				vx: (Math.random() - 0.5) * 3,
				vy: Math.random() * 2 + 1,
				angle: (Math.random() - 0.5) * 0.8,
				angularVelocity: (Math.random() - 0.5) * 0.05,
				width: pillWidth,
				height: pillHeight,
				radius: pillRadius,
				halfLength,
				mass: pillWidth * 0.8,
				inertia: (pillWidth * 0.8 * (pillWidth * pillWidth + pillHeight * pillHeight)) / 12,
			};
		});

		bodiesRef.current = newBodies;
	}, [items]);

	// Viewport intersection observer to trigger animation
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
				}
			},
			{ threshold: 0.2 }
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	// Handle Canvas Setup & Physics Loop
	useEffect(() => {
		if (!isInView) return;

		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const ctx = canvas.getContext('2d');
		let width = container.clientWidth;
		let curHeight = container.clientHeight || height;

		const updateSize = () => {
			if (!container || !canvas) return;
			width = container.clientWidth;
			curHeight = container.clientHeight || height;
			const dpr = window.devicePixelRatio || 1;

			canvas.width = width * dpr;
			canvas.height = curHeight * dpr;
			ctx.resetTransform?.();
			ctx.scale(dpr, dpr);
		};

		updateSize();
		initBodies(width, curHeight);

		window.addEventListener('resize', updateSize);

		// Physics Simulation Step
		const stepPhysics = () => {
			const bodies = bodiesRef.current;
			const mouse = mouseRef.current;

			const subSteps = 6;
			const dt = 1 / subSteps;

			for (let step = 0; step < subSteps; step++) {
				// 1. Integrate positions & apply forces
				for (let i = 0; i < bodies.length; i++) {
					const b = bodies[i];

					if (mouse.draggedBody === b) {
						// Follow target drag position smoothly with velocity tracking
						const targetX = mouse.x + mouse.dragOffset.x;
						const targetY = mouse.y + mouse.dragOffset.y;
						b.vx = (targetX - b.x) * 0.5;
						b.vy = (targetY - b.y) * 0.5;
						b.x += b.vx;
						b.y += b.vy;
						b.angularVelocity *= 0.9;
						continue;
					}

					b.vy += gravity * dt;
					b.vx *= Math.pow(friction, dt);
					b.vy *= Math.pow(friction, dt);
					b.angularVelocity *= Math.pow(0.97, dt);

					b.x += b.vx * dt;
					b.y += b.vy * dt;
					b.angle += b.angularVelocity * dt;

					// Cursor Repulsion / Push when not dragging
					if (!mouse.draggedBody && mouse.x > 0 && mouse.y > 0) {
						const dx = b.x - mouse.x;
						const dy = b.y - mouse.y;
						const dist = Math.sqrt(dx * dx + dy * dy);
						const pushRadius = b.radius + 65;

						if (dist < pushRadius && dist > 0.1) {
							const pushForce = ((pushRadius - dist) / pushRadius) * 0.8;
							const nx = dx / dist;
							const ny = dy / dist;

							b.vx += (nx * pushForce * 3.5 + mouse.vx * 0.25) * dt;
							b.vy += (ny * pushForce * 3.5 + mouse.vy * 0.25) * dt;
							b.angularVelocity += ((nx * mouse.vy - ny * mouse.vx) * 0.005) * dt;
						}
					}

					// Wall & Floor Collisions
					const cos = Math.cos(b.angle);
					const sin = Math.sin(b.angle);

					const p1 = { x: b.x - cos * b.halfLength, y: b.y - sin * b.halfLength };
					const p2 = { x: b.x + cos * b.halfLength, y: b.y + sin * b.halfLength };

					// Floor Collision
					const maxY = Math.max(p1.y, p2.y) + b.radius;
					if (maxY > curHeight) {
						const pen = maxY - curHeight;
						b.y -= pen;
						b.vy = -Math.abs(b.vy) * restitution;
						b.vx *= 0.88;
						b.angularVelocity *= 0.85;

						// Torque from ground contact
						if (p1.y > p2.y) {
							b.angularVelocity += b.vx * 0.002;
						} else {
							b.angularVelocity -= b.vx * 0.002;
						}
					}

					// Left Wall
					const minX = Math.min(p1.x, p2.x) - b.radius;
					if (minX < 0) {
						b.x += -minX;
						b.vx = Math.abs(b.vx) * restitution;
						b.angularVelocity *= 0.9;
					}

					// Right Wall
					const maxX = Math.max(p1.x, p2.x) + b.radius;
					if (maxX > width) {
						b.x -= maxX - width;
						b.vx = -Math.abs(b.vx) * restitution;
						b.angularVelocity *= 0.9;
					}
				}

				// 2. Pill-to-Pill Capsule Collisions
				for (let i = 0; i < bodies.length; i++) {
					const b1 = bodies[i];
					const cos1 = Math.cos(b1.angle);
					const sin1 = Math.sin(b1.angle);
					const p1a = { x: b1.x - cos1 * b1.halfLength, y: b1.y - sin1 * b1.halfLength };
					const p1b = { x: b1.x + cos1 * b1.halfLength, y: b1.y + sin1 * b1.halfLength };

					for (let j = i + 1; j < bodies.length; j++) {
						const b2 = bodies[j];
						const cos2 = Math.cos(b2.angle);
						const sin2 = Math.sin(b2.angle);
						const p2a = { x: b2.x - cos2 * b2.halfLength, y: b2.y - sin2 * b2.halfLength };
						const p2b = { x: b2.x + cos2 * b2.halfLength, y: b2.y + sin2 * b2.halfLength };

						const { c1, c2 } = getClosestPointsBetweenSegments(p1a, p1b, p2a, p2b);
						const dx = c2.x - c1.x;
						const dy = c2.y - c1.y;
						const distSq = dx * dx + dy * dy;
						const minDist = b1.radius + b2.radius;

						if (distSq < minDist * minDist && distSq > 0.0001) {
							const dist = Math.sqrt(distSq);
							const pen = minDist - dist;
							const nx = dx / dist;
							const ny = dy / dist;

							// Positional resolution
							const totalMass = b1.mass + b2.mass;
							const m1Ratio = b2.mass / totalMass;
							const m2Ratio = b1.mass / totalMass;

							if (mouse.draggedBody !== b1) {
								b1.x -= nx * pen * m1Ratio * 0.8;
								b1.y -= ny * pen * m1Ratio * 0.8;
							}
							if (mouse.draggedBody !== b2) {
								b2.x += nx * pen * m2Ratio * 0.8;
								b2.y += ny * pen * m2Ratio * 0.8;
							}

							// Relative velocity at contact points
							const r1x = c1.x - b1.x;
							const r1y = c1.y - b1.y;
							const r2x = c2.x - b2.x;
							const r2y = c2.y - b2.y;

							const vp1x = b1.vx - b1.angularVelocity * r1y;
							const vp1y = b1.vy + b1.angularVelocity * r1x;
							const vp2x = b2.vx - b2.angularVelocity * r2y;
							const vp2y = b2.vy + b2.angularVelocity * r2x;

							const rvx = vp2x - vp1x;
							const rvy = vp2y - vp1y;

							const velAlongNormal = rvx * nx + rvy * ny;

							if (velAlongNormal < 0) {
								const r1CrossN = r1x * ny - r1y * nx;
								const r2CrossN = r2x * ny - r2y * nx;
								const invMassSum = (1 / b1.mass) + (1 / b2.mass) +
									(r1CrossN * r1CrossN) / b1.inertia +
									(r2CrossN * r2CrossN) / b2.inertia;

								const impulse = -(1 + restitution) * velAlongNormal / invMassSum;

								const impX = nx * impulse;
								const impY = ny * impulse;

								if (mouse.draggedBody !== b1) {
									b1.vx -= impX / b1.mass;
									b1.vy -= impY / b1.mass;
									b1.angularVelocity -= (r1x * impY - r1y * impX) / b1.inertia;
								}

								if (mouse.draggedBody !== b2) {
									b2.vx += impX / b2.mass;
									b2.vy += impY / b2.mass;
									b2.angularVelocity += (r2x * impY - r2y * impX) / b2.inertia;
								}
							}
						}
					}
				}
			}

			// 3. Render Canvas
			ctx.clearRect(0, 0, width, curHeight);

			// Draw Constellation Mesh links between nearby pills
			const maxLinkDist = 185;
			ctx.lineWidth = 1;

			for (let i = 0; i < bodies.length; i++) {
				const b1 = bodies[i];

				// Links to other nearby pills
				for (let j = i + 1; j < bodies.length; j++) {
					const b2 = bodies[j];
					const dx = b2.x - b1.x;
					const dy = b2.y - b1.y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < maxLinkDist) {
						const alpha = (1 - dist / maxLinkDist) * 0.28;
						ctx.beginPath();
						ctx.moveTo(b1.x, b1.y);
						ctx.lineTo(b2.x, b2.y);
						ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
						ctx.stroke();
					}
				}

				// Links to active cursor
				if (mouse.x > 0 && mouse.y > 0) {
					const mdx = b1.x - mouse.x;
					const mdy = b1.y - mouse.y;
					const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
					if (mdist < 160) {
						const malpha = (1 - mdist / 160) * 0.45;
						ctx.beginPath();
						ctx.moveTo(b1.x, b1.y);
						ctx.lineTo(mouse.x, mouse.y);
						ctx.strokeStyle = `rgba(96, 165, 250, ${malpha})`;
						ctx.stroke();
					}
				}
			}

			// Draw pills
			for (let i = 0; i < bodies.length; i++) {
				const b = bodies[i];
				const isDragged = mouse.draggedBody === b;

				ctx.save();
				ctx.translate(b.x, b.y);
				ctx.rotate(b.angle);

				// Glow / shadow for dragged pill
				if (isDragged) {
					ctx.shadowColor = 'rgba(56, 189, 248, 0.7)';
					ctx.shadowBlur = 20;
				}

				// Draw Capsule Pill
				ctx.beginPath();
				ctx.roundRect(-b.width / 2, -b.height / 2, b.width, b.height, b.radius);

				// Pill background & border
				ctx.fillStyle = isDragged ? 'rgba(37, 99, 235, 0.92)' : b.bg;
				ctx.fill();

				ctx.lineWidth = isDragged ? 2.2 : 1.2;
				ctx.strokeStyle = isDragged ? '#60a5fa' : b.borderColor;
				ctx.stroke();

				// Reset shadow for text
				ctx.shadowBlur = 0;

				// Text
				ctx.font = '600 13.5px "Inter", -apple-system, BlinkMacSystemFont, sans-serif';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillStyle = isDragged ? '#ffffff' : b.color;
				ctx.fillText(b.text, 0, 1);

				ctx.restore();
			}

			animFrameId.current = requestAnimationFrame(stepPhysics);
		};

		animFrameId.current = requestAnimationFrame(stepPhysics);

		return () => {
			window.removeEventListener('resize', updateSize);
			if (animFrameId.current) {
				cancelAnimationFrame(animFrameId.current);
			}
		};
	}, [isInView, initBodies, gravity, restitution, friction, height]);

	// Native Pointer Events with exact closest-body matching
	const handlePointerDown = (e) => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		try {
			canvas.setPointerCapture(e.pointerId);
		} catch (_) {}

		const rect = canvas.getBoundingClientRect();
		const scaleX = rect.width ? container.clientWidth / rect.width : 1;
		const scaleY = rect.height ? (container.clientHeight || height) / rect.height : 1;

		const x = (e.clientX - rect.left) * scaleX;
		const y = (e.clientY - rect.top) * scaleY;

		const mouse = mouseRef.current;
		mouse.x = x;
		mouse.y = y;
		mouse.lastX = x;
		mouse.lastY = y;
		mouse.vx = 0;
		mouse.vy = 0;
		mouse.lastTime = performance.now();
		mouse.isDown = true;

		// Select the exact pill with minimum distance to cursor
		const bodies = bodiesRef.current;
		let bestBody = null;
		let minDistance = Infinity;

		for (let i = 0; i < bodies.length; i++) {
			const b = bodies[i];
			const dist = getCapsuleDistance(b, x, y);
			// Check if click is inside pill geometry
			if (dist <= b.radius + 4) {
				if (dist < minDistance) {
					minDistance = dist;
					bestBody = b;
				}
			}
		}

		if (bestBody) {
			mouse.draggedBody = bestBody;
			mouse.dragOffset = { x: bestBody.x - x, y: bestBody.y - y };
			bestBody.vx = 0;
			bestBody.vy = 0;
			bestBody.angularVelocity = 0;

			// Bring captured body to the top of the stack for clean visual rendering
			const index = bodies.indexOf(bestBody);
			if (index > -1 && index !== bodies.length - 1) {
				bodies.splice(index, 1);
				bodies.push(bestBody);
			}
		}
	};

	const handlePointerMove = (e) => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const rect = canvas.getBoundingClientRect();
		const scaleX = rect.width ? container.clientWidth / rect.width : 1;
		const scaleY = rect.height ? (container.clientHeight || height) / rect.height : 1;

		const x = (e.clientX - rect.left) * scaleX;
		const y = (e.clientY - rect.top) * scaleY;

		const mouse = mouseRef.current;
		const now = performance.now();
		const dt = Math.max(1, now - mouse.lastTime);

		const instVx = ((x - mouse.lastX) / dt) * 16;
		const instVy = ((y - mouse.lastY) / dt) * 16;

		mouse.vx = mouse.vx * 0.35 + instVx * 0.65;
		mouse.vy = mouse.vy * 0.35 + instVy * 0.65;

		mouse.x = x;
		mouse.y = y;
		mouse.lastX = x;
		mouse.lastY = y;
		mouse.lastTime = now;
	};

	const handlePointerUp = (e) => {
		const canvas = canvasRef.current;
		if (canvas && e.pointerId) {
			try {
				canvas.releasePointerCapture(e.pointerId);
			} catch (_) {}
		}

		const mouse = mouseRef.current;
		mouse.isDown = false;

		if (mouse.draggedBody) {
			const b = mouse.draggedBody;
			// Apply throw velocity with capped inertia
			b.vx = Math.max(-28, Math.min(28, mouse.vx * 1.25));
			b.vy = Math.max(-28, Math.min(28, mouse.vy * 1.25));
			b.angularVelocity = (mouse.dragOffset.x * mouse.vy - mouse.dragOffset.y * mouse.vx) * 0.003;
			mouse.draggedBody = null;
		}
	};

	const handlePointerCancel = (e) => {
		handlePointerUp(e);
		const mouse = mouseRef.current;
		mouse.x = -1000;
		mouse.y = -1000;
	};

	const handleReset = () => {
		const container = containerRef.current;
		if (!container) return;
		initBodies(container.clientWidth, container.clientHeight || height);
	};

	return (
		<div ref={containerRef} className={style.gravityContainer} style={{ height }}>
			<div className={style.overlayHeader}>
				<div className={style.badge}>
					<span className={style.pulseDot} />
					<span>{badgeText}</span>
				</div>

				<button className={style.resetBtn} onClick={handleReset} title="Drop Again">
					<BsArrowClockwise size={13} />
					<span>Reset Gravity</span>
				</button>
			</div>

			<div className={style.topHint}>
				<BsCursorFill size={11} color="#38bdf8" />
				<span>Click & drag pills to throw • Move cursor to push</span>
			</div>

			<canvas
				ref={canvasRef}
				className={style.canvas}
				onPointerDown={handlePointerDown}
				onPointerMove={handlePointerMove}
				onPointerUp={handlePointerUp}
				onPointerCancel={handlePointerCancel}
			/>
		</div>
	);
}

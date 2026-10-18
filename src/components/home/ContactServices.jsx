"use client";

import style from "@/styles/ContactServices.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaGoogleDrive, FaLaptopCode, FaMobileScreenButton, FaRocket, FaServer } from "react-icons/fa6";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

const services = [
	{
		id: "web-dev",
		icon: <FaLaptopCode />,
		title: "Frontend Engineering",
		badge: "React & Next.js",
		desc: "Building premium, highly interactive, and SEO-optimized web applications with lightning-fast load times and stunning UI/UX.",
		template: "Hi Ujjwal, I would like to connect with you regarding a web development project. "
	},
	{
		id: "server-dev",
		icon: <FaServer />,
		title: "Backend Architecture",
		badge: "Scalable & Secure",
		desc: "Designing robust, highly scalable backend architectures and secure RESTful APIs using Java, Spring Boot, and microservices.",
		template: "Hi Ujjwal, I need support with server/backend development for my application. "
	},
	{
		id: "mobile-dev",
		icon: <FaMobileScreenButton />,
		title: "Mobile App Development",
		badge: "iOS & Android",
		desc: "Developing smooth, native-like cross-platform mobile applications for both Android and iOS ecosystems using React Native.",
		template: "Hi Ujjwal, I am looking to develop a cross-platform mobile app. "
	},
	{
		id: "gcp",
		icon: <FaGoogleDrive />,
		title: "Google Cloud Platform",
		badge: "Cloud Infra",
		desc: "Setting up, scaling, and managing cloud infrastructure using GCP services like Compute Engine, Cloud Run, and serverless architectures.",
		template: "Hi Ujjwal, I need help with Google Cloud Platform setup and management. "
	},
	{
		id: "system-upgrade",
		icon: <FaRocket />,
		title: "We Deliver What We Say",
		badge: "High Ownership & Impact",
		desc: "Have a codebase? Need a product? let's get together and settle the bottlenecks? I take end-to-end technical ownership to engineer clean, maintainable, and high-performance solutions that scale effortlessly.",
		template: "Hi Ujjwal, I have an ambitious project / system modernization need. I'd love to discuss technical ownership and next steps."
	}
];

export default function ContactServices() {
	const [selectedId, setSelectedId] = useState(null);
	const containerRef = useRef(null);
	const stageRef = useRef(null);
	const cardRefs = useRef([]);

	useEffect(() => {
		if (typeof window === "undefined" || !stageRef.current) return;

		const cards = cardRefs.current.filter(Boolean);
		if (!cards.length) return;

		const ctx = gsap.context(() => {
			// Initialize card states
			cards.forEach((card, index) => {
				if (index === 0) {
					gsap.set(card, { yPercent: 0, scale: 1, opacity: 1, zIndex: 1 });
				} else {
					gsap.set(card, { yPercent: 120, scale: 0.95, opacity: 0, zIndex: index + 1 });
				}
			});

			const scrollDistance = (cards.length - 1) * 450;

			// Master scrub timeline pinned to the section boundary
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: `+=${scrollDistance}`,
					pin: true,
					pinSpacing: true,
					scrub: 0.5,
					invalidateOnRefresh: true,
				}
			});

			cards.forEach((card, i) => {
				if (i === 0) return;

				// Current card slides up into focus
				tl.to(card, {
					yPercent: 0,
					scale: 1,
					opacity: 1,
					duration: 1,
					ease: "power1.inOut",
				});

				// Preceding card scales down, shifts upward, dims into an underlapping card
				tl.to(cards[i - 1], {
					scale: 0.93,
					yPercent: -8,
					opacity: 0.3,
					duration: 1,
					ease: "power1.inOut",
				}, "<");

				// Two cards back fades out completely
				if (i > 1) {
					tl.to(cards[i - 2], {
						opacity: 0,
						scale: 0.86,
						duration: 1,
						ease: "power1.inOut",
					}, "<");
				}
			});
		}, containerRef);

		const timer = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 500);

		return () => {
			clearTimeout(timer);
			ctx.revert();
		};
	}, []);

	const handleConnect = (id, template) => {
		setSelectedId(id);
		const messageArea = document.getElementById("contact-message");
		if (messageArea) {
			messageArea.value = template;
		}
		const nameInput = document.getElementById("contact-name");
		if (nameInput) {
			nameInput.scrollIntoView({ behavior: "smooth", block: "center" });
			setTimeout(() => {
				if (messageArea) {
					messageArea.focus();
					const length = messageArea.value.length;
					messageArea.setSelectionRange(length, length);
				} else {
					nameInput.focus();
				}
			}, 800);
		}
	};

	return (
		<section ref={containerRef} className={style.servicesSection}>
			<div className={style.splitLayout}>
				{/* Left Side: Cards Animation */}
				<div className={style.cardsSide}>
					<div ref={stageRef} className={style.cardsStage}>
						{services.map((service, index) => {
							const isSelected = selectedId === service.id;
							const isLast = index === services.length - 1;
							return (
								<div key={service.id} ref={(el) => (cardRefs.current[index] = el)} className={`${style.card} ${isLast ? style.finalCard : ""} ${isSelected ? style.selected : ""}`}>
									<div className={style.cardHeader}>
										<div className={`${style.iconWrapper} ${isLast ? style.finalIcon : ""}`}>{service.icon}</div>
										<div className={style.cardMeta}>
											<span className={`${style.badge} ${isLast ? style.finalBadge : ""}`}>{service.badge}</span>
											<h3>{service.title}</h3>
										</div>
										<span className={style.cardNumber}>0{index + 1} / 0{services.length}</span>
									</div>

									<p className={style.desc}>{service.desc}</p>

									{isLast && <div className={style.trustPills}>
										<span>⚡ High-Velocity Ownership</span>
										<span>🛡️ 100% Scalable Code</span>
									</div>}

									<div className={style.cardFooter}>
										<button className={`${style.connectBtn} ${isLast ? style.finalConnectBtn : ""}`}
											onClick={() => handleConnect(service.id, service.template)}>
											{isSelected ? "Message Prefilled! 💬" : isLast ? "Let's Build Together 🚀" : "Start Project →"}
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Right Side: Big Sticky Text Section */}
				<div className={style.textSide}>
					<div className={style.stickyContent}>
						<span className={style.kicker}>SERVICES &amp; ARCHITECTURE</span>
						<h2 className={style.bigHeadline}>Collaborate <span>&amp; Build.</span></h2>
						<p className={style.headlineDesc}>Systems that feel alive. Bridging the gap between scalable full-stack engineering and cognitive experiences for high-impact web and mobile applications.</p>

						<div className={style.textHighlights}>
							<div className={style.highlightBox}>
								<span className={style.highlightNumber}>05</span>
								<span className={style.highlightLabel}>Core Capabilities</span>
							</div>
							<div className={style.highlightBox}>
								<span className={style.highlightNumber}>100%</span>
								<span className={style.highlightLabel}>Scale &amp; Performance</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

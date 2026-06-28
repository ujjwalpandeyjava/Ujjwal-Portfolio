import ContactMe from "@/components/contact/ContactMe";
import { Container } from "@mantine/core";
import { FaComments, FaDiagramProject } from "react-icons/fa6";
import { MdOutlineRocketLaunch, MdOutlineSupportAgent } from "react-icons/md";
import style from "@/styles/contact-page.module.scss";

const reasons = [
	{
		icon: MdOutlineRocketLaunch,
		title: "Starting something new",
		text: "If you need a landing page, portfolio, dashboard, or product experience that feels thoughtful from day one, we can map it out together.",
	},
	{
		icon: FaDiagramProject,
		title: "Improving an existing product",
		text: "Sometimes the next step is not a rebuild. It is clearer messaging, smoother interactions, and a cleaner flow that helps users move faster.",
	},
	{
		icon: MdOutlineSupportAgent,
		title: "Need help solving a problem",
		text: "If something feels stuck, messy, or hard to explain to users, I like untangling those details and turning them into a practical plan.",
	},
];

export default function ContactPage() {
	return (
		<div className={style.page}>
			<section className={style.heroSection}>
				<div className={style.heroContent}>
					<span className={style.kicker}>Contact</span>
					<h1>Let&apos;s make the next conversation useful.</h1>
					<p>
						If you have an idea, a challenge, or a product that needs a sharper experience, this is a good place to start.
						I usually respond best to clear goals, rough ideas, or even "I am not sure yet, but I know something is off."
					</p>

					<div className={style.heroPills}>
						<span>Collaborations</span>
						<span>Product fixes</span>
						<span>New builds</span>
					</div>
				</div>

				<div className={style.heroVisual} aria-hidden="true">
					<div className={style.heroVisualFrame}>
						<div className={style.heroVisualOverlay} />
						<div className={style.heroVisualText}>
							<FaComments />
							<strong>Open to ideas</strong>
							<span>Design, development, direction, and everything in between.</span>
						</div>
					</div>
				</div>
			</section>

			<section className={style.reasonsSection}>
				<Container size="xl" className={style.sectionInner}>
					<div className={style.sectionHeader}>
						<span className={style.sectionEyebrow}>Why people usually reach out</span>
						<h2>Good reasons to say hello</h2>
						<p>
							People reach out for different reasons, but it usually comes down to wanting clearer direction, better execution,
							or a website that actually feels alive and trustworthy.
						</p>
					</div>

					<div className={style.reasonGrid}>
						{reasons.map(({ icon: Icon, title, text }) => (
							<article key={title} className={style.reasonCard}>
								<div className={style.reasonIcon}>
									<Icon />
								</div>
								<h3>{title}</h3>
								<p>{text}</p>
							</article>
						))}
					</div>
				</Container>
			</section>

			<section className={style.contactSection}>
				<Container size="xl" className={style.sectionInner}>
					<div className={style.contactIntro}>
						<span className={style.sectionEyebrow}>Send a message</span>
						<h2>Use the form when you want a direct reply.</h2>
						<p>
							If you already know what you need, the form below is the fastest way to reach me. If you only have a rough
							idea, that&apos;s still enough to begin.
						</p>
					</div>

					<ContactMe showHeading={false} showIntro={true} showDecor={true} />
				</Container>
			</section>
		</div>
	);
}

import React, { Fragment, useEffect, useState } from "react";
import myPicture from '../images/1670752620885.jpg'
import VanillaTilt from "vanilla-tilt";
import tiltCustomStyle from '../tiltEffect/summaryTilt.module.css'
import EmailService from "../EmailService/EmailService";
import '../frag.css'
import '../tiltEffect/summaryTilt.css'

export default function SummaryTilt(props) {
	useEffect(() => {	// It will call every time the component is called or refreshed
		const card = document.querySelector(".card");
		const buttons = document.querySelectorAll(".card-buttons button");
		const sections = document.querySelectorAll(".card-section");
		VanillaTilt.init(document.querySelectorAll(".card"), {	// https://micku7zu.github.io/vanilla-tilt.js/  <-- Documentation
			max: 20,
			speed: 300
		});
		/* card.addEventListener("tiltChange", () => {
			console.log("Card moved");
		}); */
		card.addEventListener("mouseenter", (event) => {
			event.currentTarget.style.opacity = 1;
		});
		card.addEventListener("mouseleave", (event) => {
			// event.currentTarget.style.opacity = 0.5;
		});
		const handleButtonClick = e => {
			const targetSection = e.target.getAttribute("data-section");
			const section = document.querySelector(targetSection);	// #about	#experience		#contact
			targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
			card.setAttribute("data-state", targetSection);
			sections.forEach(s => s.classList.remove("is-active"));
			buttons.forEach(b => b.classList.remove("is-active"));
			e.target.classList.add("is-active");
			section.classList.add("is-active");
		};
		buttons.forEach(innerButton => {
			innerButton.addEventListener("click", handleButtonClick);
		});
	});

	const classesListOfClassList = {
		mainFrameClasses: [tiltCustomStyle.card, "card"]
	}

	const [emailModal, setEmailModal] = useState(false);
	const toggleEmailModal = () => {
		setEmailModal(!emailModal);
	}

	return (
		<Fragment >
			<div id="summarySection">
				<div className={classesListOfClassList.mainFrameClasses.join(" ")} data-state="#about" data-tilt >
					<div className="card-header">
						<div className="card-cover">
						</div>
						<img className="card-avatar"
							// src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
							src={myPicture}
							alt="avatar" />
						<h1 className="card-fullname">Ujjwal Pandey</h1>
						<h2 className="card-jobtitle">Full-Stack Developer</h2>
					</div>
					<div className="card-main">
						<div className="card-section is-active" id="about">
							<div className="card-content">
								<div className="card-subtitle">ABOUT</div>
								<p className="card-desc">
									Committed to staying up-to-date with the latest technologies and trends to provide the best solutions, with a broad range of skills enabling me to handle everything.
									<br />
									<b>Expertise in both front-end and back-end development.</b>
								</p>
							</div>
							<div className="card-social">
								<a href="https://www.facebook.com/ujjwal.pandey.1656">
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
									</svg></a>
								<a href="https://twitter.com/Ujjwalp13341664">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
									</svg>
								</a>
								<a href="https://www.instagram.com/pandey.ujjwalpandey/">
									<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
										<path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
										<path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
									</svg>
								</a>
								<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/">
									<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
									</svg>
								</a>
							</div>
						</div>
						<div className="card-section" id="experience">
							<div className="card-content">
								<div className="card-subtitle">WORK EXPERIENCE</div>
								<div className="card-timeline">
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Aug-21 <br />
											Sept-21
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">App ambassador at <span>Daily Brief</span></div>
											<div className="card-item-desc">Internship</div>
										</div>
									</div>
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Oct-21 <br />
											Jan-22
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Java Developer at <span>NetCreativeMind Sol.</span></div>
											<div className="card-item-desc">Trainee</div>
										</div>
									</div>
									<div className="card-item" data-year="2014">
										<div className="card-timeline-item-date">
											Feb-22 <br />
											Present
										</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Full Stack Developer at <span>SafetyLabs</span></div>
											<div className="card-item-desc">Front-end, Back-end, Salesforce, and <br /> Team-lead (without promotion)</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="card-section" id="contact">
							<div className="card-content">
								<div className="card-subtitle">CONTACT</div>
								<div className="card-contact-wrapper">
									<div className="card-contact">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
										Devli, South Delhi, New Delhi, 110080
									</div>
									<div className="card-contact">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path
												d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
										</svg>+91 8375-990-500
									</div>
									<div className="card-contact">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<path d="M22 6l-10 7L2 6" />
										</svg>
										{/* ujjwalpandey.aps@gmail.com */}
										<a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer">ujjwalpandey.aps@gmail.com</a>
									</div>
									<button className="contact-me" onClick={toggleEmailModal}>MESSAGE</button>
								</div>
							</div>
						</div>
						<div className="card-buttons button">
							<button data-section="#about" className="is-active">ABOUT</button>
							<button data-section="#experience">EXPERIENCE</button>
							<button data-section="#contact">CONTACT</button>
						</div>
					</div>
				</div>
			</div>
			{(emailModal) ? <EmailService person={{ name: 'Ujjwal Pandey', message: 'Contact me' }}
				emailModal={emailModal}
				onClick={() => toggleEmailModal} /> : ''}
		</Fragment >
	)
}
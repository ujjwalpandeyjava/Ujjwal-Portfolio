import { Fragment, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { email } from "../assets/Utilities";
import EmailService from "../EmailService/EmailService";
import myPicture from '../images/1670752620885.jpg';
import SocialIcons from "../utility/SocialIcons";
import './summaryTilt.css';
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";



export default function SummaryTilt() {
	const [emailModal, setEmailModal] = useState(false);


	useEffect(() => {
		const card = document.querySelector(".card");
		const buttons = document.querySelectorAll(".card-buttons button");
		const sections = document.querySelectorAll(".card-section");

		// https://micku7zu.github.io/vanilla-tilt.js
		VanillaTilt.init(document.querySelectorAll(".card"), { max: 20, speed: 300 })

		function handleSectionChange(e) {
			const targetSection = e.target.getAttribute("data-section");	// #about	#experience		#contact

			card.setAttribute("data-state", targetSection);
			sections.forEach(s => s.classList.remove("is-active"));
			buttons.forEach(b => b.classList.remove("is-active"));

			document.querySelector(targetSection)?.classList.add("is-active");
			e.target.classList.add("is-active");
		};
		buttons.forEach(innerButton => innerButton.addEventListener("click", handleSectionChange));
	}, []);


	return (
		<Fragment >
			<div id="summarySection" className="parallelBackgroundImage bg-Image2">

				<h1 className="sectionHeading blueHeading">Quick Rundown</h1>

				<div className="card" data-state="#about" data-tilt >
					{/* Card background */}
					<div className="card-header">
						<div className="card-cover"></div>
						<img className="card-avatar" src={myPicture} alt="avatar" />
						<h1 className="card-fullname">Ujjwal Pandey</h1>
						<h2 className="card-jobtitle">Java Full Stack + React Developer</h2>
					</div>

					<div className="card-main">
						{/* Tabs */}
						<div className="card-section is-active" id="about">
							<div className="card-content">
								<div className="card-subtitle">ABOUT</div>
								<p className="card-desc">
									Passionate about staying updated with the latest technologies and trends to deliver cutting-edge solutions. Equipped with a diverse skill set that enables me to manage projects end-to-end.
									<br />
									<br />
									<b>Proficient in both front-end and back-end web development.</b>
								</p>
							</div>
							<div className="card-social"><SocialIcons /></div>
						</div>
						<div className="card-section" id="experience_card">
							<div className="card-content">
								<div className="card-subtitle">WORK EXPERIENCE <sub>(3 year 8 months)</sub></div>
								<div className="card-timeline">

									<div className="card-item">
										<div className="card-timeline-item-date" title="8 month">June-2024 <br />Present</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Sr. Product Developer at <span>Intellylabs</span></div>
											<div className="card-item-desc">Web development and mobile development</div>
										</div>
									</div>

									<div className="card-item">
										<div className="card-timeline-item-date" title="2 year 4 months">Feb-2022 <br />May-2024</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Full Stack Developer at <span>SafetyLabs</span></div>
											<div className="card-item-desc"><b>Web development</b> with java, javascript, MySQL, MongoDB, HTML, CSS, and Salesforce</div>
										</div>
									</div>

									<div className="card-item">
										<div className="card-timeline-item-date" title="3 month">Nov-2021<br />Jan-2022</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Java Developer at <span>NetCreativeMind Sol.</span></div>
											<div className="card-item-desc">API management and UI development</div>
										</div>
									</div>

									<div className="card-item">
										<div className="card-timeline-item-date" title="6 month">May-2021<br />Oct-2021</div>
										<div className="card-timeline-item-detail">
											<div className="card-item-title">Front end Developer at <span>NIIT Developers</span></div>
											<div className="card-item-desc">Part-time, frontend developer while learning web development at NIIT</div>
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
										<CiLocationOn /> Devli, New Delhi, Delhi
									</div>
									<div className="card-contact">
										<FiPhoneCall />+91-8375-990-500
									</div>
									<div className="card-contact">
										<FaRegEnvelope /> <a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer">{email}</a>
									</div>
									<button className="directMessageBtn" onClick={() => setEmailModal(old => !old)}>DIRECT MESSAGE</button>
								</div>
							</div>
						</div>
						{/* Tab changer */}
						<div className="card-buttons button">
							<button data-section="#about" className="is-active">ABOUT</button>
							<button data-section="#experience_card">EXPERIENCE</button>
							<button data-section="#contact">CONTACT</button>
						</div>
					</div>

				</div>
			</div>
			{emailModal && <EmailService person={{ name: 'Ujjwal Pandey', message: 'Contact me' }} closeBtn={() => setEmailModal(old => !old)} />}
		</Fragment >
	)
}
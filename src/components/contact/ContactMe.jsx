"use client"; // Required for App Router

import style from "@/styles/contact.module.scss"; // Your existing styles
import { HeadingUnderLine } from "@/utils/Headings";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function ContactMe() {
	const [captchaToken, setCaptchaToken] = useState(null);
	const [loading, setLoading] = useState(false);
	const recaptchaRef = useRef(null);

	const handleCaptchaChange = (token) => {
		setCaptchaToken(token);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (!captchaToken) {
			alert("Please complete the captcha.");
			setLoading(false);
			return;
		}

		const formData = {
			name: e.target[0].value,
			email: e.target[1].value,
			message: e.target[2].value,
			token: captchaToken, // Send token to backend
		};

		try {
			// Create this API route (see Step 2 below)
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json();

			if (res.ok) {
				alert("Message sent successfully!");
				e.target.reset();
				recaptchaRef.current.reset(); // Reset captcha
				setCaptchaToken(null);
			} else {
				alert("Error: " + data.message);
			}
		} catch (error) {
			alert("Something went wrong.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={style.contactSection}>
			<HeadingUnderLine txt="Contact Me" />

			<div className={style.contactWrapper}>
				<div className={style.formCard}>
					<p className={style.formIntro}>If you have any questions, please don&apos;t hesitate to contact me.</p>

					<form className={style.contactForm} onSubmit={handleSubmit}>
						<div className={style.inputGroup}>
							<label>Your Name:</label>
							<input type="text" placeholder="Enter your name" required />
						</div>

						<div className={style.inputGroup}>
							<label>Your Email:</label>
							<input type="email" placeholder="Enter your email" required />
						</div>

						<div className={style.inputGroup}>
							<label>Your Message:</label>
							<textarea placeholder="Enter your message" rows={5} required></textarea>
						</div>

						{/* ReCAPTCHA Component */}
						<div className={style.recaptchaWrapper}>
							<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
						</div>
						{/* disabled={!captchaToken || loading} */}
						<button type="submit" className={style.sendBtn} >
							{loading ? "Sending..." : "Send Message"} <SiMinutemailer />
						</button>
					</form>
				</div>
				<div className={style.infoColumn}>
					<div className={style.infoBox}>
						<div className={style.infoItem}>
							<div className={style.iconCircle}><MdEmail /></div>
							<div className={style.infoText}>
								<span>Email</span>
								<a href="mailto:ujjwapandey.aps@gmail.com">ujjwapandey.aps@gmail.com</a>
							</div>
						</div>
						<div className={style.infoItem}>
							<div className={style.iconCircle}><MdPhone /></div>
							<div className={style.infoText}>
								<span>Phone</span>
								<a href="tel:+918375990500">+91 8375990500</a>
							</div>
						</div>
						<div className={style.infoItem}>
							<div className={style.iconCircle}><MdLocationOn /></div>
							<div className={style.infoText}>
								<span>Location</span>
								<p>Devoli, New Delhi, India, 110080</p>
							</div>
						</div>
					</div>
					<div className={style.socialRow}>
						<a href="#" className={style.socialIcon}><FaGithub /></a>
						<a href="#" className={style.socialIcon}><FaLinkedinIn /></a>
						<a href="#" className={style.socialIcon}><FaTwitter /></a>
						<a href="#" className={style.socialIcon}><FaFacebookF /></a>
					</div>
					<div className={style.verticalLine}>
						<span>CONTACT</span>
					</div>
				</div>
			</div>
		</div>
	);
}
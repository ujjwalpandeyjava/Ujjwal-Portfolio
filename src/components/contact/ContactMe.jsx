"use client";

import style from "@/styles/contact.module.scss";
import { MY_EMAIL_ID } from "@/utils/Constants";
import { HeadingUnderLine } from "@/utils/Headings";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default function ContactMe({ showHeading = true, showIntro = true, showDecor = true }) {
	const [pending, setPending] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = Object.fromEntries(new FormData(form));

		// Client-side quick verification
		const name = (formData.name || '').trim();
		const email = (formData.email || '').trim();
		const message = (formData.message || '').trim();

		if (!name || !email || !message) {
			notifications.show({
				title: 'Missing Details',
				message: 'Please complete all fields before sending.',
				color: 'red',
			});
			return;
		}

		if (name.length < 2) {
			notifications.show({
				title: 'Name Too Short',
				message: 'Please enter a valid name (at least 2 characters).',
				color: 'red',
			});
			return;
		}

		if (!EMAIL_REGEX.test(email)) {
			notifications.show({
				title: 'Invalid Email',
				message: 'Please enter a valid email address.',
				color: 'red',
			});
			return;
		}

		if (message.length < 5) {
			notifications.show({
				title: 'Message Too Short',
				message: 'Please provide a bit more detail in your message.',
				color: 'red',
			});
			return;
		}

		try {
			setPending(true);
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json().catch(() => ({}));

			if (res.ok && data.success) {
				notifications.show({
					title: 'Message Sent!',
					message: data.message || 'Thank you for reaching out. I will get back to you soon.',
					color: 'green',
				});
				form.reset();
			} else {
				notifications.show({
					title: 'Submission Failed',
					message: data.message || 'Unable to submit your message. Please try again.',
					color: 'red',
				});
			}
		} catch (error) {
			console.error("Submission error:", error);
			notifications.show({
				title: 'Network Error',
				message: 'Could not connect to the server. Please check your internet connection.',
				color: 'red',
			});
		} finally {
			setPending(false);
		}
	};

	return (
		<div className={style.contactSection}>
			{showHeading && <HeadingUnderLine txt="Contact Me" />}

			<div className={style.contactWrapper}>
				<div className={style.formCard}>
					{showIntro && <p className={style.formIntro}>If you have any questions, please don&apos;t hesitate to contact me.</p>}
					<form className={style.contactForm} onSubmit={handleSubmit} >
						{/* Honeypot field hidden from real humans to catch automated bot spammers */}
						<div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
							<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="contact-name">Your Name:</label>
							<input id="contact-name" name="name" type="text" placeholder="Enter your name" required minLength={2} maxLength={100} />
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="contact-email">Your Email:</label>
							<input id="contact-email" name="email" type="email" placeholder="Enter your email" required maxLength={150} />
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="contact-message">Your Message:</label>
							<textarea id="contact-message" name="message" placeholder="Enter your message" rows={5} required minLength={5} maxLength={3000}></textarea>
						</div>

						<button type="submit" className={style.sendBtn} disabled={pending}>
							{pending ? "Sending..." : "Send Message"} <SiMinutemailer />
						</button>
					</form>
				</div>
				<div className={style.infoColumn}>
					<div className={style.infoBox}>
						<div className={style.infoItem}>
							<div className={style.iconCircle}><MdEmail /></div>
							<div className={style.infoText}>
								<span>Email</span>
								<a href={`mailto:${MY_EMAIL_ID}`}>{MY_EMAIL_ID}</a>
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
								<p>Devli, New Delhi, India, 110080</p>
							</div>
						</div>
					</div>
					<div className={style.socialRow}>
						<a href="https://github.com/ujjwalpandeyjava" target="_blank" rel="noreferrer" className={style.socialIcon}><FaGithub /></a>
						<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noreferrer" className={style.socialIcon}><FaLinkedinIn /></a>
						<a href="https://instagram.com/ujjwal__pandeyy" target="_blank" rel="noreferrer" className={style.socialIcon}><FaInstagram /></a>
						<a href="https://wa.me/918375990500" target="_blank" rel="noreferrer" className={style.socialIcon}><FaWhatsapp /></a>
					</div>
					{showDecor && <div className={style.verticalLine}>CONTACT</div>}
				</div>
			</div>
		</div>
	);
}

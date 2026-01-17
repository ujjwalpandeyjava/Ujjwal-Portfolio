import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from 'react-toastify';
import { email } from '../assets/Utilities';
import EmailServiceStyle from './EmailService.module.css';


export default function EmailService({ closeBtn }) {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		if (!e.target.from_name.value) {
			toast('Name cannot be empty', { icon: '🐼' });
		} else if (!e.target.user_email.value) {
			toast("Please add email/contact number, to connect back", { icon: '🏢📧' })
		} else if (!e.target.message.value) {
			toast('Please add discussion topic', { icon: '💬' })
		} else {
			toast.promise(
				emailjs.send("service_xgcf3lg", "template_wsittxt",
					{
						from_name: e.target.from_name.value,
						user_email: e.target.user_email.value,
						company_name: e.target.company_name.value,
						message: e.target.message.value
					}, "fuTN9NgqZc0mVDzjh")
					.then(result => {
						console.log(result);
						setTimeout(() => {
							closeBtn();
						}, 200);
					}, (error) => {
						throw Error("Error: " + error.text);
					}),
				{
					loading: 'Sending message...',
					success: <b>Message sent successfully!</b>,
					error: <p>Unable to send, please mail at <br /> <b>{email}</b></p>,
				});
			e.target.reset();
		}
	};
	const inputFieldChanged = (event) => event.target.dataset.valued = event.target.value;



	return (
		<div className={EmailServiceStyle.coverFullScreen}>
			<div className={EmailServiceStyle.emailServiceSection}>
				<div className={EmailServiceStyle.emailService_header}>
					<h1>Let's work</h1>
					<center>Drop detail about project, I will get back to you soon</center>
					<button className={EmailServiceStyle.closeButton} onClick={closeBtn}>X</button>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<div>
						<div className={EmailServiceStyle.inputLabel}>Full Name <span className={EmailServiceStyle.required}>*</span></div>
						<input className={EmailServiceStyle.inputField} placeholder="Ujjwal pandey" type="text" name="from_name" data-valued="false" onChange={inputFieldChanged} autoFocus={true} />
					</div>
					<div>
						<div className={EmailServiceStyle.inputLabel}>Email <span className={EmailServiceStyle.required}>*</span></div>
						<input className={EmailServiceStyle.inputField} placeholder="I will reply you on this email" type="email" name="user_email" data-valued="false" onChange={inputFieldChanged} />
					</div>
					<div>
						<div className={EmailServiceStyle.inputLabel}>Company <i>(optional)</i></div>
						<input className={EmailServiceStyle.inputField} placeholder="Org/personal work place" type="text" name="company_name" data-valued="false" onChange={inputFieldChanged} />
					</div>
					<div>
						<div className={EmailServiceStyle.inputLabel}>What would like to discuss? <span className={EmailServiceStyle.required}>*</span></div>
						<textarea className={EmailServiceStyle.inputField} rows="7" onFocus={e => e.target.select()}
							placeholder="Ujjwal, I am amazed by your skills, Let me know when are you available for an interview."
							defaultValue={"Ujjwal, I am amazed by your skills, Let me know when are you available for an interview."}
							name="message" data-valued="false" onChange={inputFieldChanged} />
					</div>
					<input type="submit" className={EmailServiceStyle.submitButton} value="Drop message" />
				</form>
			</div>
		</div>)
}
import React, { useRef } from "react";
import EmailServiceStyle from '../EmailService/EmailService.module.css'
import emailjs from '@emailjs/browser';

export default function EmailService(props) {
	console.log(props);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.send("service_xgcf3lg", "template_wsittxt", {
			from_name: e.target.from_name.value,
			user_email: e.target.user_email.value,
			company_name: e.target.company_name.value,
			message: e.target.message.value
		}, "fuTN9NgqZc0mVDzjh").then((result) => {
			console.log("Mail sent successfully");
			console.log(result.text);
		}, (error) => {
			console.log("Error in sending mail");
			console.log(error.text);
		});
		e.target.reset();
	};

	return (
		<React.Fragment>
			<div className={EmailServiceStyle.head}>
				<div className="emailService-header">
					Invite with mail
					<span className={EmailServiceStyle.closeButton} onClick={props.onClick()}> X </span>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<div>
						<label>Name</label>
						<input placeholder="dd" type="text" name="from_name" />
					</div>
					<div>
						<label>Email</label>
						<input placeholder="dd" type="email" name="user_email" />
					</div>
					<div>
						<label>Company</label>
						<textarea placeholder="dd" name="company_name" />
					</div>
					<div>
						<label>Message</label>
						<textarea placeholder="dd" name="message" />
					</div>
					<input type="submit" value="Send" />
				</form>
				<div>
					<hr />
					<button>Let's Ping </button>
				</div>
			</div>
		</React.Fragment>
	)
}
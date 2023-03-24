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
	const inputFieldChanged = (event) => {
		event.target.dataset.valued = (event.target.value) ? true : false;
	}

	return (
		<React.Fragment>
			<div className={EmailServiceStyle.headSection}>
				<div className={EmailServiceStyle.emailService_header}>
					<h2>Feel free, to drop me a message!</h2>
					<span className={EmailServiceStyle.closeButton} onClick={props.onClick()}> X </span>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<div>
						<input className={EmailServiceStyle.inputField} placeholder="4" type="text" name="from_name" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Name</div>
					</div>
					<div>
						<input className={EmailServiceStyle.inputField} placeholder="dd" type="email" name="user_email" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Email</div>
					</div>
					<div>
						<textarea className={EmailServiceStyle.inputField} placeholder="dd" name="company_name" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Company</div>
					</div>
					<div>
						<textarea className={EmailServiceStyle.inputField} placeholder="dd" name="message" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Message</div>
					</div>
					<input type="submit" value="Drop message" />
				</form>
			</div>
		</React.Fragment>
	)
}
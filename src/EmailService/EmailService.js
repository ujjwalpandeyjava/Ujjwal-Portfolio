import React, { useRef } from "react";
import EmailServiceStyle from '../EmailService/EmailService.module.css'
import emailjs from '@emailjs/browser';
import DropNotification from "../DropNotification/DropNotification";

export default function EmailService(props) {
	const form = useRef();
	let not_List = []
	const sendEmail = (e) => {
		e.preventDefault();
		//	First try "react-toastify" before making own DropNotification

		//	Find a way to dynamically add the notification component on the DOM
		let notAcceptedValues = ['', undefined, " "];
		if (notAcceptedValues.includes(e.target.from_name.value)) {
			console.log("inside name");
			alert("Please Add name");
			// <DropNotification notification_Message={'Add Your name'} />
		} else if (notAcceptedValues.includes(e.target.user_email.value)) {
			console.log("inside email");
			alert("Please add email");
			// <DropNotification notification_Message="Add email" />
		} else if (notAcceptedValues.includes(e.target.message.value)) {
			console.log("Add message");
			alert("Please add some message");
			// <DropNotification notification_Message="Add message" />
		} else {
			console.log("Sending mail");
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
		}
	};
	const inputFieldChanged = (event) => {
		event.target.dataset.valued = (event.target.value) ? true : false;
	}

	return (
		<React.Fragment>
			<div className={EmailServiceStyle.headSection}>
				<div className={EmailServiceStyle.emailService_header}>
					<h2>Feel free, to drop message!</h2>
					<span className={EmailServiceStyle.closeButton} onClick={props.onClick()}> X </span>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<div>
						<input className={EmailServiceStyle.inputField} placeholder="Name" type="text" name="from_name" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Name</div>
					</div>
					<div>
						<input className={EmailServiceStyle.inputField} placeholder="Pandey Ji will reply here" type="email" name="user_email" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Email</div>
					</div>
					<div>
						<textarea className={EmailServiceStyle.inputField} placeholder="Org name" name="company_name" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Company</div>
					</div>
					<div>
						<textarea className={EmailServiceStyle.inputField} placeholder="Message for Pandey Ji" name="message" data-valued="false" onChange={inputFieldChanged} />
						<div className={EmailServiceStyle.inputLabel}>Message</div>
					</div>
					<input type="submit" value="Drop message" />
				</form>
				{not_List.join("")}
			</div>
		</React.Fragment>
	)
}
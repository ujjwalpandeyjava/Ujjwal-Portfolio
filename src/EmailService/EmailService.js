import React, { useRef } from "react";
import EmailServiceStyle from '../EmailService/EmailService.module.css'
import emailjs from '@emailjs/browser';
// import DropNotification from "../DropNotification/DropNotification";

export default function EmailService(props) {
	const form = useRef();
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
	const listOfClassList = {
		headSectionList: [EmailServiceStyle.emailServiceSection]
	}
	console.log(listOfClassList);
	return (
		<React.Fragment>
			<div className={EmailServiceStyle.coverFullScreen}>
				<div className={listOfClassList.headSectionList.join(" ")}>
					<div className={EmailServiceStyle.emailService_header}>
						{/* <h2>Feel free, to drop message!</h2> */}
						<h1>Let's work together!</h1>
						<span className={EmailServiceStyle.closeButton} onClick={props.onClick()}> X </span>
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<div>
							<div className={EmailServiceStyle.inputLabel}>Full Name</div>
							<input className={EmailServiceStyle.inputField} placeholder="First + Last name" type="text" name="from_name" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<div>
							<div className={EmailServiceStyle.inputLabel}>Email</div>
							<input className={EmailServiceStyle.inputField} placeholder="Pandey Ji will reply here" type="email" name="user_email" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<div>
							<div className={EmailServiceStyle.inputLabel}>Company</div>
							<input className={EmailServiceStyle.inputField} placeholder="Org/personal work place" type="text" name="company_name" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<div>
							<div className={EmailServiceStyle.inputLabel}>What would like to discuss?</div>
							<textarea className={EmailServiceStyle.inputField} rows="5" placeholder="Pandey Ji, we cordially invite you to join us for an interview and share your valuable insights." name="message" data-valued="false" onChange={inputFieldChanged} />
						</div>
						<input type="submit" className={EmailServiceStyle.submitButton} value="Drop message" />
					</form>
				</div>
			</div>
		</React.Fragment>
	)
}
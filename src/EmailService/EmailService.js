import React from "react";
import EmailServiceStyle from '../EmailService/EmailService.module.css'

export default function EmailService(props) {
	console.log(props);
	return (
		<React.Fragment>
			<div className={EmailServiceStyle.head}>
				<div className="emailService-header">
					Heading
					<span className={EmailServiceStyle.closeButton} onClick={props.onClick()}> X </span>
				</div>
				<div>
					toggleEmailModal - Email Modal: {props.emailModal.toString()}
				</div>
				<div>
					<hr />
					<button>Let's Ping </button>
				</div>
			</div>
		</React.Fragment>
	)
}
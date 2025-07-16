// https://techouts.com/ --  use this link for UI development


import { IoCall, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaRegAddressCard } from "react-icons/fa";
import EmailService from "../EmailService/EmailService";
import { useState } from "react";
import contactPic from '../images/contact.png';
import { email } from "../assets/Utilities";
import './contactMe.scss';



export default function ContactMe() {
	const [emailModal, setEmailModal] = useState(false);
	const toggleEmailModal = () => { setEmailModal(previous => !previous); }



	return (
		<div id="contactMeSection">

			<h2 className="sectionHeading">Let's Discuss Requirements</h2>

			<div id="firstInContactMe">
				<div><img src={contactPic} alt="That's me with certificate" /></div>
				<div id="connect">
					<div className="connect-title">Contact through</div>
					<div className="connect-ways">
						<div>
							<div className="alignIconText"><IoMail /><a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer"> {email}</a></div>
							<a href="mailto:ujjwalpandey.aps@gamil.com" target="_blank" rel="noopener noreferrer"><RxOpenInNewWindow /></a>
						</div>
						<div>
							<div className="alignIconText"><IoCall /><a href="tel:+918375990500">+91-8375-990-500</a></div>
							<a href="tel:+918375990500"><RxOpenInNewWindow /></a>
						</div>
						<div>
							<div className="alignIconText"><IoLogoLinkedin /><a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer">Ujjwal Pandey</a></div>
							<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer"> <RxOpenInNewWindow /></a>
						</div>
						<address>
							<div className="alignIconText"><FaRegAddressCard /> <span>Devli, South Delhi, New Delhi</span></div>
						</address>
					</div>

					<div className="connect-directMail">
						<button className="directMessageBtn" onClick={toggleEmailModal}>DIRECT MESSAGE</button>
						{emailModal && <EmailService person={{ name: 'Ujjwal Pandey', message: 'Contact me' }} closeBtn={toggleEmailModal} />}
					</div>

				</div>

			</div>

		</div>
	)
}
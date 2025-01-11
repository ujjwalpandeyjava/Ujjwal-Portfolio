import { FaEnvelope, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import style from './ConnectView.module.css';


export default function ConnectView() {
	return (
		<div id={style.connectMain}>
			<div className={style.socialIcons}>
				<div className={style.emptyTop}></div>
				<a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjwalpandeyjava"><FaGithub color="black" size="1.3rem" /></a>
				<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/"><IoLogoLinkedin color="#3869e5" size="1.3rem" /></a>
				<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/ujjwal__pandeyy"><FaInstagramSquare color="orangered" size="1.3rem" /></a>
				<a href="mailto:ujjwalpandey.aps@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope color="#320614" size="1.3rem" /></a>
				<div className={style.lineBottom}></div>
			</div>
			<div className={style.contactEmail}>
				<div className={style.emptyTop}></div>
				<div className={style.e_mailContainer}>
					<div className={style.e_mail}>ujjwalpandey.aps@gmail.com</div>
				</div>
				<div className={style.lineBottom2}></div>
			</div>
		</div>
	)
}
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";
import connectCSS from './ConnectView.module.css';

export default function ConnectView() {
	return (
		<div id={connectCSS.connectMain}>
			<div className={[connectCSS.socialIcons].join(" ")}>
				<div className={connectCSS.emptyTop}></div>
				<Link to="/github"><FaGithub color="black" size="1.3rem" /></Link>
				<Link to="/fb"><FaFacebook color="black" size="1.3rem" /></Link>
				<Link to="/twitter"><FaXTwitter color="black" size="1.3rem" /></Link>
				<Link to="/instagram"><FaInstagramSquare color="black" size="1.3rem" /></Link>
				<Link to="/linkedin"><IoLogoLinkedin color="black" size="1.3rem" /></Link>
				<div className={connectCSS.lineBottom}></div>
			</div>
			<div className={[connectCSS.contactEmail].join(" ")}>
				<div className={connectCSS.emptyTop}></div>
				<div className={connectCSS.e_mailContainer}>
					<div className={connectCSS.e_mail}>ujjwalpandey.aps@gmail.com</div>
				</div>
				<div className={connectCSS.lineBottom2}></div>
			</div>
		</div>
	)
}
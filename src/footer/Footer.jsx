import { FaEnvelope, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { email } from "../assets/Utilities";
import { Link } from "react-router-dom";
import styles from "./Footer.scss";


const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="footerSections">
					<div className="footerSubHeading">Social Links</div>
					<Link to="https://github.com/ujjwalpandeyjava" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</Link>
					<Link to="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</Link>
					<Link to="https://www.instagram.com/ujjwal__pandeyy" rel="noopener noreferrer" target="_blank" className={styles.link}>Instagram</Link>
					<Link to={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className={styles.link}>Email</Link>
				</div>
				<div className="footerSections">
					<div className="footerSubHeading">Navigation</div>
					<Link className={styles.link} to="/">Home</Link>
					<Link className={styles.link} to="./skills_projects">Skills and Projects Repos</Link>
					<Link className={styles.link} to="./rundown">Summary</Link>
					<Link className={styles.link} to="./resume">Resume</Link>
					<Link className={styles.link} to="./contact">Contact</Link>
				</div>
				<div className="footerSections socialIcons">
					<div className="emptyTop"></div>
					<a rel="noopener noreferrer" target="_blank" href="https://github.com/ujjwalpandeyjava"><FaGithub color="black" size="1.3rem" /></a>
					<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/"><IoLogoLinkedin color="#3869e5" size="1.3rem" /></a>
					<a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/ujjwal__pandeyy"><FaInstagramSquare color="orangered" size="1.3rem" /></a>
					<a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><FaEnvelope color="#320614" size="1.3rem" /></a>
					<div className="lineBottom"></div>
				</div>
			</div>
			<div className="footerBottomSections">
				<div className="footerSubHeading">Disclaimer</div>
				©{new Date().getFullYear()} All Rights Reserved to Ujjwal Pandey
			</div>
		</footer>
	);
};
export default Footer;
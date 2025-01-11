import { Link } from "react-router-dom";
import styles from "./Footer.module.css";


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p className={styles.text}>© {new Date().getFullYear()} Ujjwal Pandey. All Rights Reserved.</p>
				<div className={styles.socialLinks}>
					<a href="https://github.com/ujjwalpandeyjava" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
					<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
					<a href="https://www.instagram.com/ujjwal__pandeyy" rel="noopener noreferrer" target="_blank" className={styles.link}>Instagram</a>
					<a href="mailto:ujjwalpandey.aps@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Email</a>
					<Link className={styles.link} to="./contact">Contact</Link>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
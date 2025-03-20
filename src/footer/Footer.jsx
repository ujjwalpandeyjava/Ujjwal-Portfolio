import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { email } from "../assets/Utilities";


const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Link to="https://github.com/ujjwalpandeyjava" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</Link>
				<Link href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</Link>
				<Link href="https://www.instagram.com/ujjwal__pandeyy" rel="noopener noreferrer" target="_blank" className={styles.link}>Instagram</Link>
				<Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className={styles.link}>Email</Link>
				<br />
				<br />
				<Link className={styles.link} to="/">Home</Link>
				<Link className={styles.link} to="./skills_projects">Skills and Projects Repos</Link>
				<Link className={styles.link} to="./rundown">Summary</Link>
				<Link className={styles.link} to="./resume">Resume</Link>
				<Link className={styles.link} to="./contact">Contact</Link>
			</div>
			<hr style={{ marginBlock: "0.35rem", borderColor: "#515151" }} />
			<p>©{new Date().getFullYear()} Ujjwal Pandey. All Rights Reserved to the Ujjwal Pandey.</p>
		</footer>
	);
};
export default Footer;
import useDocumentTitle from '../assets/useDocumentTitle';
import ContactMe from './contactMe';
import connectImg from './doItTogether.svg';
import styles from './ContactMePage.module.css';


function ContactMePage() {
	useDocumentTitle("Contact with Ujjwal Pandey")


	return (
		<>
			<h1 className={styles.sectionTitle}>Hire Me</h1>
			<img src={connectImg} style={{ maxHeight: "45vh", margin: 'auto', display: 'block' }} alt='Connect me' />
			<ContactMe />
		</>
	)
}
export default ContactMePage;
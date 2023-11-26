import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import ujjwalIcon from '../images/ujjwalAvatar3.png';
import navbarCSS from './Navbar.module.css';

export default function Navbar(props) {
	const [floatNav, setFloatNav] = useState(false);
	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => { setFloatNav(window.scrollY > 40) };
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const currentUrl = useLocation().pathname;
	const isActive = (event, passedUrl) => {
		if (currentUrl === passedUrl)
			toast("Already at " + event.currentTarget.textContent,
				{
					icon: '🏢',
					style: {
						borderRadius: '10px',
						background: '#ff9966',
						color: 'white',
						padding: '1px'
					}
				}
			);
	}
	return (
		<div className={[navbarCSS.navbar, (floatNav) ? navbarCSS.floatingNav : ""].join(" ")} id={navbarCSS.navbar}>
			<img id={navbarCSS.navIcon} src={ujjwalIcon} alt="It's me, on home" />
			<div className={navbarCSS.noHamburger}>
				<NavLink to="/" onClick={(event) => isActive(event, "/")}>Home</NavLink>
				<NavLink to="/error" onClick={(event) => isActive(event, "/error")}>About</NavLink>
				<NavLink to="experience" onClick={(event) => isActive(event, "experience")}>Experience</NavLink>
				<NavLink to="skills" onClick={(event) => isActive(event, "skills")}>Skills</NavLink>
				<NavLink to="contactMeSection" onClick={(event) => isActive(event, "contactMeSection")}>Contact</NavLink>
				<NavLink to="summarySection" onClick={(event) => isActive(event, "summarySection")}>Summary</NavLink>
			</div>
			<div className={navbarCSS.hamburger}>
				{showSmallScreenMenu ?
					<div className={[navbarCSS.sidebar, navbarCSS.move].join(" ")} onClick={() => setShowSmallScreenMenu(false)}>
						<NavLink to="/" onClick={(event) => isActive(event, "/")}>Home</NavLink>
						<NavLink to="/error" onClick={(event) => isActive(event, "/error")}>About</NavLink>
						<NavLink to="/experience" onClick={(event) => isActive(event, "/experience")}>Experience</NavLink>
						<NavLink to="/skills" onClick={(event) => isActive(event, "/skills")}>Skills</NavLink>
						<NavLink to="/contactMeSection" onClick={(event) => isActive(event, "/contactMeSection")}>Contact</NavLink>
						<NavLink to="/summarySection" onClick={(event) => isActive(event, "/summarySection")}>Summary</NavLink>
					</div> : "Nothing"}
				{showSmallScreenMenu ? <FaWindowClose size={30} onClick={() => setShowSmallScreenMenu(false)} /> : <BiSolidBarChartAlt2 className={navbarCSS.rotate90} size={30} onClick={() => setShowSmallScreenMenu(true)} />}
			</div>
		</div>
	)
}
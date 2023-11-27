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
					icon: '📃🕸️',
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
			<NavLink to="/" onClick={(event) => isActive(event, "/")}><img id={navbarCSS.navIcon} src={ujjwalIcon} alt="It's me, on home" /></NavLink>
			<div className={navbarCSS.noHamburger}>
				<NavLink to="/" onClick={(event) => isActive(event, "/")}>Home</NavLink>
				<NavLink to="/experience" onClick={(event) => isActive(event, "/experience")}>Experience</NavLink>
				<NavLink to="/skills_projects" onClick={(event) => isActive(event, "/skills_projects")}>ShowCase</NavLink>
				<NavLink to="/blog" onClick={(event) => isActive(event, "/blog")}>Blog</NavLink>
				<NavLink to="/contact" onClick={(event) => isActive(event, "/contact")}>Contact</NavLink>
			</div>
			<div className={navbarCSS.hamburger}>
				{showSmallScreenMenu ?
					<div className={[navbarCSS.sidebar, navbarCSS.move].join(" ")} onClick={() => setShowSmallScreenMenu(false)}>
						<NavLink to="/" onClick={(event) => isActive(event, "/")}>Home</NavLink>
						<NavLink to="/experience" onClick={(event) => isActive(event, "/experience")}>Experience</NavLink>
						<NavLink to="/skills_projects" onClick={(event) => isActive(event, "/skills_projects")}>ShowCase</NavLink>
						<NavLink to="/blog" onClick={(event) => isActive(event, "/blog")}>Blog</NavLink>
						<NavLink to="/contact" onClick={(event) => isActive(event, "/contact")}>Contact</NavLink>
					</div> : null}
				{showSmallScreenMenu ? <FaWindowClose size={30} onClick={() => setShowSmallScreenMenu(false)} /> : <BiSolidBarChartAlt2 className={navbarCSS.rotate90} size={30} onClick={() => setShowSmallScreenMenu(true)} />}
			</div>
		</div>
	)
}
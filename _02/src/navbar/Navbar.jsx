import { useEffect, useState } from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { FaHome, FaWindowClose } from 'react-icons/fa';
import { RiFilePaper2Line } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { SiComposer } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import ujjwalIcon from '../images/ujjwalAvatar3.png';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';


export default function Navbar() {
	const [floatNav, setFloatNav] = useState(false);
	const [showSidebar, setShowSidebar] = useState(true)

	const toggleShowSidebar = () => setShowSidebar(old => !old)
	const linkClicked = () => toggleShowSidebar()


	// Let the navbar float when scrolled
	useEffect(() => {
		const handleScroll = () => {
			setFloatNav(window.scrollY > 80)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, []);


	return (
		<>
			<div id={style.navbar} className={floatNav ? style.floatingNav : ""} >
				<BiSolidBarChartAlt2 className={style.action} size="2.45rem" onClick={toggleShowSidebar} />
				<Link to="/"><img id={style.navIcon} src={ujjwalIcon} alt="It's me, on home" /></Link>
			</div>

			<div className={`${style.sideBar} ${showSidebar && style.hideSidebar}`}>
				<div className={style.actions}>
					<div className="myName">Ujjwal Pandey</div>
					<FaWindowClose className={style.action} size="2rem" onClick={toggleShowSidebar} />
				</div>
				<Link className={style.links} onClick={linkClicked} to="/"><FaHome />Home</Link>
				<Link className={style.links} onClick={linkClicked} to="./resume"><RiFilePaper2Line />Resume</Link>
				<Link className={style.links} onClick={linkClicked} to="./skills_projects"><SiComposer />Work & Certificates</Link>
				<Link className={style.links} onClick={linkClicked} to="./rundown"><GiSkills />Quick Rundown</Link>
				<Link className={style.links} onClick={linkClicked} to="./contact"><MdContacts />Contact</Link>
			</div>
		</>
	)
}
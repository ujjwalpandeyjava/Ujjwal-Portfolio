import { useEffect, useState } from 'react';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { isMobileDevice } from '../assets/Utilities';
import ujjwalIcon from '../images/ujjwalAvatar3.png';
import style from './Navbar.module.css';


export default function Navbar() {
	const [floatNav, setFloatNav] = useState(false);
	const [showSidebar, setShowSidebar] = useState(true)

	const toggleShowSidebar = () => setShowSidebar(old => !old)
	const linkClicked = () => toggleShowSidebar()


	// Let the navbar float when scrolled
	useEffect(() => {
		const handleScroll = () => { setFloatNav(window.scrollY > 80) }

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, []);


	return (
		<>
			<div id={style.navbar} className={floatNav && style.floatingNav} >
				<BiSolidBarChartAlt2 className={style.action} size="2.45rem" onClick={toggleShowSidebar} />
				<Link to="/"><img id={style.navIcon} src={ujjwalIcon} alt="It's me, on home" /></Link>
			</div>

			<div className={`${style.sideBar} ${showSidebar && style.hideSidebar}`}>
				<div className={style.actions}>
					<div className="myName">Ujjwal Pandey</div>
					<FaWindowClose className={style.action} size="2rem" onClick={toggleShowSidebar} />
				</div>
				<Link className={style.links} onClick={linkClicked} to="">Home</Link>
				<Link className={style.links} onClick={linkClicked} to="./skills_projects">ShowCase</Link>
				<Link className={style.links} onClick={linkClicked} to="./contact">Contact</Link>
				{!isMobileDevice() && <Link className={style.links} onClick={linkClicked} to="./summary">Summary</Link>}
			</div>
		</>
	)
}
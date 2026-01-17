'use client';

import { navLinks } from '@/components/Constants';
import DonateUs from '@/components/DonateUs'; // Import your component
import SiteLogo from '@/components/navbar/SiteLogo';
import "@/styles/navbar.scss";
import { Button, Flex, Modal } from '@mantine/core';
import { useDisclosure, useResizeObserver } from '@mantine/hooks';
import Link from 'next/link';
import { useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
	const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);
	const [navbarSize, reactNavbarSize] = useResizeObserver();
	const isMobile = reactNavbarSize.width <= 968;

	return (
		<>
			<Modal opened={opened} onClose={closeModal} centered size="md" radius="lg" withCloseButton={false} padding={0}><DonateUs callBackFun={closeModal} /></Modal>
			<div ref={navbarSize} className='widthCheck'></div>
			{!isMobile ? <DesktopNav openModal={openModal} /> : <MobileNav openModal={openModal} />}
		</>
	)
}
const DesktopNav = ({ openModal }) => {
	return (
		<div className="desktopNav">
			<SiteLogo />
			<Flex className="" align="center" gap="lg">
				{navLinks.map(({ link, label, icon: Icon, showIcon }) => (showIcon && <Link key={link} href={link} className="navLink"><Icon size={18} /><span>{label}</span></Link>))}
				<Button variant="light" color="pink" leftSection={<IoHeart size={16} />} radius="xl" onClick={openModal}>Give Coffee</Button>
			</Flex>
		</div>
	);
};
const MobileNav = ({ openModal }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className='mobileNavHeader'>
				<SiteLogo />
				<RxHamburgerMenu size={28} className="mobileNavIcon" onClick={() => setOpen(true)} />
			</div>
			{open && <div className="menuOverlay" onClick={() => setOpen(false)} />}

			<aside id="mobileSidebar" className={open ? "open" : ""}>
				<div className="sidebarHeader">
					<SiteLogo />
					<RxCross2 size={28} onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} />
				</div>

				<nav className="mobileLinks">
					{navLinks.map(({ link, label, icon: Icon }) =>
						<Link key={link} href={link} className="mobile-nav-item" onClick={() => setOpen(false)}>
							<Icon size={20} />
							<span>{label}</span>
						</Link>)}
				</nav>

				<div className="mobile-action-area">
					<Button fullWidth leftSection={<IoHeart />} color="pink" radius="md" size="md" onClick={() => { openModal(); setOpen(false); }}>Give Coffee</Button>
				</div>
			</aside>
		</>
	);
};
export { DesktopNav, MobileNav, Navbar };

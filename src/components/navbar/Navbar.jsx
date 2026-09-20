'use client';

import { navLinks } from '@/utils/Constants';
import DonateUs from '@/components/DonateUs';
import SiteLogo from '@/components/navbar/SiteLogo';
import "@/styles/navbar.scss";
import { Button, Flex, Modal, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { FiSun, FiMoon } from "react-icons/fi";

const scrollThreshold = 24;

const Navbar = () => {
	const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateState = () => {
			setIsScrolled(window.scrollY > scrollThreshold);
			setIsMobile(window.innerWidth <= 968);
		};

		updateState();
		window.addEventListener('scroll', updateState, { passive: true });
		window.addEventListener('resize', updateState);

		return () => {
			window.removeEventListener('scroll', updateState);
			window.removeEventListener('resize', updateState);
		};
	}, []);

	return (
		<>
			<Modal opened={opened} onClose={closeModal} centered size="md" radius="lg" withCloseButton={false} padding={0}>
				<DonateUs callBackFun={closeModal} />
			</Modal>

			{!isMobile ? (
				<DesktopNav isScrolled={isScrolled} openModal={openModal} />
			) : (
				<MobileNav isScrolled={isScrolled} openModal={openModal} />
			)}
		</>
	);
};

const DesktopNav = ({ isScrolled, openModal }) => {
	const navClassName = isScrolled ? 'desktopNav desktopNav--floating' : 'desktopNav desktopNav--top';
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<div className="desktopNavShell">
			<div className={navClassName}>
				<SiteLogo />
				<Flex align="center" gap="xs" className="desktopNavLinks">
					{navLinks.map(({ link, label, icon: Icon, showIcon }) => (
						showIcon && <Link key={link} href={link} className="navLink">
							<Icon size={18} />
							<span>{label}</span>
						</Link>))}
					<ActionIcon 
						variant="default" 
						size="lg" 
						radius="xl" 
						onClick={() => toggleColorScheme()}
						title="Toggle color scheme"
						style={{ marginLeft: '10px' }}
					>
						{colorScheme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
					</ActionIcon>
				</Flex>
			</div>
		</div>
	);
};

const MobileNav = ({ isScrolled, openModal }) => {
	const [open, setOpen] = useState(false);
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<>
			<div className={isScrolled ? 'mobileNavHeader mobileNavHeader--floating' : 'mobileNavHeader mobileNavHeader--top'}>
				<SiteLogo />
				<div className="mobileNavActions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
					<ActionIcon 
						variant="default" 
						size="lg" 
						radius="xl" 
						onClick={() => toggleColorScheme()}
					>
						{colorScheme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
					</ActionIcon>
					<RxHamburgerMenu size={28} className="mobileNavIcon" onClick={() => setOpen(true)} />
				</div>
			</div>

			{open && (
				<div className="menuOverlay" onClick={() => setOpen(false)}>
					<aside id="mobileSidebar" className={open ? "open" : ""} onClick={(e) => e.stopPropagation()}>
						<div className="sidebarHeader">
							<SiteLogo />
							<RxCross2 size={28} onClick={() => setOpen(false)} style={{ cursor: 'pointer' }} />
						</div>

						<nav className="mobileLinks">
							{navLinks.map(({ link, label, icon: Icon }) => (
								<Link key={link} href={link} className="mobile-nav-item" onClick={() => setOpen(false)}>
									<Icon size={20} />
									<span>{label}</span>
								</Link>
							))}
						</nav>
					</aside>
				</div>
			)}
		</>
	);
};

export { DesktopNav, MobileNav, Navbar };

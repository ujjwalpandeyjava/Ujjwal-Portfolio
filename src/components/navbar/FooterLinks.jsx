import { navLinks, office } from '@/components/Constants';
import SiteLogo from '@/components/navbar/SiteLogo';
import classes from '@/styles/FooterLinks.module.scss';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


export default function FooterLinks() {
	return (
		<div id={classes.footer}>
			<Container className={`${classes.inner} ${classes.groups}`}>
				<div>
					<SiteLogo />
					<Text size="xs" c="dimmed" mt="md" maw={250}>Build fully functional accessible business ready products.</Text>
				</div>
				<div>
					<Text className={classes.title} fw={500}>Quick Links</Text>
					{navLinks.map((link, index) => <Text c="blue.1" key={index} className={classes.link} component="a" href={link.link}>{link.label}</Text >)}
				</div>
			</Container >
			<Container className={`${classes.inner} ${classes.groups}`} my="xl">
				<div className={classes.officeAddresses}>
					<Text className={classes.title} fw={500}>{office.address.title}</Text>
					<Text size='md' component="span" >{office.address.label}</Text >
				</div>
				<iframe className={classes.officeCoordinates} src={`https://maps.google.com/maps?q=${office.coordinates.latitude},${office.coordinates.longitude}&z=15&output=embed`} loading="lazy" />
			</Container>
			<Container className={classes.afterFooter}>
				<Text c="dimmed" size="sm">© 2026 Ujjwal Pandey. All rights reserved.</Text>
				<Group gap={16} className={classes.social} justify="flex-end" wrap="nowrap">
					<ActionIcon component="a" size="lg" color="gray" aria-label="Chat on WhatsApp" variant="subtle" href="tel:8375990500" target='_blank'>
						<FaWhatsapp size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon component="a" size="lg" color="gray" aria-label="Open in a new tab" variant="subtle" href="https://www.instagram.com/ujjwal__pandeyy/" target='_blank'>
						<FaInstagram size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</Container>
		</div >
	);
}
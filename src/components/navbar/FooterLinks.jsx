import { navLinks, office } from '@/utils/Constants';
import SiteLogo from '@/components/navbar/SiteLogo';
import classes from '@/styles/FooterLinks.module.scss';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function FooterLinks() {
	const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${office.coordinates.latitude},${office.coordinates.longitude}`;

	return (
		<div id={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.brandBlock}>
					<SiteLogo />
					<Text className={classes.brandCopy} size="sm" mt="md" maw={320}>
						Build accessible, business-ready products with a clean interface and a strong product focus.
					</Text>
					<Group gap="sm" className={classes.socialRow}>
						<ActionIcon
							component="a"
							size="lg"
							className={classes.socialIcon}
							aria-label="Chat on WhatsApp"
							variant="subtle"
							href="https://wa.me/918375990500"
							target="_blank"
							rel="noreferrer"
						>
							<FaWhatsapp size={18} stroke={1.5} />
						</ActionIcon>
						<ActionIcon
							component="a"
							size="lg"
							className={classes.socialIcon}
							aria-label="Open Instagram"
							variant="subtle"
							href="https://www.instagram.com/ujjwal__pandeyy/"
							target="_blank"
							rel="noreferrer"
						>
							<FaInstagram size={18} stroke={1.5} />
						</ActionIcon>
					</Group>
				</div>

				<div className={classes.linksBlock}>
					<Text className={classes.title} fw={500}>Quick Links</Text>
					<div className={classes.linkList}>{navLinks.map(link =>
						<Text key={link.link} className={classes.link} component="a" href={link.link}>{link.label}</Text>
					)}</div>
				</div>

				<div className={classes.metaBlock}>
					<Text className={classes.title} fw={500}>Location</Text>
					<Text className={classes.metaText} size="sm">
						{office.address.label}
					</Text>
					<Text className={classes.metaLink} component="a" href={mapsUrl} target="_blank" rel="noreferrer">
						Open in Google Maps
					</Text>
				</div>
			</Container>

			<Container className={classes.mapSection}>
				<div className={classes.mapHeader}>
					<div>
						<Text className={classes.title} fw={500}>Find Me</Text>
						<Text className={classes.mapCopy} size="sm">
							I&apos;m based in New Delhi, and the map below shows area where I work from.
						</Text>
					</div>
					<Text className={classes.mapLink} component="a" href={mapsUrl} target="_blank" rel="noreferrer">
						View full map
					</Text>
				</div>
				<iframe
					className={classes.officeCoordinates}
					src={`https://maps.google.com/maps?q=${office.coordinates.latitude},${office.coordinates.longitude}&z=15&output=embed`}
					loading="lazy"
					title="Office location map"
				/>
			</Container>

			<Container className={classes.afterFooter}>
				<Text className={classes.copyright} size="sm">&copy; 2026 Ujjwal Pandey. All rights reserved.</Text>
				<Text className={classes.footerNote} size="sm">Let&apos;s build something thoughtful, fast, and memorable.</Text>
			</Container>
		</div >
	);
}

"server-only";

import "@/styles/navbar.scss";
import { PROFILE_IMAGE } from "@/utils/siteAssets";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
	return (
		<Link href="/" aria-label="Go to homepage" className="siteLogoLink">
			<Flex align="center" gap="sm" id="logoSection">
				<span className="logoAvatar">
					<Image src={PROFILE_IMAGE} alt="Portrait of Ujjwal Pandey" fill sizes="(max-width: 968px) 40px, 52px" className="logoImage" priority />
				</span>
				<span className="logoCopy">
					<Text size="xl" fw={800} className="logoText">Ujjwal Pandey</Text>
					<Text size="xs" className="logoCaption">Full-stack Engineer</Text>
				</span>
			</Flex>
		</Link>
	);
}

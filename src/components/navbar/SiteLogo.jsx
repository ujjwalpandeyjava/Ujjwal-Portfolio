"server-only";

import siteLog from "@/statics/images/SiteLogo.jpg";
import "@/styles/navbar.scss";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function SiteLogo() {
	return (
		<Link href="/" >
			<Flex align="center" gap="xs" id="logoSection">
				<Image src={siteLog} alt="Ujjwal Pandey" className="logoImage" priority />
				<Text size="xl" fw={700} className="logoText">Ujjwal Pandey</Text>
			</Flex>
		</Link>
	);
}
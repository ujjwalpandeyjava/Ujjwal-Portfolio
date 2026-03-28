import classes from '@/styles/LivingSystem.module.scss';
import { Title, Text, Container } from '@mantine/core';

/**
 * LivingSystem Section
 * Features a deep-blue radial background and a rotating glow border.
 * * @returns {JSX.Element}
 */
export default function LivingSystem() {
	return (
		<Container size="md" py={100}>
			<section className={classes.container}>
				<div className={classes.content}>
					<div className={classes.visualWrapper}>💠</div>

					<Title order={2} size="h1" fw={900} style={{ color: 'white', letterSpacing: '-1px' }}>
						Systems that feel alive.
					</Title>

					<Text size="xl" style={{ color: 'rgba(255, 255, 255, 0.7)' }} maw={600}>
						We bridge the gap between static code and cognitive experiences.<br />
						By implementing intelligent feedback loops and high-performance Next.js and Spring boot architectures. <br />
						With me your software breathes with your users.
					</Text>
				</div>
			</section>
		</Container>
	);
}
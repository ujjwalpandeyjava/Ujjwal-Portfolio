"use client"; // Required for intersection observer hooks

import { Title, Text, Container } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import classes from '@/styles/LivingSystem.module.scss';

/**
 * LivingSystem Section
 * @returns {JSX.Element}
 */
export default function LivingSystem() {
    // Detect when 20% of the section is visible
    const { ref, entry } = useIntersection({
        threshold: 0.2,
    });

    const isVisible = entry?.isIntersecting;

    return (
        <Container size="md" py={100} ref={ref}>
            <section className={classes.container}>
                <div className={classes.content}>
                    {/* The icon now has a conditional 'active' class */}
                    <div className={`${classes.visualWrapper} ${isVisible ? classes.active : ''}`}>
                        💠
                    </div>

                    <Title order={2} size="h1" fw={900} style={{ color: 'white', letterSpacing: '-1px' }}>
                        Systems that feel alive.
                    </Title>

                    <Text size="xl" style={{ color: 'rgba(255, 255, 255, 0.7)' }} maw={600}>
                        We bridge the gap between static code and cognitive experiences.<br />
                        By implementing intelligent feedback loops and high-performance Next.js and Spring Boot architectures. <br />
                        With me your software breathes with your users.
                    </Text>
                </div>
            </section>
        </Container>
    );
}
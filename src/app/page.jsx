"server-only"

import ContactMe from '@/components/contact/ContactMe';
import AboutMe from '@/components/home/aboutMe';
import Hero from '@/components/home/hero';
import Skills, { skillsData } from '@/components/home/skills';
import WhatICanDo from '@/components/home/whatICanDo';
import SkillsMarquee from '@/components/home/SkillsMarquee';
import { Space } from '@mantine/core';
import PerformanceModal from '@/components/3d/PerformanceModal';
import LivingSystem from '@/components/home/LivingSystem';


export default function Home() {
  return (
    <div id='main'>
      <Hero />
      <Space h="lg" />
      <AboutMe />
      <Space h={30} />
      <SkillsMarquee direction={true} skills={skillsData} />
      <SkillsMarquee direction={false} skills={skillsData} />
      <Space h={30} />
      <WhatICanDo />
      <Space h={30} />
      <LivingSystem />
      <Space h={30} />
      <Skills />
      <Space h={30} />
      <ContactMe />
      <PerformanceModal />
    </div>
  );
}
"server-only"

import ContactMe from '@/components/contact/ContactMe';
import AboutMe from '@/components/home/aboutMe';
import Hero from '@/components/home/hero';
import Skills, { skillsData } from '@/components/home/skills';
import WhatICanDo from '@/components/home/whatICanDo';
import ContactServices from '@/components/home/ContactServices';
import SkillsMarquee from '@/components/home/SkillsMarquee';
import { Space } from '@mantine/core';
import PerformanceModal from '@/components/3d/PerformanceModal';


export default function Home() {
  return (
    <div id='main'>
      <Hero />
      <SkillsMarquee direction={true} skills={skillsData} />
      <SkillsMarquee direction={false} skills={skillsData} />
      <AboutMe />
      <WhatICanDo />
      <Space h={30} />
      <ContactServices />
      <Space h={30} />
      <Skills />
      <Space h={30} />
      <ContactMe />
      <PerformanceModal />
    </div>
  );
}
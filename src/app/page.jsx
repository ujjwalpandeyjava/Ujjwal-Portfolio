"server-only"

import ContactMe from '@/components/contact/ContactMe';
import AboutMe from '@/components/home/aboutMe';
import Hero from '@/components/home/hero';
// import Journey from '@/components/home/Journey';
import Skills from '@/components/home/skills';
import WhatICanDo from '@/components/home/whatICanDo';
import { Space } from '@mantine/core';

export default function Home() {
  return (
    <div id='main'>
      <Hero />
      <Space h="lg" />
      <AboutMe />
      <Space h={30} />
      <WhatICanDo />
      <Space h={30} />
      <Skills />
      <Space h={30} />
      <ContactMe />
      {/* <Journey /> */}
      {/* <Space h={30} /> */}
    </div>
  );
}
"use client"

import floatingImage from '@/statics/images/developer1.svg';
import '@/styles/home.scss';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const ComponentLoading = () => <div className="loading">Loading...</div>; // Replace with your actual loader
const Journey = dynamic(() => import('@/components/home/Journey'), { loading: () => <ComponentLoading /> });
const WhatICanDo = dynamic(() => import("@/components/home/whatICanDo"), { loading: () => <ComponentLoading /> });
const AboutMe = dynamic(() => import("@/components/home/aboutMe"), { loading: () => <ComponentLoading /> });
const Skills = dynamic(() => import("@/components/home/skills"), { loading: () => <ComponentLoading /> });
const FooterLinks = dynamic(() => import("@/components/navbar/FooterLinks"), { loading: () => <ComponentLoading /> });


export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="who-i-am">
          <div className="name-calling">Hi There!!</div>
          <div className="name-im">I am <span>Ujjwal Pandey</span></div>
          <div className="name-web-d">I am a Web Developer</div>

          <div className="action-container">
            <Link id="downloadCV" target="_blank" href="https://drive.google.com/open?id=1Fd1J4wcibypnPVL8RmYCfhVo0LVIMbJr" >Resume</Link>
            <Link href="/contact">Hire me</Link>
          </div>
        </div>

        <div id="myAvatar-wrapper">
          <Image src={floatingImage} alt="It's me" priority width={500} height={500} className="myAvatar" />
        </div>
      </div>

      <AboutMe />
      <WhatICanDo />
      <Journey />
      <Skills />
      <FooterLinks />
    </>
  );
}
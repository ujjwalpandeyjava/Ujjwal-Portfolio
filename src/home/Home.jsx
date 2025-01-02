import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactMe from '../contact/contactMe';
import PreviewPDFs from '../contact/resume/previewPDFs';
import EducationExperience from '../educationExperience/EducationExperience';
import floatingImage from '../images/developer1.svg';
import ConnectView from '../navbar/ConnectView';
import Skills from '../skills/Skills';
import SummaryCard from '../tiltEffect/summaryTilt';
import AboutMe from './AboutMe';
import homeCSS from './Home.module.css';
import WhatICanDo from './WhatICanDo';
import useDocumentTitle from '../assets/useDocumentTitle';


export default function Home() {
  useDocumentTitle("Ujjwal pandey");

  const [viewPreview, setViewPreview] = useState(false);
  const [isDeviceMobile] = useState(isMobileDevice());
  function isMobileDevice() { return /android|iphone|ipad|blackberry|mobile|webos|opera mini/i.test(navigator.userAgent.toLowerCase()); }


  return (
    <>
      <ConnectView />
      <div className={homeCSS.home}>
        <div className={homeCSS.whoIAm}>
          <div className={homeCSS.nameCalling}>Hi There!!</div>
          <div className={homeCSS.nameIm}>I'm <span>Ujjwal Pandey</span></div>
          <div className={homeCSS.nameWebD}>I am a Web Developer</div>
          <div className={homeCSS.actionContainer}>
            <button id="downloadCV" onClick={() => (!viewPreview) ? setViewPreview(true) : console.log(`Already true`)}>Resume</button>
            {viewPreview && <PreviewPDFs setViewPreview={(x) => setViewPreview(x)} />}
            <Link to="contact">Contact me</Link>
          </div>
        </div>
        <img id={homeCSS.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <AboutMe />
      <WhatICanDo />
      <EducationExperience />
      <Skills />
      {isDeviceMobile && <SummaryCard />}
      <ContactMe />
    </>
  )
}
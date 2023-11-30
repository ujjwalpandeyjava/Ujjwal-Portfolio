import { Fragment, useState } from 'react';
import floatingImage from '../images/developer1.svg';
import ConnectView from '../navbar/ConnectView';
import SummaryCard from '../tiltEffect/summaryTilt';
import AboutMe from './AboutMe';
import homeCSS from './Home.module.css';
import WhatICanDo from './WhatICanDo';
import EducationExperience from '../educationExperience/EducationExperience';
// import { ScrollDown, ScrollToTop } from '../pageScroll/ScrollDown';


export default function Home() {
  const [isDeviceMobile] = useState(isMobileDevice());
  function isMobileDevice() { return /android|iphone|ipad|blackberry|mobile|webos|opera mini/i.test(navigator.userAgent.toLowerCase()); }
  const resume = () => {
    console.log("resue");
  }
  const contactme = () => {
    console.log("contsame");
  }
  return (
    <Fragment>
      <ConnectView />
      <div className={homeCSS.home}>
        <div className={homeCSS.whoIAm}>
          <div className={homeCSS.nameCalling}>Hi There!!</div>
          <div className={homeCSS.nameIm}>I'm <span>Ujjwal Pandey</span></div>
          <div className={homeCSS.nameWebD}>I am a Web Developer</div>
          <div className={homeCSS.actionContainer}>
            <button onClick={() => resume()}>Resume</button>
            <button onClick={() => contactme()}>Contact me</button>
          </div>
        </div>
        <img id={homeCSS.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <AboutMe />
      <WhatICanDo />
      <EducationExperience />
      {isDeviceMobile ? <SummaryCard /> : null}
    </Fragment >
  )
}
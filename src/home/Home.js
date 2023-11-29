import { Fragment, useState } from 'react';
import floatingImage from '../images/developer1.svg';
import ConnectView from '../navbar/ConnectView';
import SummaryCard from '../tiltEffect/summaryTilt';
import AboutMe from './AboutMe';
import homeCSS from './Home.module.css';
// import { ScrollDown, ScrollToTop } from '../pageScroll/ScrollDown';


export default function Home() {
  const [isDeviceMobile] = useState(isMobileDevice());
  function isMobileDevice() { return /android|iphone|ipad|blackberry|mobile|webos|opera mini/i.test(navigator.userAgent.toLowerCase()); }
  return (
    <Fragment>
      <ConnectView />
      <div className={homeCSS.home}>
        <div className={homeCSS.whoIAm}>
          <div className={homeCSS.name}>Hi There</div>
          <div> I'm <span>Ujjwal Pandey</span></div>
          <div>I am a Web Developer</div>
          <div>
            <button>Resume</button>
            <button>Contact me</button>
          </div>
        </div>
        <img id={homeCSS.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <AboutMe />
      {isDeviceMobile ? <SummaryCard /> : null}
    </Fragment >
  )
}
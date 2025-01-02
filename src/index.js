import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import ReactDOM from 'react-dom/client';
import AboutSection from './aboutSection';
import ContactMe from './contactMe';
import EducationSection from './Education';
import Footer from './footer';
import Home from './home/Home';
import Certificates from './imageCarousel/certificate/Certificates';
import './index.css';
import Navbar from './navbar';
import SummaryTilt from './tiltEffect/summaryTilt';
import WorkExample from './workExample';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <>
      <AnimatedCursor innerSize={13} outerSize={10} color='31, 66, 103'
        outerAlpha={0.4} innerScale={0.8} outerScale={3.5} showSystemCursor={false} trailingSpeed={7}
        clickables={['a', 'input', 'label', 'select', 'textarea', 'button', '.link', 'img']} />

      <Navbar />
      <div className="main">
        <Home />
        <AboutSection />
        <EducationSection />
        <Certificates />
        <WorkExample />
        <SummaryTilt />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
import React, { Fragment } from 'react'
import './App.css'
import EducationSection from './Education'
import AboutSection from './aboutSection'
import ContactMe from './contactMe'
import Footer from './footer'
import Home from './home/Home'
import Certificates from './imageCarousel/certificate/Certificates'
import Navbar from './navbar'
import SummaryTilt from './tiltEffect/summaryTilt'
import WorkExample from './workExample'

function App() {
  return (
    <Fragment>
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
    </Fragment >
  );
}

export default App;

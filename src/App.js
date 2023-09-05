import React, { Fragment } from 'react'
import AboutSection from './aboutSection'
import './App.css'
import ContactMe from './contactMe'
import EducationSection from './Education'
import Footer from './footer'
import Navbar from './navbar'
import WorkExample from './workExample'
import SummaryTilt from './tiltEffect/summaryTilt'
import Home from './home/Home'
// import 'idempotent-babel-polyfill';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="main">
        <Home />
        <AboutSection />
        <EducationSection />
        <WorkExample />
        <SummaryTilt />
        <ContactMe />
        <Footer />
      </div>
    </Fragment >
  );
}

export default App;

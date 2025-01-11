import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { ComponentLoading } from '../assets/Loadings';
import useDocumentTitle from '../assets/useDocumentTitle';
import PreviewPDFs from '../contact/resume/previewPDFs';
import floatingImage from '../images/developer1.svg';
import homeCSS from './Home.module.css';

const AboutMe = lazy(() => import("./AboutMe"));
const Skills = lazy(() => import("../skills/Skills"));
const WhatICanDo = lazy(() => import("./WhatICanDo"));
const ContactMe = lazy(() => import("../contact/contactMe"));
const EducationExperience = lazy(() => import("../educationExperience/EducationExperience"));


export default function Home() {
  useDocumentTitle("Ujjwal pandey");

  const [viewPreview, setViewPreview] = useState(false);
  const toggleViewPreview = () => setViewPreview(old => !old)


  return (
    <>
      <div className={homeCSS.home}>
        <div className={homeCSS.whoIAm}>
          <div className={homeCSS.nameCalling}>Hi There!!</div>
          <div className={homeCSS.nameIm}>I'm <span>Ujjwal Pandey</span></div>
          <div className={homeCSS.nameWebD}>I am a Web Developer</div>
          <div className={homeCSS.actionContainer}>
            <button id="downloadCV" onClick={toggleViewPreview} >Resume</button>
            {viewPreview && <PreviewPDFs close={toggleViewPreview} />}
            <Link to="contact">Contact me</Link>
          </div>
        </div>
        <img id={homeCSS.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <Suspense fallback={<ComponentLoading />}><AboutMe /></Suspense>
      <Suspense fallback={<ComponentLoading />}><WhatICanDo /></Suspense>
      <Suspense fallback={<ComponentLoading />}><EducationExperience /></Suspense>
      <Suspense fallback={<ComponentLoading />}><Skills /></Suspense>
      <Suspense fallback={<ComponentLoading />}><ContactMe /></Suspense>
    </>
  )
}
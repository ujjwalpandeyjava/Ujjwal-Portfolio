import { lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { ComponentLoading } from '../assets/Loadings';
import useDocumentTitle from '../assets/useDocumentTitle';
import PreviewPDFs from '../contact/resume/previewPDFs';
import floatingImage from '../images/developer1.svg';
import style from './Home.module.css';

const AboutMe = lazy(() => import("./AboutMe"));
const Skills = lazy(() => import("../learnings/Skills"));
const WhatICanDo = lazy(() => import("./WhatICanDo"));
const EducationExperience = lazy(() => import("../learnings/EducationExperience"));


export default function Home() {
  useDocumentTitle("Ujjwal pandey");

  const [viewPreview, setViewPreview] = useState(false);
  const toggleViewPreview = () => setViewPreview(old => !old)


  return (
    <>
      <div className={style.home}>
        <div className={style.whoIAm}>
          <div className={style.nameCalling}>Hi There!!</div>
          <div className={style.nameIm}>I'm <span>Ujjwal Pandey</span></div>
          <div className={style.nameWebD}>I am a Web Developer</div>
          <div className={style.actionContainer}>
            <button id="downloadCV" onClick={toggleViewPreview} >Resume</button>
            {viewPreview && <PreviewPDFs close={toggleViewPreview} />}
            <Link to="contact">Contact me</Link>
          </div>
        </div>
        <img id={style.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <Suspense fallback={<ComponentLoading />}><AboutMe /></Suspense>
      <Suspense fallback={<ComponentLoading />}><WhatICanDo /></Suspense>
      <Suspense fallback={<ComponentLoading />}><EducationExperience /></Suspense>
      <Suspense fallback={<ComponentLoading />}><Skills /></Suspense>
    </>
  )
}
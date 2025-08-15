import { ComponentLoading } from '../assets/Loadings';
import { lazy, Suspense } from 'react';
import useDocumentTitle from '../assets/useDocumentTitle';
import floatingImage from '../images/developer1.svg';
import { Link } from 'react-router-dom';
import style from './Home.module.css';


// const EducationExperience = lazy(() => import("../learnings/EducationExperience"));
// const PreviewPDFs = lazy(() => import('../contact/resume/previewPDFs'));
const Journey = lazy(() => import("../learnings/newJourney/Journey"));
const Skills = lazy(() => import("../learnings/Skills"));
const WhatICanDo = lazy(() => import("./WhatICanDo"));
const AboutMe = lazy(() => import("./AboutMe"));


export default function Home() {
  useDocumentTitle("Ujjwal pandey");

  // const [viewPreview, setViewPreview] = useState(false);
  // const toggleViewPreview = () => setViewPreview(old => !old)


  return (
    <>
      <div className={style.home}>
        <div className={style.whoIAm}>
          <div className={style.nameCalling}>Hi There!!</div>
          <div className={style.nameIm}>I'm <span>Ujjwal Pandey</span></div>
          <div className={style.nameWebD}>I am a Web Developer</div>
          <div className={style.actionContainer}>
            <Link id="downloadCV" target='_blank' to="https://drive.google.com/open?id=1Fd1J4wcibypnPVL8RmYCfhVo0LVIMbJr">Resume</Link>
            {/* <button id="downloadCV" onClick={toggleViewPreview}>Resume</button> */}
            {/* {viewPreview && <PreviewPDFs close={toggleViewPreview} />} */}
            <Link to="contact">Contact me</Link>
          </div>
        </div>
        <img id={style.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <Suspense fallback={<ComponentLoading />}><AboutMe /></Suspense>
      <Suspense fallback={<ComponentLoading />}><WhatICanDo /></Suspense>
      <Suspense fallback={<ComponentLoading />}><Journey /></Suspense>
      {/* <Suspense fallback={<ComponentLoading />}><EducationExperience /></Suspense> */}
      <Suspense fallback={<ComponentLoading />}><Skills /></Suspense>
    </>
  )
}
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ComponentLoading } from '../assets/Loadings';
import floatingImage from '../images/developer1.svg';
import style from './Home.module.css';

const Journey = lazy(() => import("../learnings/newJourney/Journey"));
const Skills = lazy(() => import("../learnings/Skills"));
const WhatICanDo = lazy(() => import("./WhatICanDo"));
const AboutMe = lazy(() => import("./AboutMe"));

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <div className={style.whoIAm}>
          <div className={style.nameCalling}>Hi There!!</div>
          <div className={style.nameIm}>I'm <span>Ujjwal Pandey</span></div>
          <div className={style.nameWebD}>I am a Web Developer</div>
          <div className={style.actionContainer}>
            <Link id="downloadCV" target='_blank' to="https://drive.google.com/open?id=1Fd1J4wcibypnPVL8RmYCfhVo0LVIMbJr">Resume</Link>
            <Link to="contact">Hire me</Link>
          </div>
        </div>
        <img id={style.myAvatar} src={floatingImage} alt="It's me" />
      </div>
      <Suspense fallback={<ComponentLoading />}><AboutMe /></Suspense>
      <Suspense fallback={<ComponentLoading />}><WhatICanDo /></Suspense>
      <Suspense fallback={<ComponentLoading />}><Journey /></Suspense>
      <Suspense fallback={<ComponentLoading />}><Skills /></Suspense>
    </>
  )
}
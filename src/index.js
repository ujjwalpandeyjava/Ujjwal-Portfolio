import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import BlogHome from './blog/BlogHome';
import Blog from './blog/Blogs/Blog';
import ContactMePage from './contact/ContactMePage.js';
import PDFViewer from './document/PDFViewer';
import ExperiencePage from './educationExperience/ExperiencePage.js';
import Error from './error/Error';
import Home from './home/Home';
import './index.scss';
import PageNotFound from './pageNotFound/PageNotFound';
import SkillsProjects from './skills/SkillsProjects.js';
import BackEndProjects from './skills/projectsByCategory/BackEndProjects.js';
import FrontEndProjects from './skills/projectsByCategory/FrontEndProjects.js';
import FullStackProjects from './skills/projectsByCategory/FullStackProjects.js';
// import Footer from './footer/Footer.js';
// {/* <Route path={configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)} element={<App />} > */ }

// console.log(configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length));
const routesWithJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<App />} >
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="experience" element={<ExperiencePage />} />
      <Route path="skills_projects" element={<SkillsProjects />} />
      <Route path="skills_projects/frontEndsProjects" element={<FrontEndProjects />} />
      <Route path="skills_projects/backEndProjects" element={<BackEndProjects />} />
      <Route path="skills_projects/fullStackProjects" element={<FullStackProjects />} />
      <Route path="blog" element={<BlogHome />} />
      <Route path="blog/:blogId" element={<Blog />} />
      <Route path="contact" element={<ContactMePage />} />
      <Route path="error" element={<Error />} />
      <Route path="resume" element={<PDFViewer />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <RouterProvider router={routesWithJSX} />
  </Fragment>
);
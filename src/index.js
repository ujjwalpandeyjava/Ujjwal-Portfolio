import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import configs from '../package.json';
import BlogHome from './blog/BlogHome';
import Blog from './blog/Blogs/Blog';
import Contact from './contact/contactMe';

import EducationExperience from './educationExperience/EducationExperience.js';
import SkillsProjects from './skillsProjects/SkillsProjects.js';

import Error from './error/Error';
import Home from './home/Home';
import './index.css';
import Navbar from './navbar/Navbar';
import PageNotFound from './pageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter basename={configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)} >
      <Navbar />
      <div className='sectionBody'>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<EducationExperience />} />{/* education and work experience */}
          <Route path="/skills_projects" element={<SkillsProjects />} /> {/* skills and projects  */}
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:blogId" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
    <BrowserRouter basename='app2'>
      <Routes>
        <Route path="" element={<h2>App 2</h2>} />
        <Route path="/*" element={<h1>Page not found</h1>} />
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  </>
);
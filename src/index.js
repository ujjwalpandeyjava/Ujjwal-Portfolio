import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './error/Error';
import Home from './home/Home';
import './index.css';
import PageNotFound from './pageNotFound/PageNotFound';
import Navbar from './navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import configs from '../package.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={configs.homepage.substring(configs.homepage.lastIndexOf("/") + 1, configs.homepage.length)} >
    <Navbar />
    <div className='sectionBody'>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </div>
  </BrowserRouter>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import About from './Components/About/About.jsx';
import Serveices from './Components/Services/Serveices.jsx';
import Work from './Components/Works/Work.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Team from './Components/Team/Team.jsx';
import Blog from './Components/blog/Blog.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/services' element={ <Serveices /> } />
        <Route path='/works' element={ <Work /> } />
        <Route path='/team' element={ <Team /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/english' element={ <Home /> } />
      </Routes>
    </BrowserRouter>

    <Footer />

  </React.StrictMode>
);

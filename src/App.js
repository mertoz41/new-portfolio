import './App.css';

import React from 'react';
import { Helmet } from 'react-helmet'
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Project from './pages/Project'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Mert Özkaynak</title>
          <meta name="description" content="Nested component" />
          <link rel='icon' type='image/png' href='favicon.ico' sizes="16x16" />
        </Helmet>
      <div className='middle'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </div>
        
    </div>
  );
}

export default App;

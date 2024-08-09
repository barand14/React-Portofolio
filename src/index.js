import React from 'react';
import Header from './components/header.jsx';
import AboutMe from './components/aboutMe.jsx';
import Portfolio from './components/portfolio.jsx';
import Resume from './components/resume.jsx';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Resume/>
      <Footer />
    </div>
  );
}

export default App;

import './style.css';
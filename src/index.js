import React from 'react';
import Header from './components/header.js';
import AboutMe from './components/aboutMe.js';
import Portfolio from './components/Portfolio';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

import './style.css';
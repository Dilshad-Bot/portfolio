// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="ml-64 lg:ml-0">
        <section id="banner" className="snap-start">
          <Banner />
        </section>
        <section id="about-me" className="snap-start">
          <AboutMe />
        </section>
        <section id="portfolio" className="snap-start">
          <Portfolio />
        </section>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './about.css'
import image1 from '../img/images-2.png';
import image3 from '../img/images-3.png';

function About() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="about-header">
          <p className="main-font">
            Smart Traffic Light Control System
          </p>
          <p className="side-font"> Using ML with SUMO </p>
        </div>
        <div className="img-container">
          <img className="img" src= {image1} alt='image1'/>
        </div>  
      </main>
    <Footer />
    </div>
  );
}

export default About;

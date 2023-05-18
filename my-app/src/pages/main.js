import React, { useState } from 'react';

// import './App.css';
import './main.css'
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';


function Main() {
  // @TODO Add support for ENV.
  const [frameSrc, setFrameSrc] = useState('http://172.25.244.37:6080');

  const changeFrame = (url) => {
    setFrameSrc(url);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
      <Nav changeFrame={changeFrame} />
        <div className="frame-container">
          <iframe title="main-frame" src={frameSrc} style={{ width: '1920px',height: '1080px', border: 'none' }}></iframe>
        </div>
      </main>
    <Footer />
    </div>
  );
}

export default Main;

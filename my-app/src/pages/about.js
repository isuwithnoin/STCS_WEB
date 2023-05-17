import React, { useState } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';

function about() {
  const [frameSrc, setFrameSrc] = useState('https://www.google.com/');

  const changeFrame = (url) => {
    setFrameSrc(url);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
      <Nav changeFrame={changeFrame} />
        <div className="frame-container">
          <iframe title="main-frame" src={frameSrc}></iframe>
        </div>
      </main>
    <Footer />
    </div>
  );
}

export default about;

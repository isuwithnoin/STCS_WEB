import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import Main from './pages/main'
import About from './pages/about'
import Contact from './pages/contact';

/*
function App() {
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

export default App;
*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    </>
  )
}
export default App;
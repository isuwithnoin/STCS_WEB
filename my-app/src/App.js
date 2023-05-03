import React, { useState } from 'react';
import './App.css';
import Header from './components/header';

function App() {
  const [frameSrc, setFrameSrc] = useState('https://www.google.com/');

  const changeFrame = (url) => {
    setFrameSrc(url);
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <nav className="page-nav">
          <ul>
            <li><button onClick={() => changeFrame('https://www.google.com/')}>Before</button></li>
            <li><button onClick={() => changeFrame('https://www.naver.com/')}>After</button></li>
            <li><button onClick={() => changeFrame('https://www.daum.net/')}>Daum</button></li>
            <li><button onClick={() => changeFrame('https://www.youtube.com/')}>Youtube</button></li>
          </ul>
        </nav>
        <div className="frame-container">
          <iframe title="main-frame" src={frameSrc}></iframe>
        </div>
      </main>
    </div>
  );
}

export default App;

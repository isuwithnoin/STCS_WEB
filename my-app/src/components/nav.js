import React, { useState } from 'react';
import './nav.css';

function Nav({ changePage }) {
  const handleButtonClick = (page) => {
    changePage(page);
  };

  return (
    <nav className="page-nav">
      <ul>
        <li>
          <button onClick={() => handleButtonClick('before')}>Before</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick('after')}>After</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick('upload')}>Upload</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick('graph')}>Graph</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

/*
//Before, After 서버 박기
function Nav({ changeFrame }) {
  
  return (
    <nav className="page-nav">
      <ul>
        <li><button onClick={() => changeFrame('https://www.google.com/')}>Before</button></li>
        <li><button onClick={() => changeFrame('https://www.naver.com/')}>After</button></li>
        <li><button onClick={() => changeFrame('https://www.daum.net/')}>Upload</button></li>
        <li><button onClick={() => changeFrame('https://www.youtube.com/')}>Graph</button></li>
      </ul>
    </nav>
  );
}

export default Nav;
*/
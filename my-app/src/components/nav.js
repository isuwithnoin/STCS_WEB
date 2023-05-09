import React from 'react';
import './nav.css';

function Nav({ changeFrame }) {
  return (
    <nav className="page-nav">
      <ul>
        <li><button onClick={() => changeFrame('https://www.google.com/')}>Before</button></li>
        <li><button onClick={() => changeFrame('https://www.naver.com/')}>After</button></li>
        <li><button onClick={() => changeFrame('https://www.daum.net/')}>Daum</button></li>
        <li><button onClick={() => changeFrame('https://www.youtube.com/')}>Youtube</button></li>
      </ul>
    </nav>
  );
}

export default Nav;

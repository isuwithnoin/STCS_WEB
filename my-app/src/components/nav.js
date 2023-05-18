import React from 'react';
import './nav.css';

function Nav({ changeFrame }) {
  return (
    <nav className="page-nav">
      <ul>
        <li><button onClick={() => changeFrame('172.25.244.37:6080')}>Before</button></li>
        <li><button onClick={() => changeFrame('172.25.244.37:6080')}>After</button></li>
        <li><button onClick={() => changeFrame('https://www.daum.net/')}>Upload</button></li>
        <li><button onClick={() => changeFrame('https://www.youtube.com/')}>Graph</button></li>
      </ul>
    </nav>
  );
}

export default Nav;

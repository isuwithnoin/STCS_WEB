//modules, components
import React, { useState } from 'react';
import './main.css'
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

//pages
import Before from '../pages/before';
import After from '../pages/after';
import Graph from '../pages/graph';
import Default from '../pages/default';

function Main() {
  const [currentPage, setCurrentPage] = useState('before');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Render the current page based on the `currentPage` state
  const renderPage = () => {
    switch (currentPage) {
      case 'before':
        return <Before/>;
      case 'after':
        return <After/>;
      case 'graph':
        return <Graph/>;
      default:
        return <Default/>;
    }
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Nav changePage={changePage} />
        <div className="frame-container">{renderPage()}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Main;



/*
function Main() {
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
      <Footer/>
    </div>
  );
}

export default Main;
*/
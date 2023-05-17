import React, { useState } from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Footer from '../components/footer';

function About() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        우리 서비스에 대한 소개
      </main>
    <Footer />
    </div>
  );
}

export default About;

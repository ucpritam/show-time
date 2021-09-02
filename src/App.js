import React from 'react';
import './App.css';
import Home from './HomeScreen';
import Nav from './nav';
import Footer from './footer';
import Banner from './banner';

function App() {
  return (
    <div className="app">
      <Home />
      <Nav />
      <Footer />
      <Banner />
    </div>
  );
}

export default App;
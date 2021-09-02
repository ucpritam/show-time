import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import Nav from './Nav';
import Footer from './footer';
import Banner from './banner';


function App() {
  return (
    <div className="app">
      <HomeScreen />
      <Nav />
      <Footer />
      <Banner />
    </div>
  );
}

export default App;
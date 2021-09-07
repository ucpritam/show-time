import React from 'react';
import './App.css';
import Loginscreen from './screens/loginscreen';
// import Profilescreen from './screens/profilescreen';
import HomeScreen from './screens/homescreen';

function App() {
  return (
    <div className="app">
    {/* <Loginscreen /> */}
    {/* <Profilescreen/> */}
    <HomeScreen />
    </div>
  );
}

export default App;
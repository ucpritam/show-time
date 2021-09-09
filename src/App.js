import React, { useEffect } from 'react';
import './App.css';
import Loginscreen from './screens/loginscreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/homescreen';
import { auth } from "./firebase"; 
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if (userAuth) { 
           dispatch(login({
             uid: userAuth.uid,
             email: userAuth.email,
           }))
        }else{
          //logged out
          dispatch(logout);
        }
      } );

      return unsubscribe;
  }, []);

  return (
    <div className="app">
    <Loginscreen />
    <HomeScreen />
    </div>
  );
}

export default App;
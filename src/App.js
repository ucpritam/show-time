import React, { useEffect } from 'react';
import './App.css';
import Loginscreen from './screens/loginscreen';
<<<<<<< HEAD
// import Profilescreen from './screens/profilescreen';
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> 9953d5c8d97e8bf16dd9c98e62fed2ef026025f2
import HomeScreen from './screens/homescreen';
import ProfileScreen from './screens/profilescreen';
import Team from './screens/team';
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
           }));
        }else{
          //logged out
          dispatch(logout());
        }
      } );

      return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
<<<<<<< HEAD
    {/* <Loginscreen /> */}
    {/* <Profilescreen/> */}
    <HomeScreen />
=======
    <Router>
      {!user ? (
        <Loginscreen />
      ) : (
        <Switch>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}    
    </Router>
    
>>>>>>> 9953d5c8d97e8bf16dd9c98e62fed2ef026025f2
    </div>
  );
}

export default App;
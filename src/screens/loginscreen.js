import React, { useState } from 'react';
import Logo from '../assets/ShowTime.svg';
import homescreen from './homescreen';
import SignUpScreen from '../screens/signupscreen';
import "./loginscreen.css";

function Loginscreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">

                <img
                 className="loginScreen__logo"               
                 src={Logo} 
                 alt="" 
                />
                <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In </button>
                <div className="loginScreen__gradient">
                </div>

                <div className="loginScreen__body">
                    {signIn ? (
                         <SignUpScreen /> 
                    ): (
                        <>
                    <h1>Unlimited Films, TV Programs and Much More.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="loginScreen__input">
                        <form className="s_form">
                            <input type="email" placeholder="Email Address"/>
                            <button 
                            onClick={() => setSignIn(true)}
                            className="loginScreen__getStarted">
                                GET STARTED
                            </button>
                        </form>
                    </div>
                    </>
                    )}
                    
                </div>

            </div>   
        </div>
    );
}

export default Loginscreen;

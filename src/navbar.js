import React, { useState, useEffect } from 'react';
import Logo from './assets/ShowTime.svg';
import "./navbar.css";

function Nav() {

    const [show, handleShow] =  useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
            <img 
            className="nav__logo"
            src={Logo}
            alt="logo"
            />

            <img 
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
            alt="user"
            />
            </div>
        </div>
    )
}

export default Nav;

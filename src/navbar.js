import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './assets/ShowTime.svg';
import Button from '@material-ui/core/Button';
import "./navbar.css";



function Nav() {
    const [show, handleShow] =  useState(false);
    const history = useHistory();

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
            onClick = {() => history.push("/")}
            className="nav__logo"
            src={Logo}
            alt="logo"
            />

            <img 
            onClick = {() => history.push("/profile")}
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
            alt="user"
            />

            <div className="nav__team">
            <Button variant="contained" style={{backgroundColor: '#00ff8d', color: '#111', fontWeight: '600'}} onClick = {() => history.push("/team")}>
                Our Team
            </Button>
            
            </div>
            </div>
        </div>
    )
}

export default Nav;

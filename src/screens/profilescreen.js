<<<<<<< HEAD
import userEvent from '@testing-library/user-event';
import React from 'react'
import Nav from '../navbar';
import "./profilescreen.css";

function profilescreen() {
    const state = useSelector(state => state.state);

    return (
        <div className='profilescreen'>
            <h1>This is the Profile</h1>
            <Nav />
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilescreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
=======
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from "../firebase";
import Nav from '../navbar';
import "./profilescreen.css";

function Profilescreen() {
    const user = useSelector(selectUser);

    return (
        <div className='profilescreen'>
            <Nav />
            <div className="profilescreen_body">
                <h1>Profile</h1>
                <div className="profilescreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
>>>>>>> 9953d5c8d97e8bf16dd9c98e62fed2ef026025f2
                    alt="" 
                    />
                <div className="profilescreen_details">
                    <h2>{user.email}</h2>
                <div className="profilescreen_plans">
<<<<<<< HEAD
                    <button onClick={() => auth.signout()} 
=======
                    <button onClick={() => auth.signOut()} 
>>>>>>> 9953d5c8d97e8bf16dd9c98e62fed2ef026025f2
                    className="profilescreen_signout"
                    >
                    Sign Out
                    </button>

                </div>
                </div>





                    
                </div>

            </div>
<<<<<<< HEAD

=======
>>>>>>> 9953d5c8d97e8bf16dd9c98e62fed2ef026025f2
        </div>
    )
}

<<<<<<< HEAD
export default profilescreen
=======
export default Profilescreen
>>>>>>> 9953d5c8d97e8bf16dd9c98e62fed2ef026025f2

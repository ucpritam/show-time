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
                    alt="" 
                    />
                <div className="profilescreen_details">
                    <h2>{user.email}</h2>
                <div className="profilescreen_plans">
                    <button onClick={() => auth.signOut()} 
                    className="profilescreen_signout"
                    >
                    Sign Out
                    </button>

                </div>
                </div>





                    
                </div>

            </div>
        </div>
    )
}

export default Profilescreen
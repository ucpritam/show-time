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
                    alt="" 
                    />
                <div className="profilescreen_details">
                    <h2>{user.email}</h2>
                <div className="profilescreen_plans">
                    <button onClick={() => auth.signout()} 
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

export default profilescreen

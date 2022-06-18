import React from 'react';
import Nav from '../navbar';
import Logo1 from '../assets/Pritam.jpg';
import Logo2 from '../assets/Akash.jpg';
import Logo3 from '../assets/Tanya.jpg';
import Logo4 from '../assets/Debnath.jpeg';
import './team.css';

export const team = () => {
    return (
        <div>
        <Nav />
            <div className="container">
    <h1 className="heading">Our Team</h1>

    <div className="profiles">
      <div className="profile">
        <img src={Logo1} className="profile-img" />

        <h3 className="user-name">Pritam Majumder</h3>
        <h5>Developer</h5>
        <p>API Integration, Front-end, Project Coordinator</p>
      </div>
      <div className="profile">
        <img src={Logo2} className="profile-img" />

        <h3 className="user-name">Akash Shaw</h3>
        <h5>Developer</h5>
        <p>Firebase, Navigation, Home Screen</p>
      </div>
      <div className="profile">
        <img src={Logo3} className="profile-img" />

        <h3 className="user-name">Tanya Singh</h3>
        <h5>Developer</h5>
        <p>Listing Movies and Shows</p>
      </div>
      <div className="profile">
        <img src={Logo4} className="profile-img" />

        <h3 className="user-name">Pritam Debnath</h3>
        <h5>Developer</h5>
        <p>Signup Page, Banner</p>
      </div>
    </div>
  </div>
        </div>
    )
}

export default team;
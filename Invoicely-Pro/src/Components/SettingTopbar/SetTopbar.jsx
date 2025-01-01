import React from 'react';
import './SetTopbar.css';


function SetTopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h2 className="top-bar-title">Settings</h2>
      </div>
      <div className="top-bar-right">
        <div className="user-info">
          <img src="profile-picture.png" alt="Profile Picture" className="profile-picture" />
          <span className="username">Username</span>
          <span className="email">user@example.com</span>
        </div>
        <button className="logout-button">
          <i className="fas fa-power-off"></i>
        </button>
      </div>
    </div>
  );
}

export default SetTopBar;
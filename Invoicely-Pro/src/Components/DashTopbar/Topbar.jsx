import React from 'react';
import './Topbar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className='top-things'>

      <div className="top-bar-left">
        <h2 className="top-bar-title">Dashboard</h2>
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

      <div className="dashboard-info">
        <div className="info-card">
          <h3>Amount Generated</h3>
          <p>$1000</p>
        </div>
        <div className="info-card">
          <h3>Amount Received</h3>
          <p>$500</p>
        </div>
        <div className="info-card">
          <h3>Amount Pending</h3>
          <p>$200</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
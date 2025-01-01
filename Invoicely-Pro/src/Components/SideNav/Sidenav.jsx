import React from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.css';

function Sidenav() {
  return (
    <div className="sidenav">
        <div className='logoText'>
            <h1>INVOICELY PRO</h1>
            <h3>Custom Invoice</h3>
        </div>

      <ul>
        <li>
          <Link to="/dashboard">DASHBOARD</Link>
        </li>
        <li>
          <Link to="/invoice">INVOICE</Link>
        </li>
        <li>
          <Link to="/settings">SETTINGS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
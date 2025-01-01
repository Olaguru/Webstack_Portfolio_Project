import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../SideNav/Sidenav';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [invoices, setInvoices] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      navigate('/login', { replace: true });
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    axios.get('http://127.0.0.1:8000/api/users/user/', config)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        if (error.response.status === 401) {
          navigate('/login', { replace: true });
        } else {
          // setError('Failed to fetch user data');
          navigate('/login', { replace: true });
        }
      });

    axios.get('http://127.0.0.1:8000/api/invoices/', config)
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => {
        // do nothing
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <Sidenav />
      <div>
        <h1>Welcome, {userData.full_name}!</h1>
        <p>Email: {userData.email}</p>
        <p>Company Name: {userData.company_name}</p>
        <hr />
        <h2>Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.slice(0, 10).map(invoice => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.name}</td>
                <td>{invoice.phone}</td>
                <td>{invoice.email}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
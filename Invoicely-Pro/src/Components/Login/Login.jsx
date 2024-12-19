import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';

import login_side_image from '../../assets/login_side_image.png';
import logo from '../../assets/invoice_pro_logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };

    fetch('http://127.0.0.1:8000/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.refresh && data.access) {
        // Save tokens to local storage
        localStorage.setItem('refreshToken', data.refresh);
        localStorage.setItem('accessToken', data.access);
        navigate('/dashboard'); // Route to dashboard
      } else {
        setError('Invalid email or password');
      }
    })
    .catch(error => {
      setError('An error occurred');
    });
  };

  return (
    <div className='login-container'>
        <div>
            <img src={logo} alt='app-logo' className='logo'/>
        </div>
      <h1>LOG IN</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className='login-form' onSubmit={handleSubmit}>
        <label className='label'>Enter Your Email</label>
        <br />
        <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className='Label'>Enter Your Password:</label>
        <br />
        <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button className='button' type="submit">Log in</button>
      </form>
      <p>Don't have an account? <Link to='/signup'><u>sign up</u></Link></p>
    </div>
  );
}

export default Login;
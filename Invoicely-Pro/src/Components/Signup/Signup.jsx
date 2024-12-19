import React, { useState } from 'react';
import './Signup.css'
// linking the login text to the route
import { Link } from 'react-router-dom';


import login_side_image from '../../assets/login_side_image.png';
import logo from '../../assets/invoice_pro_logo.png';


function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      const userData = {
        full_name: fullName,
        email: email,
        company_name: companyName,
        password: password,
        logo: null
      };

      setLoading(true);
      fetch('http://127.0.0.1:8000/api/users/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setSignupSuccess(true);
        setFullName('');
        setEmail('');
        setCompanyName('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
      });
    }
  };

  return (
    <div className='signup-container'>
        <div>
            <img src={logo} alt='app-logo' className='logo'/>
        </div>
      <h1>SIGN UP</h1>
      {signupSuccess && <p style={{color: 'green'}}>Signup successful!</p>}
      {passwordError && <p style={{color: 'red'}}>Passwords do not match!</p>}
      <form className='signup-form' onSubmit={handleSubmit}>
        <label className='label'>Full Name</label>
        <br />
        <input className='input' type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <br />
        <label className='label'>Email</label>
        <br />
        <input className='input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label className='label'>Company Name</label>
        <br />
        <input className='input' type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        <br />
        <label className='Label'>Password</label>
        <br />
        <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label className='Label'>Confirm Password</label>
        <br />
        <input className='input' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <br />
        <button className='button' type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
      <p>Already have an account? <Link to='/login'><u>Log in</u></Link></p>
    </div>
  );
}

export default Signup;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Settings.css';
import Sidenav from '../SideNav/Sidenav';
import SetTopBar from '../SettingTopbar/SetTopbar';

const Settings = () => {
  const [user, setUser] = useState({});
  const [logo, setLogo] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUser();
  }, []);

  const handleLogoChange = (event) => {
    setLogo(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('logo', logo);
      formData.append('password', password);
      formData.append('confirmPassword', confirmPassword);

      const response = await axios.patch('/api/user', formData);
      setUser(response.data);
      setPassword('');
      setConfirmPassword('');
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
        <div className='Settings'>
            <Sidenav />
            
      <div className='mainBody'>
        <SetTopBar/>
      <h1>Settings</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Logo:
          <input type="file" onChange={handleLogoChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
      <h2>User Data</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>Phone Number: {user.phoneNumber}</p>
    </div>
    </div>
    </div>
  );
};

export default Settings;
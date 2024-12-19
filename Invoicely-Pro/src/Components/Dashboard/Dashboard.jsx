import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('access'); // assuming you stored the access token in local storage
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    fetch('http://127.0.0.1:8000/api/users/user/', {
      method: 'GET',
      headers: headers,
    })
    .then(response => response.json())
    .then(data => setUser(data))
    .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* Add other user details as needed */}
    </div>
  );
}

export default Dashboard;
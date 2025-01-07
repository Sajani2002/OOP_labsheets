import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (roles.includes('Manager') && roles.length > 1) {
      setError('Cannot select multiple roles if Manager is selected.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/signup', { username, password, roles });
      // Handle successful sign-up (e.g., redirect to login)
    } catch (err) {
      setError('Username already exists.');
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <div>
        <label>
          <input type="checkbox" onChange={() => setRoles(prevRoles => prevRoles.includes('Manager') ? prevRoles : [...prevRoles, 'Manager'])} />
          Manager
        </label>
        <label>
          <input type="checkbox" onChange={() => setRoles(prevRoles => prevRoles.includes('Customer') ? prevRoles : [...prevRoles, 'Customer'])} />
          Customer
        </label>
        <label>
          <input type="checkbox" onChange={() => setRoles(prevRoles => prevRoles.includes('Supplier') ? prevRoles : [...prevRoles, 'Supplier'])} />
          Supplier
        </label>
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

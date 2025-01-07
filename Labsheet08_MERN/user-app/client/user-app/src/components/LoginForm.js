import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onRoleSelection }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.roles.length > 1) {
        const selectedRole = prompt('Select a role: ' + response.data.roles.join(', '));
        if (response.data.roles.includes(selectedRole)) {
          onRoleSelection(selectedRole);
        } else {
          setError('Invalid role selected.');
        }
      } else {
        onRoleSelection(response.data.roles[0]);
      }
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

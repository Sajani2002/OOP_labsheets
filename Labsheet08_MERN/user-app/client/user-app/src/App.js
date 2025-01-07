import React, { useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setUserRole(role);
    navigate('/dashboard');
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/signup">Sign Up</Link> | 
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm onRoleSelection={handleRoleSelection} />} />
        <Route path="/dashboard" element={userRole ? <Dashboard role={userRole} /> : <p>Please log in to access the dashboard.</p>} />
        <Route path="/" element={<h1>Welcome to the User Management App</h1>} />
      </Routes>
    </div>
  );
};

export default App;

// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Index from './Index'

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [login,setLogin]=useState(false)
  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLogin(true);
    // Clear any previous errors
    setError('');

    // Navigate to Index with the name value as state
  };

  return (
    
    <div className="register-container">
      { !login ? (
      <>
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      </>):(<Index data={name}></Index>)
    }
    </div>
   
  );
};

export default Signup;

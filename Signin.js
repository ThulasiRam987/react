import React, { useState } from 'react';
import './Signin.css'; 
import Index from "./Index.js";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigator=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent form submission from refreshing the page

    // Basic validation
    if (!email || !password || !username) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Logged in successfully!');

    setIsLoggedIn(true); 
   
    navigator("/")
  };

  return (
    <div className="logincontainer">
      {!isLoggedIn ? (
        <>
          <h2>Login Form</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                
                onClick={(e) => setUser(e.target.value)} 
                placeholder="Enter your name"
              />
             
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <Index data={username} />
      )}
    </div>
  );
};

export default Login;

import React from 'react';
import './Index.css'; // Add any custom styles here
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Index = (props) => {
  const navigate=useNavigate();
  const handleLoginClick = () => {
    navigate("/");
  };

  // Function to handle signup button click
  const handleSignupClick = () => {
    navigate("/Signup")
  };
  console.log(props.data)
  return (
    
    <div class="bc">
      <div id="background">
        <div className="navbar">
          
          <ul className="links">
            <li><Link to="/index.html">Home</Link></li>
            <li><Link to="/about.html">About</Link></li>
            <li><Link to="/Service">Services</Link></li>
            <li><Link to="/contact.html">Contact</Link></li>
          </ul>
          <div className="navbar-buttons">
            <button onClick={handleLoginClick} className="login-btn">Login</button>
            <button onClick={handleSignupClick} className="signup-btn">SignUp</button>
          </div>
        </div>

        
      </div>
      <div id='back-ground'>
          
     
        <p className="welcome-text">Hello {props.data} , Welcome to</p>
        <h1 className="fn">FarmNect</h1>
        <h2 className="fof">Friends of Farmer</h2>
      
    </div>
    </div>
    
    
  );
};

export default Index;

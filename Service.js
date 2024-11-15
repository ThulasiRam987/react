import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import img1 from './toolsandequipment.jpg';
import img2 from './vehicles.jpg';
import img3 from './vegand frui.jpg';
const Service = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Choose Our Service <br /> As Your Wish
      </h1>
      <ul className="service-list">
        <li className="service-item">
          <img src={img1} alt="Service Poster 1" className="service-poster" />
          <h2>Tools and Equipments</h2>
          <p>Some description of service 1.</p>
          <Link to="/Tools">View Details</Link>
        </li>
        <li className="service-item">
          <img src={img2} alt="Service Poster 2" className="service-poster" />
          <h2>Vehicles </h2>
          <p>Some description of service 2.</p>
          <Link to="/Vehicles">View Details</Link>
        </li>
        <li className="service-item">
          <img src={img3} alt="Service Poster 3" className="service-poster" />
          <h2>Fruits and Vegitables</h2>
          <p>Some description of service 3.</p>
          <Link to="/Vegetables">View Details</Link>
        
        </li>
      </ul>
    </div>
  );
};

export default Service;

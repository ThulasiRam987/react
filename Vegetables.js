import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Placeholder images for vegetables and fruits
 import appleImg from './fruitImages/apple.jpg';
 import bananaImg from './fruitImages/banana.jpg';
 import carrotImg from './fruitImages/carrot.jpg';
 import tomatoImg from './fruitImages/tomato.jpg';
// import spinachImg from './fruitImages/spinach.jpeg';
// import mangoImg from './fruitImages/mango.jpeg';
// import grapeImg from './fruitImages/grape.jpeg';
// import potatoImg from './fruitImages/potato.jpeg';
// import cucumberImg from './fruitImages/cucumber.jpeg';
// import watermelonImg from './fruitImages/watermelon.jpeg';

let spinachImg = null;
let mangoImg = null;
let grapeImg = null;
let potatoImg = null;
let cucumberImg = null;
let watermelonImg = null;

const Vegetables = () => {
  const nav = useNavigate();
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");

  const setValues = (image, vname) => {
    setPhoto(image);
    setName(vname);
    nav("/Details", { state: { image, vname } });
  };

  return (
    <div>
      <h3>Vegetables and Fruits</h3>
      <ul className="service-list">
        <li className="service-item">
          <img src={appleImg} alt="Apple" className="service-poster" />
          <h2>Apple</h2>
          <p>Rich in vitamins, great for snacking and baking.</p>
          <button onClick={() => setValues(appleImg, "Apple")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={bananaImg} alt="Banana" className="service-poster" />
          <h2>Banana</h2>
          <p>A high-energy fruit that provides essential nutrients.</p>
          <button onClick={() => setValues(bananaImg, "Banana")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={carrotImg} alt="Carrot" className="service-poster" />
          <h2>Carrot</h2>
          <p>Crunchy and nutritious, perfect for salads and juices.</p>
          <button onClick={() => setValues(carrotImg, "Carrot")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={tomatoImg} alt="Tomato" className="service-poster" />
          <h2>Tomato</h2>
          <p>Juicy and versatile, used in cooking and sauces.</p>
          <button onClick={() => setValues(tomatoImg, "Tomato")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={spinachImg} alt="Spinach" className="service-poster" />
          <h2>Spinach</h2>
          <p>Leafy green, packed with iron and other minerals.</p>
          <button onClick={() => setValues(spinachImg, "Spinach")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={mangoImg} alt="Mango" className="service-poster" />
          <h2>Mango</h2>
          <p>Sweet and tropical, known as the "king of fruits".</p>
          <button onClick={() => setValues(mangoImg, "Mango")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={grapeImg} alt="Grape" className="service-poster" />
          <h2>Grape</h2>
          <p>Small, juicy fruits perfect for snacking or juicing.</p>
          <button onClick={() => setValues(grapeImg, "Grape")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={potatoImg} alt="Potato" className="service-poster" />
          <h2>Potato</h2>
          <p>Staple vegetable, versatile for baking, frying, and boiling.</p>
          <button onClick={() => setValues(potatoImg, "Potato")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={cucumberImg} alt="Cucumber" className="service-poster" />
          <h2>Cucumber</h2>
          <p>Hydrating vegetable often used in salads and smoothies.</p>
          <button onClick={() => setValues(cucumberImg, "Cucumber")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={watermelonImg} alt="Watermelon" className="service-poster" />
          <h2>Watermelon</h2>
          <p>Refreshing summer fruit, high in water content.</p>
          <button onClick={() => setValues(watermelonImg, "Watermelon")}>View Detail</button>
        </li>
      </ul>
    </div>
  );
};

export default Vegetables;

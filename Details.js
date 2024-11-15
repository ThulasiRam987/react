import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './Details.css'; // Import the CSS for styling

const Details = () => {
  const location = useLocation();
  const { image, vname } = location.state;
  const productDetails = {
    Shovel: {
      material: 'Steel and Wood',
      price: '₹500',
      weight: '2.5 kg',
      warranty: '1 Year',
      color: 'Silver with Brown Handle',
      dimensions: '120 cm x 20 cm',
      manufacturer: 'FarmTools Co.',
      description: 'Used for digging, lifting, and moving soil.',
    },
    'Garden Fork': {
      material: 'Stainless Steel',
      price: '₹750',
      weight: '1.8 kg',
      warranty: '2 Years',
      color: 'Gray with Wooden Handle',
      dimensions: '110 cm x 15 cm',
      manufacturer: 'GreenLand Supplies',
      description: 'Useful for loosening soil and breaking dirt clods.',
    },
    'Hand Saw': {
      material: 'Carbon Steel',
      price: '₹600',
      weight: '1.2 kg',
      warranty: '1 Year',
      color: 'Black with Red Handle',
      dimensions: '30 cm x 5 cm',
      manufacturer: 'SawMaster Industries',
      description: 'Perfect for cutting small branches and wood.',
    },
    'Weeding Knife': {
      material: 'Tempered Steel',
      price: '₹400',
      weight: '0.5 kg',
      warranty: '6 Months',
      color: 'Silver with Plastic Handle',
      dimensions: '25 cm x 3 cm',
      manufacturer: 'EasyGarden Tools',
      description: 'Special tool for removing weeds from tight spots.',
    },
    'Hand Cultivator': {
      material: 'Iron',
      price: '₹300',
      weight: '1 kg',
      warranty: '1 Year',
      color: 'Green',
      dimensions: '40 cm x 10 cm',
      manufacturer: 'AgriMaster',
      description: 'Ideal for aerating soil and uprooting weeds.',
    },
    Wheelbarrow: {
      material: 'Metal and Rubber',
      price: '₹1500',
      weight: '12 kg',
      warranty: '2 Years',
      color: 'Red',
      dimensions: '140 cm x 60 cm x 50 cm',
      capacity: '80 liters',
      manufacturer: 'FarmPro Equipments',
      description: 'Used to transport soil, compost, and plants.',
    },
    Tractor: {
      material: 'Metal',
      price: '₹500,000',
      weight: '3000 kg',
      warranty: '5 Years',
      color: 'Green',
      dimensions: '4.5m x 2.2m x 2.5m',
      capacity: 'Up to 3000 kg towing capacity',
      manufacturer: 'AgriTech',
      description: 'A powerful machine used for plowing, tilling, and pulling other equipment.',
    },
    Sprayer: {
      material: 'Plastic and Metal',
      price: '₹900',
      weight: '3 kg',
      warranty: '1 Year',
      color: 'Yellow and Black',
      dimensions: '50 cm x 30 cm',
      capacity: '15 liters',
      manufacturer: 'SprayWell',
      description: 'Used to spray pesticides, herbicides, and fertilizers on crops.',
    },
    Harvester: {
      material: 'Metal',
      price: '₹750,000',
      weight: '5000 kg',
      warranty: '3 Years',
      color: 'Blue',
      dimensions: '6m x 2.5m x 3m',
      capacity: 'Up to 5000 kg',
      manufacturer: 'HarvestTech',
      description: 'Machine designed for efficient harvesting of grains and crops.',
    },
    Baler: {
      material: 'Metal',
      price: '₹450,000',
      weight: '3500 kg',
      warranty: '3 Years',
      color: 'Orange',
      dimensions: '5m x 2.5m x 2.8m',
      capacity: 'Compacts bales of 500 kg each',
      manufacturer: 'AgroBale Inc.',
      description: 'Compacts harvested crops like hay into bales for easier handling and storage.',
    },
    Cultivator: {
      material: 'Iron',
      price: '₹20,000',
      weight: '500 kg',
      warranty: '2 Years',
      color: 'Green',
      dimensions: '2m x 1.5m',
      capacity: 'Suitable for small farms',
      manufacturer: 'FarmTools Co.',
      description: 'Prepares soil for planting by breaking up the soil surface.',
    },
    Apple: {
      category: 'Fruit',
      price: '₹150/kg',
      weight: '1 kg approx.',
      color: 'Red or Green',
      taste: 'Sweet and Crisp',
      region: 'Himachal Pradesh',
      description: 'Fresh apples, full of nutrients and a great source of fiber and vitamin C.',
    },
    Mango: {
      category: 'Fruit',
      price: '₹200/kg',
      weight: '1 kg approx.',
      color: 'Yellow or Green',
      taste: 'Sweet and Juicy',
      region: 'Maharashtra',
      description: 'Known as the "King of Fruits," mangoes are delicious and high in vitamins A and C.',
    },
    Potato: {
      category: 'Vegetable',
      price: '₹40/kg',
      weight: '1 kg approx.',
      color: 'Brown',
      taste: 'Earthy and Versatile',
      region: 'Uttar Pradesh',
      description: 'Potatoes are a staple vegetable, ideal for a wide variety of recipes.',
    },
    Carrot: {
      category: 'Vegetable',
      price: '₹60/kg',
      weight: '1 kg approx.',
      color: 'Orange',
      taste: 'Sweet and Crunchy',
      region: 'Punjab',
      description: 'Carrots are rich in beta-carotene and fiber, great for salads and juices.',
    },
  };
  
  const product = productDetails[vname];

  if (!product) {
    return <h3>Product details not found.</h3>;
  }

  const handleConfirm = () => {
    alert("Thank you for Purchase, Your continued support is key to our success.");
  }

  return (
    <div className="details-container">
      <div className="product-card">
        <h3 className="product-name">{vname}</h3>
        <img src={image} alt={vname} className="product-image" />
        <div className="product-info">
          <p><strong>Material:</strong> {product.material}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Weight:</strong> {product.weight}</p>
          <p><strong>Warranty:</strong> {product.warranty}</p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Dimensions:</strong> {product.dimensions}</p>
          {product.capacity && <p><strong>Capacity:</strong> {product.capacity}</p>}
          <p><strong>Manufacturer:</strong> {product.manufacturer}</p>
          <p className="description"><strong>Description:</strong> {product.description}</p>
        </div>
        <button onClick={handleConfirm}>Click to Purchase</button>
      </div>
    </div>
  );
};
export default Details;

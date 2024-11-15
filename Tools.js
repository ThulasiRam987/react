import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Tools.css';
import { Navigate } from 'react-router-dom';


import shovelImg from './agriorientedimages/showel.jpeg';
import gardenForkImg from './agriorientedimages/gardenFork.jpeg';
import handSawImg from './agriorientedimages/handSaw.jpeg';
import weedingKnifeImg from './agriorientedimages/weedingKnife.jpeg';
// import handCultivatorImg from './handCultivator.jpg';
// import wheelbarrowImg from './wheelbarrow.jpg';
// import handTrowelImg from './handTrowel.jpg';
// import pruningShearsImg from './pruningShears.jpg';
// import rakeImg from './rake.jpg';
// import hoeImg from './hoe.jpg';


const Tools = () => {
  const nav=useNavigate();
    let handCultivatorImg=null
let wheelbarrowImg=null
let handTrowelImg =null
let pruningShearsImg=null
let rakeImg=null
let hoeImg =null

const [photo,setphoto]=useState("");
const[name,setname]=useState("");
const setvalues=(image,vname)=>
{
  
setphoto(image);
setname(vname);
console.log(vname)
nav("/Details",{state:{image,vname}});


}
const movetodetails=()=>
  {
    
console.log(name)
  }
  return (
    <div>
      <h3>Agri Tools</h3>
      <ul className="service-list">
        <li className="service-item">
          <img src={shovelImg} alt="Shovel" className="service-poster" />
          <h2>Shovel</h2>
          <p>Used for digging, lifting, and moving soil and other materials.</p>
          <button onClick={() => setvalues(shovelImg, "Shovel")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={gardenForkImg} alt="Garden Fork" className="service-poster" />
          <h2>Garden Fork</h2>
          <p>Useful for loosening soil and breaking up dirt clods.</p>
          <button onClick={() => setvalues(gardenForkImg, "Garden Fork")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={handSawImg} alt="Hand Saw" className="service-poster" />
          <h2>Hand Saw</h2>
          <p>Perfect for cutting small branches and wood in the garden.</p>
          <button onClick={() => setvalues(handSawImg, "Hand Saw")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={weedingKnifeImg} alt="Weeding Knife" className="service-poster" />
          <h2>Weeding Knife</h2>
          <p>Special tool for removing weeds from tight spots.</p>
          <button onClick={() => setvalues(weedingKnifeImg, "Weeding Knife")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={handCultivatorImg} alt="Hand Cultivator" className="service-poster" />
          <h2>Hand Cultivator</h2>
          <p>Ideal for aerating soil and uprooting weeds.</p>
          <button onClick={() => setvalues(handCultivatorImg, "Hand Cultivator")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={wheelbarrowImg} alt="Wheelbarrow" className="service-poster" />
          <h2>Wheelbarrow</h2>
          <p>Used to transport soil, compost, and plants around the garden.</p>
          <button onClick={() => setvalues(shovelImg, "Shovel")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={handTrowelImg} alt="Hand Trowel" className="service-poster" />
          <h2>Hand Trowel</h2>
          <p>Helpful for digging small holes and transplanting plants.</p>
          <button onClick={() => setvalues(shovelImg, "Shovel")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={pruningShearsImg} alt="Pruning Shears" className="service-poster" />
          <h2>Pruning Shears</h2>
          <p>Perfect for trimming shrubs and small branches.</p>
          <button onClick={() => setvalues(shovelImg, "Shovel")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={rakeImg} alt="Rake" className="service-poster" />
          <h2>Rake</h2>
          <p>Used for collecting leaves and debris from the garden.</p>
          <button onClick={() => setvalues(shovelImg, "Shovel")}>view detail</button>
        </li>

        <li className="service-item">
          <img src={hoeImg} alt="Hoe" className="service-poster" />
          <h2>Hoe</h2>
          <p>Useful for cultivating soil and removing weeds.</p>
          <button onClick={() => setvalues(shovelImg, "Shovel")}>view detail</button>
        </li>
      </ul>
    </div>
  );
};

export default Tools;

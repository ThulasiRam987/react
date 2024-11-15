import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// Placeholder images
 import tractorImg from './agriorientedimages/tractor.png';
 import plowImg from './agriorientedimages/plow.webp';
 import sprayerImg from './agriorientedimages/sprayer.jpg';
 import seedDrillImg from './agriorientedimages/seedDrill.jpg';
 import harvesterImg from './agriorientedimages/harvester.jpg';
 import balerImg from './agriorientedimages/baler.jpg';
 import cultivatorImg from './agriorientedimages/cultivator.jpg';
// import thresherImg from './agriorientedimages/thresher.jpeg';
// import rotavatorImg from './agriorientedimages/rotavator.jpeg';
// import mowerImg from './agriorientedimages/mower.jpeg';

let thresherImg =null
let rotavatorImg=null
let mowerImg =null
const Vehicles = () => {
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
      <h3>Agri Vehicles</h3>
      <ul className="service-list">
        <li className="service-item">
          <img src={tractorImg} alt="Tractor" className="service-poster" />
          <h2>Tractor</h2>
          <p>Essential for plowing fields, hauling equipment, and a variety of farm tasks.</p>
          <button onClick={() => setValues(tractorImg, "Tractor")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={plowImg} alt="Plow" className="service-poster" />
          <h2>Plow</h2>
          <p>Used to till and turn over soil, making it suitable for planting crops.</p>
          <button onClick={() => setValues(plowImg, "Plow")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={sprayerImg} alt="Sprayer" className="service-poster" />
          <h2>Sprayer</h2>
          <p>Applies pesticides, herbicides, and fertilizers to crops effectively.</p>
          <button onClick={() => setValues(sprayerImg, "Sprayer")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={seedDrillImg} alt="Seed Drill" className="service-poster" />
          <h2>Seed Drill</h2>
          <p>Ensures uniform seed planting for increased crop yield.</p>
          <button onClick={() => setValues(seedDrillImg, "Seed Drill")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={harvesterImg} alt="Harvester" className="service-poster" />
          <h2>Harvester</h2>
          <p>Harvests crops like wheat and corn, reducing manual labor.</p>
          <button onClick={() => setValues(harvesterImg, "Harvester")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={balerImg} alt="Baler" className="service-poster" />
          <h2>Baler</h2>
          <p>Compacts harvested crops into bales for easier transportation.</p>
          <button onClick={() => setValues(balerImg, "Baler")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={cultivatorImg} alt="Cultivator" className="service-poster" />
          <h2>Cultivator</h2>
          <p>Prepares soil for planting by breaking up the soil surface.</p>
          <button onClick={() => setValues(cultivatorImg, "Cultivator")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={thresherImg} alt="Thresher" className="service-poster" />
          <h2>Thresher</h2>
          <p>Separates grain from stalks, useful for post-harvest processing.</p>
          <button onClick={() => setValues(thresherImg, "Thresher")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={rotavatorImg} alt="Rotavator" className="service-poster" />
          <h2>Rotavator</h2>
          <p>Mixes and aerates soil, ideal for crop bed preparation.</p>
          <button onClick={() => setValues(rotavatorImg, "Rotavator")}>View Detail</button>
        </li>

        <li className="service-item">
          <img src={mowerImg} alt="Mower" className="service-poster" />
          <h2>Mower</h2>
          <p>Used to trim grass and plants, keeping fields maintained.</p>
          <button onClick={() => setValues(mowerImg, "Mower")}>View Detail</button>
        </li>
      </ul>
    </div>
  );
};

export default Vehicles;

import React from 'react';
import '../styles/ClaimTypes.css';
import residentialIcon from '../assets/House-Vector.png';  // Asegúrate de tener el icono correcto
import commercialIcon from '../assets/Building-Vector.png';  // Asegúrate de tener el icono correcto
import hurricaneImage from '../assets/Hurricane.png';  // Corregir la extensión
import fireImage from '../assets/Fire.png';  // Corregir la extensión
import waterImage from '../assets/Water.png';  // Corregir la extensión
import hailImage from '../assets/Hail.png';  // Corregir la extensión
import electricalImage from '../assets/Electrical.png';  // Corregir la extensión
import floodImage from '../assets/Flood.png';  // Corregir la extensión

function ClaimTypes() {
  return (
    <section className="claim-types">
      <div className="claim-types-header">
        <h2>CLAIM TYPES</h2>
        <p>No matter the property type, the nature of the policy, the amount of damage in question, or even if a previous claim has already been filed, we know how to handle them all. We handle all types of insurance claims, including but not limited to:</p>
      </div>

      <div className="claim-types-content">
        {/* Tarjetas de texto a la izquierda */}
        <div className="claim-types-left">
          <div className="claim-card">
            <img src={residentialIcon} alt="Residential" className="icon" />
            <h3>Residential</h3>
            <p>We handle all types of residential insurance claims, including water damage, fire damage, and more.</p>
          </div>

          <div className="claim-card">
            <img src={commercialIcon} alt="Commercial" className="icon" />
            <h3>Commercial</h3>
            <p>Our team of expert public adjusters can assist with commercial insurance claims of all sizes, ensuring maximum payout for your loss.</p>
          </div>
        </div>

        {/* Imágenes a la derecha */}
        <div className="claim-types-right">
          <div className="claim-image">
            <img src={hurricaneImage} alt="Hurricane" />
            <h3>Hurricane</h3>
          </div>
          <div className="claim-image">
            <img src={fireImage} alt="Fire" />
            <h3>Fire</h3>
          </div>
          <div className="claim-image">
            <img src={waterImage} alt="Water" />
            <h3>Water</h3>
          </div>
          <div className="claim-image">
            <img src={hailImage} alt="Hail" />
            <h3>Hail</h3>
          </div>
          <div className="claim-image">
            <img src={electricalImage} alt="Electrical" />
            <h3>Electrical</h3>
          </div>
          <div className="claim-image">
            <img src={floodImage} alt="Flood" />
            <h3>Flood</h3>
          </div>
        </div>
      </div>

      <div className="claim-types-button">
        <button className="custom-button">LEARN MORE</button>
      </div>
    </section>
  );
}

export default ClaimTypes;

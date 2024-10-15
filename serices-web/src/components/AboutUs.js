import React from 'react';
import '../styles/AboutUs.css';
import aboutImage from '../assets/about-image.jpg'; // Asegúrate de tener la imagen en esta ruta

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2>ABOUT US</h2>
        <h3>Expertise, Dedication, and Compassion in Every Insurance Claim</h3>
        <p>
          Founded in 2022 by insurance industry veterans Ivan Hernandez and Peter Ramos, IP Adjusting Group is driven by a mission to simplify the insurance claims process for homeowners. Our expert public adjusters embody our core values of expertise, dedication, and compassion, ensuring unparalleled service and support.
        </p>
        <p>
          We strive to make the insurance claims experience stress-free by providing honest, transparent, and efficient solutions tailored to each client’s unique situation. Acting as your trusted advocate, our team tirelessly pursues the compensation you deserve. Our confidence in delivering results is so strong that if you don’t get paid, neither do we.
        </p>
        <p>
          Experience our commitment firsthand with a FREE initial inspection of your home damage. Our dedicated professionals will assess your property at no cost to you, providing the support and guidance needed to navigate insurance claims and secure a fair settlement.
        </p>
        <button className="custom-button">SCHEDULE FREE INSPECTION</button>
      </div>
      <div className="about-us-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </section>
  );
}

export default AboutUs;

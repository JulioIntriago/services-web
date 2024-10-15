import React from 'react';
import Button from './Button';
import '../styles/Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Maximizing Your <br></br> Insurance Claims</h1>
        <p>Our Public Adjusters Will Fight for you</p>
        <Button text="Schedule Free Inspection" />
      </div>
    </section>
  );
}

export default Banner;

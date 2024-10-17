import React from 'react';
import Button from './Button';
import '../styles/Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Property damage?<br></br> We can help!</h1>
        <h4>We Assist Property Owners In Obtaining The Funds To Which They Are Legally Entitled.</h4>
        <Button text="BOOK YOUR FREE INSPECTION" />
      </div>
    </section>
  );
}

export default Banner;

import React from 'react';
import '../styles/Button.css';

function Button({ text }) {
  return (
    <button className="custom-button">
      {text}
    </button>
  );
}

export default Button;

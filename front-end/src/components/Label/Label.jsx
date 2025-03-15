import React from 'react';
import './Label.css';

const Label = ({ children }) => {
  return (
    <div className="label-container">
      <label>{children}</label>
    </div>
  );
};

export default Label;

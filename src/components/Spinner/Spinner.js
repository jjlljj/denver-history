import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-animation">
      <figure className="icon-cards">
        <div className="icon-cards__content">
          <div className="icon-cards__item"></div>
          <div className="icon-cards__item"></div>
          <div className="icon-cards__item"></div>
        </div>
      </figure>
    </div>
  );
};

export default Spinner;
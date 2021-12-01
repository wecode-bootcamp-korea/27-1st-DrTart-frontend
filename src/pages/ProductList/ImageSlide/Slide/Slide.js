import React from 'react';
import './Slide.scss';

const Slide = ({ slideId, imgUrl }) => {
  return (
    <div className="slide">
      <div className="slideContainer">
        <img src={imgUrl} alt={`slide${slideId}`} className="slideImg" />
      </div>
    </div>
  );
};

export default Slide;

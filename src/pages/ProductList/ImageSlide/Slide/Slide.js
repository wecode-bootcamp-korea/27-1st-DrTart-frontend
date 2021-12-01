import React from 'react';
import './Slide.scss';

const Slide = ({ slideId, imgUrl }) => {
  return (
    <div className="slide">
      <img src={imgUrl} alt={`slide${slideId}`} className="slideImg" />
    </div>
  );
};

export default Slide;

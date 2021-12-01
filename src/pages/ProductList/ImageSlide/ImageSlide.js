import React, { useState } from 'react';
import { SLIDE_DATA } from './SlideData';
import './imageSlide.scss';
import SlickDot from './SlickDot/SlickDot';

const ImageSlide = () => {
  const [countSlide, setCountSlide] = useState(0);

  const changeSlide = slideId => {
    setCountSlide(slideId);
  };
  console.log(countSlide);

  return (
    <div className="imageSlide">
      <div className="slideContainer">
        <div className="slideList" />
        <ul className="slickDotWrapper">
          {SLIDE_DATA.map(el => (
            <SlickDot key={el.id} sildeId={el.id} changeSlide={changeSlide} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlide;

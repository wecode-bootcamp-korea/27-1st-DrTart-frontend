import React, { useState } from 'react';
import SlickDot from './SlickDot/SlickDot';
import Slide from './Slide/Slide';
import { SLIDE_DATA } from './SlideData';
import './imageSlide.scss';

const ImageSlide = () => {
  const [countSlide, setCountSlide] = useState(0);

  const changeSlide = slideId => {
    setCountSlide(slideId);
  };

  return (
    <div className="imageSlide">
      <div className="slideList">
        {SLIDE_DATA.filter(el => el.id === countSlide).map(el => (
          <Slide key={el.id} slideId={el.id} imgUrl={el.imageUrl} />
        ))}
      </div>
      <ul className="slickDotWrapper">
        {SLIDE_DATA.map(el => (
          <SlickDot
            key={el.id}
            currentSlideId={countSlide}
            slideId={el.id}
            changeSlide={changeSlide}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageSlide;

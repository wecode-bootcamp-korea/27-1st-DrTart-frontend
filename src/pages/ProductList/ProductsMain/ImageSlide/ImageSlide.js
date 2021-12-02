import React, { useState } from 'react';
import SlickDot from './SlickDot/SlickDot';
import Slide from './Slide/Slide';
import { SLIDE_DATA } from './SlideData';
import './imageSlide.scss';

const ImageSlide = () => {
  const [currentSlideId, setCurrentSlideId] = useState(0);

  const changeSlide = slideId => {
    setCurrentSlideId(slideId);
  };

  return (
    <div className="imageSlide">
      <div className="slideList">
        {SLIDE_DATA.filter(({ id }) => id === currentSlideId).map(slide => (
          <Slide key={slide.id} slideId={slide.id} imgUrl={slide.imageUrl} />
        ))}
      </div>
      <ul className="slickDotWrapper">
        {SLIDE_DATA.map(({ id }) => (
          <SlickDot
            key={id}
            currentSlideId={currentSlideId}
            slideId={id}
            changeSlide={() => changeSlide(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageSlide;

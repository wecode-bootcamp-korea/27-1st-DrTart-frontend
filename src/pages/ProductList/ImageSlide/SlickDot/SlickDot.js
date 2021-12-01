import React from 'react';
import './SlickDot.scss';

function SlickDot({ currentSlideId, slideId, changeSlide }) {
  return (
    <li className="slickDot">
      <button
        className={`dotButton ${
          currentSlideId === slideId ? 'clickedDot' : ''
        }`}
        onClick={() => changeSlide(slideId)}
      />
    </li>
  );
}

export default SlickDot;

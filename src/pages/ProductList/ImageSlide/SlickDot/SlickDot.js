import React from 'react';
import './SlickDot.scss';

function SlickDot({ slideId, changeSlide }) {
  return (
    <li className="slickDot">
      <button className="dotButton" onClick={() => changeSlide(slideId)} />
    </li>
  );
}

export default SlickDot;

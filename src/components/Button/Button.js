import React from 'react';
import '../Button/Button.scss';

const Button = ({ btnTitle, btnOnClick }) => {
  return (
    <button className="button" type="button" onClick={btnOnClick}>
      {btnTitle}
    </button>
  );
};
export default Button;

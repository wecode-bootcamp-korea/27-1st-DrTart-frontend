import React from 'react';
import '../Button/Button.scss';

const Button = ({ children, btnOnClick }) => {
  return (
    <div className="btnWrap">
      <button className="button" type="button" onClick={btnOnClick}>
        <span className="cross" />
        <p className="btnTitle">{children}</p>
      </button>
    </div>
  );
};
export default Button;

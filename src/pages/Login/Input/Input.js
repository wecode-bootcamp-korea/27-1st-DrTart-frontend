import React from 'react';
import '../Input/Input.scss';

const Input = ({ isAlertPop, placeholder, inputRef, alertWord }) => {
  return (
    <div className="Input">
      <input
        className={isAlertPop ? 'alertInput' : 'loginInput'}
        type="email"
        placeholder={placeholder}
        ref={inputRef}
      />
      {isAlertPop && (
        <span className="alertWord">{alertWord}를 입력하세요.</span>
      )}
    </div>
  );
};

export default Input;

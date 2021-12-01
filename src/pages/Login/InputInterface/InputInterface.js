import React from 'react';
import './InputInterface.scss';

const InputInterface = ({ isAlertPop, placeholder, inputRef, alertWord }) => {
  return (
    <div className="inputInterface">
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

export default InputInterface;

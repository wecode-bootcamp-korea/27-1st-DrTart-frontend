/* eslint-disable */

import React from 'react';
import '../Input/Input.scss';

const Input = props => {
  return (
    <>
      <input
        className={
          props.isAlertPop ? 'loginInput' && 'alertInput' : 'loginInput'
        }
        type="email"
        placeholder={props.placeholder}
        ref={props.inputRef}
      />
      {props.isAlertPop && (
        <span className="alertWord">{props.alertWord}를 입력하세요.</span>
      )}
    </>
  );
};

export default Input;

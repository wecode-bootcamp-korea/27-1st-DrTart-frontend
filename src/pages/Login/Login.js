/* eslint-disable */

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '../Login/Login.scss';
import Input from './Input/Input';

function Login() {
  const idInputRef = useRef();
  const pwInputRef = useRef();
  const loginData = {};
  const [isAlertPopId, setIsAlertPopId] = useState(false);
  const [isAlertPopPw, setIsAlertPopPw] = useState(false);

  const validateIdBtn = () => {
    loginData['id'] = idInputRef.current.value;
    const idValue = loginData['id'];
    const isIdValid =
      idValue.includes('@') && idValue.length > 2 ? true : false;

    return isIdValid;
  };
  const validatePwBtn = () => {
    loginData['pw'] = pwInputRef.current.value;
    const pwValue = loginData['pw'];
    const isPwValid = pwValue.length > 4 ? true : false;

    return isPwValid;
  };

  const alertEachValid = () => {
    if (!validateIdBtn() && validatePwBtn()) {
      setIsAlertPopId(true);
      setIsAlertPopPw(false);
    } else if (validateIdBtn() && !validatePwBtn()) {
      setIsAlertPopId(false);
      setIsAlertPopPw(true);
    } else if (!validateIdBtn() && !validatePwBtn()) {
      setIsAlertPopId(true);
      setIsAlertPopPw(true);
    }
  };

  const Navigate = useNavigate();

  const goToMain = () => {
    validateIdBtn() && validatePwBtn()
      ? Navigate('/product_list')
      : alertEachValid();
  };
  const goToJoin = () => {
    Navigate('/signup');
  };
  return (
    <div className="Login">
      <h1 className="loginTitle">로그인</h1>
      <div className="loginBox">
        <form className="loginForm">
          <Input
            name="id"
            inputRef={idInputRef}
            placeholder="아이디 또는 이메일"
            isAlertPop={isAlertPopId}
            alertWord="아이디"
          />
          <Input
            name="pw"
            inputRef={pwInputRef}
            placeholder="비밀번호"
            isAlertPop={isAlertPopPw}
            alertWord="비밀번호"
          />
        </form>
        <div className="findBtn">
          <span className="findId">아이디 찾기</span>
          <span className="findPw">비밀번호 찾기</span>
        </div>
        <div className="btnWrap">
          <button className="loginBtn" type="button" onClick={goToMain}>
            로그인
          </button>
          <button className="joinBtn" type="button" onClick={goToJoin}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '../Login/Login.scss';
import InputInterface from './InputInterface/InputInterface';

function Login() {
  const idInputRef = useRef();
  const pwInputRef = useRef();
  const [isAlertPopId, setIsAlertPopId] = useState(false);
  const [isAlertPopPw, setIsAlertPopPw] = useState(false);

  const validateId = () => {
    const idValue = idInputRef.current.value;
    const isIdValid = idValue.includes('@') && idValue.length > 2;

    return isIdValid;
  };

  const validatePw = () => {
    const pwValue = pwInputRef.current.value;
    const isPwValid = pwValue.length > 4;

    return isPwValid;
  };

  const alertEachValid = () => {
    setIsAlertPopId(!validateId());
    setIsAlertPopPw(!validatePw());
  };

  const navigate = useNavigate();

  const goToMain = () => {
    validateId() && validatePw() ? navigate('/product_list') : alertEachValid();
  };

  const goToJoin = () => {
    navigate('/signup');
  };

  return (
    <div className="login">
      <h1 className="loginTitle">로그인</h1>
      <div className="loginBox">
        <form className="loginForm">
          <InputInterface
            name="id"
            inputRef={idInputRef}
            placeholder="아이디 또는 이메일"
            isAlertPop={isAlertPopId}
            alertWord="아이디"
          />
          <InputInterface
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

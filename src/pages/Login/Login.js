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
    const idValidRegex = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/g;
    const idValue = idInputRef.current.value;
    const isIdValid = !!idValue.match(idValidRegex);

    return isIdValid;
  };

  const validatePw = () => {
    const pwValidRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
    const pwValue = pwInputRef.current.value;
    const isPwValid = !!pwValue.match(pwValidRegex);

    return isPwValid;
  };

  const alertEachValid = () => {
    setIsAlertPopId(!validateId());
    setIsAlertPopPw(!validatePw());
  };

  const navigate = useNavigate();

  const onValidation = () => {
    validateId() && validatePw() ? navigate('/product_list') : alertEachValid();
  };

  const onSignIn = () => {
    onValidation();
  };

  // const onSignIn = () => {
  //   fetch('http://10.58.6.3:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInputRef.current.value,
  //       password: pwInputRef.current.value,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => result.message === 'SUCCESS' && onValidation());
  // };

  const onSignUp = () => {
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
            type="email"
            isAlertPop={isAlertPopId}
            alertWord="아이디를 입력하세요."
          />
          <InputInterface
            name="pw"
            inputRef={pwInputRef}
            placeholder="비밀번호"
            type="password"
            isAlertPop={isAlertPopPw}
            alertWord="비밀번호를 입력하세요."
          />
        </form>
        <div className="findBtn">
          <span className="findId">아이디 찾기</span>
          <span className="findPw">비밀번호 찾기</span>
        </div>
        <div className="btnWrap">
          <button className="loginBtn" type="button" onClick={onSignIn}>
            로그인
          </button>
          <button className="joinBtn" type="button" onClick={onSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

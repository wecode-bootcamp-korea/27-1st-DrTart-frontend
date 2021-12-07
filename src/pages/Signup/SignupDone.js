import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button/Button';

export default function SignupDone() {
  const navigate = useNavigate();
  function goToMain() {
    navigate('/');
  }
  return (
    <div>
      <div className="signupWrap">
        <ul className="registerStep">
          <li className="stepItem">01 정보입력</li>
          <li className="stepItem">02 가입완료</li>
        </ul>
        <h2 className="signupTitle">회원가입</h2>
        <div className="doneBox">
          <p>닥터타르트 회원가입이 완료되었습니다.</p>
          <Button btnOnClick={goToMain}>쇼핑하기</Button>
        </div>
      </div>
    </div>
  );
}

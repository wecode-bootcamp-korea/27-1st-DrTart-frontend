import React from 'react';

import './Signup.scss';

export default function Signup() {
  return (
    <div className="signupWrap">
      <div className="registerStep">
        <ul>
          <li>01 정보입력</li>
          <li>02 가입완료</li>
        </ul>
      </div>
      <h2 className="signupTitle">회원가입</h2>
      <div className="section">
        <div className="joinTerms">
          <h3>이용약관 동의</h3>
          <div className="termsBox">
            <p>
              회원가입 및 정상적인 서비스 이용을 위해
              <br />
              아래 약관을 읽어보시고, 동의 여부를 결정해 주세요.
              <br />
              필수 약관에 동의하셔야 회원가입이 가능합니다.
            </p>
          </div>
          <p className="termsAllCheck">
            <i class="fas fa-check"></i> &nbsp;필수 항목 및 선택 항목 모두
            동의합니다.
          </p>
          <div className="termsCheckWrap">
            <ul>
              <li>
                <input type="checkbox" />
                [필수] 서비스 이용약관 동의
              </li>
              <li>
                <input type="checkbox" />
                [필수] 개인정보 수집·이용동의
              </li>
              <li>
                <input type="checkbox" />
                [선택] 광고성 정보 이메일 수신 동의
              </li>
              <li>
                <input type="checkbox" />
                [선택] 광고성 정보 SMS 수신 동의
              </li>
              <li>
                <input type="checkbox" />
                [선택] 광고성 정보 우편물 수신 동의
              </li>
            </ul>
            <span className="checkTip">
              * 선택 항목은 동의하지 않더라도 회원가입이 가능합니다.
            </span>
          </div>
        </div>
        <ul className="formWrap">
          <li>
            <h3>회원정보 입력</h3>
          </li>
          <li>
            <div className="email">
              <input type="text" className="id" placeholder="이메일" />
              &nbsp;&nbsp;&nbsp;@&nbsp;&nbsp;&nbsp;
              <input type="text" className="domain" placeholder="도메인" />
            </div>
            <button className="emailValidBtn">중복확인</button>
          </li>
          <li>
            <input
              type="password"
              className="password"
              placeholder="패스워드 : 영문/숫자 조합으로 10~20자 이내"
            />
          </li>
          <li>
            <input
              type="password"
              className="passwordRe"
              placeholder="패스워드를 다시 입력해 주세요."
            />
          </li>
          <li>
            <span className="signTip">
              * 만 14세 미만은 회원 가입 및 서비스 이용이 불가합니다.
            </span>
          </li>
          <li>
            <button className="submitBtn" type="button">
              가입하기
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import TERMS_DATA from './SignupData';
import './Signup.scss';

export default function Signup() {
  const [memberInput, setMemberInput] = useState({
    email: '',
    password: '',
    passwordRe: '',
    address: '',
    isVegan: false,
  });
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordReValid, setPasswordReValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);
  const [checkedList, setCheckedList] = useState([]);

  const { email, password, passwordRe, address, isVegan } = memberInput;

  const onCheckedAll = checked => {
    const newCheckedList = checked ? TERMS_DATA.map(term => term.id) : [];
    setCheckedList(newCheckedList);
  };

  const onCheckedElement = (checked, termId) => {
    checked
      ? setCheckedList([...checkedList, termId])
      : setCheckedList(checkedList.filter(el => el !== termId));
  };

  function handleMemberInput(e) {
    const { name, value } = e.target;
    name === 'isVegan'
      ? setMemberInput({ ...memberInput, isVegan: e.target.checked })
      : setMemberInput({ ...memberInput, [name]: value });
  }

  function validateEmail(e) {
    const value = e.target.value;
    if (!value) {
      setEmailValid(true);
    } else if (!value.includes('@')) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  function validatePassword(e) {
    const value = e.target.value;
    if (value.length < 10 || value.length > 20) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  function validatePasswordRe(e) {
    const value = e.target.value;
    value !== memberInput.password
      ? setPasswordReValid(true)
      : setPasswordReValid(false);
  }

  function validateAddress(e) {
    const value = e.target.value;
    !value ? setAddressValid(true) : setAddressValid(false);
  }

  const isSameLength = checkedList.length === TERMS_DATA.length;

  return (
    <div className="signupWrap">
      <ul className="registerStep">
        <li className="stepItem">01 정보입력</li>
        <li className="stepItem">02 가입완료</li>
      </ul>
      <h2 className="signupTitle">회원가입</h2>
      <div className="section">
        <div className="joinTerms">
          <h3 className="termsTitle">이용약관 동의</h3>
          <div className="termsBox">
            <p className="termsContent">
              회원가입 및 정상적인 서비스 이용을 위해
              <br />
              아래 약관을 읽어보시고, 동의 여부를 결정해 주세요.
              <br />
              필수 약관에 동의하셔야 회원가입이 가능합니다.
            </p>
          </div>
          <label
            className={`blockCheckBox ${
              checkedList.length === 5 ? 'checkActive' : ''
            }`}
          >
            <input
              type="checkbox"
              className="allCheck"
              onChange={e => onCheckedAll(e.target.checked)}
              checked={checkedList.length === 0 ? false : isSameLength}
            />
            <i class="fas fa-check" /> &nbsp;필수 항목 및 선택 항목 모두
            동의합니다.
          </label>
          <div className="termsCheckWrap">
            <ul className="termsCheckList">
              {TERMS_DATA.map(term => {
                return (
                  <li key={term.id}>
                    <input
                      type="checkbox"
                      onChange={e =>
                        onCheckedElement(e.target.checked, term.id)
                      }
                      checked={checkedList.includes(term.id) ? true : false}
                    />
                    {term.content}
                  </li>
                );
              })}
            </ul>
            <span className="checkTip">
              * 선택 항목은 동의하지 않더라도 회원가입이 가능합니다.
            </span>
          </div>
        </div>
        <form onChange={handleMemberInput}>
          <ul className="formWrap">
            <li>
              <h3 className="formTitle">회원정보 입력</h3>
            </li>
            <li>
              <div className="email">
                <input
                  type="email"
                  className={`formInput email ${
                    emailValid ? 'validBorder' : ''
                  }`}
                  name="email"
                  placeholder="이메일"
                  value={email}
                  onBlur={validateEmail}
                />
              </div>
              <button type="button" className="emailValidBtn">
                중복확인
              </button>
            </li>
            {emailValid && (
              <li>
                <span className="validText">이메일 형식을 확인 해주세요.</span>
              </li>
            )}
            <li>
              <input
                type="password"
                name="password"
                className={`formInput password ${
                  passwordValid ? 'validBorder' : null
                }`}
                placeholder="패스워드 : 영문/숫자 조합으로 10~20자 이내"
                value={password}
                onBlur={validatePassword}
              />
            </li>
            {passwordValid && (
              <li>
                <span className="validText">
                  공백없이 10~20자로 입력 해주세요.
                </span>
              </li>
            )}
            <li>
              <input
                type="password"
                name="passwordRe"
                className={`formInput passwordRe ${
                  passwordReValid ? 'validBorder' : null
                }`}
                placeholder="패스워드를 다시 입력해 주세요."
                value={passwordRe}
                onBlur={validatePasswordRe}
              />
            </li>
            {passwordReValid && (
              <li>
                <span className="validText">
                  입력된 비밀번호와 일치하지 않습니다.
                </span>
              </li>
            )}
            <li>
              <input
                type="text"
                name="address"
                className={`formInput address ${
                  addressValid ? 'validBorder' : null
                }`}
                placeholder="주소를 입력해주세요."
                value={address}
                onBlur={validateAddress}
              />
            </li>
            {addressValid && (
              <li>
                <span className="validText">배송주소를 입력해주세요.</span>
              </li>
            )}
            <li>
              <label
                className={`blockCheckBox ${isVegan ? 'checkActive' : ''}`}
              >
                <input
                  type="checkbox"
                  name="isVegan"
                  className="veganCheckBox"
                />
                <i class="fas fa-check" /> &nbsp;비건이시라면 체크해주세요!
              </label>
            </li>
            <li>
              <span className="signTip">
                * 만 14세 미만은 회원 가입 및 서비스 이용이 불가합니다.
              </span>
            </li>
            <li>
              <button type="button" className="submitBtn">
                가입하기
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

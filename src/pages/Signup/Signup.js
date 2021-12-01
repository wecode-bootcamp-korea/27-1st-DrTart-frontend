import React, { useState } from 'react';
import './Signup.scss';
import SignupTerms from './SignupTerms';
import TERMS_DATA from './SignupData';

export default function Signup() {
  const [memberInput, setMemberInput] = useState({
    id: '',
    domain: '',
    password: '',
    passwordRe: '',
    address: '',
  });
  const [idValidOnce, setIdValidOnce] = useState(false);
  const [domainValid, setDomainValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordReValid, setPasswordReValid] = useState(false);
  const [addressValid, setAddressValid] = useState(false);

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const { id, domain, password, passwordRe, address } = memberInput;
  const email = `${id}@${domain}`;

  function handleMemberInput(e) {
    const { name, value } = e.target;
    setMemberInput({ ...memberInput, [name]: value });
  }

  function idValidBlurOnce(e) {
    const value = e.target.value;
    if (!value) {
      setIdValidOnce(true);
    } else {
      setIdValidOnce(false);
    }
  }

  function domainValidBlur(e) {
    const value = e.target.value;
    if (!value || !value.includes('.')) {
      setDomainValid(true);
    } else {
      setDomainValid(false);
    }
  }

  function passwordValidBlur(e) {
    const value = e.target.value;
    if (value.length < 10 || value.length > 20) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  function passwordReValidBlur(e) {
    const value = e.target.value;
    if (value !== memberInput.password) {
      setPasswordReValid(true);
    } else {
      setPasswordReValid(false);
    }
  }

  function addressValidBlur(e) {
    const value = e.target.value;
    if (!value) {
      setAddressValid(true);
    } else {
      setAddressValid(false);
    }
  }

  function submit() {
    if (idValidBlurOnce && domainValid && passwordValid && passwordReValid) {
      // fetch('API주소', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: email,
      //     password: password,
      //     address: address,
      //   }),
      // }).then(response => response.json());
      // .then(message => console.log('결과: ', message));
    } else {
      return;
    }
  }

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
            <i class="fas fa-check" /> &nbsp;필수 항목 및 선택 항목 모두
            동의합니다.
          </p>
          <div className="termsCheckWrap">
            <ul>
              {TERMS_DATA.map((el, index) => {
                return (
                  <SignupTerms
                    key={index}
                    type={el.type}
                    content={el.content}
                  />
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
              <h3>회원정보 입력</h3>
            </li>
            <li>
              <div className="email">
                <input
                  type="text"
                  className={`id ${idValidOnce ? 'validBorder' : null}`}
                  name="id"
                  placeholder="이메일"
                  value={id}
                  onBlur={idValidBlurOnce}
                />
                &nbsp;&nbsp;&nbsp;@&nbsp;&nbsp;&nbsp;
                <input
                  type="text"
                  name="domain"
                  className={`domain ${domainValid ? 'validBorder' : null}`}
                  placeholder="도메인"
                  value={domain}
                  onBlur={domainValidBlur}
                />
              </div>
              <button type="button" className="emailValidBtn">
                중복확인
              </button>
            </li>
            {idValidOnce && (
              <li>
                <span className="validText">이메일을 입력해주세요.</span>
              </li>
            )}
            {domainValid && (
              <li>
                <span className="validText">
                  이메일 주소 형식에 맞지 않습니다. 다시 확인해주세요
                </span>
              </li>
            )}
            <li>
              <input
                type="password"
                name="password"
                className={`password ${passwordValid ? 'validBorder' : null}`}
                placeholder="패스워드 : 영문/숫자 조합으로 10~20자 이내"
                value={password}
                onBlur={passwordValidBlur}
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
                className={`passwordRe ${
                  passwordReValid ? 'validBorder' : null
                }`}
                placeholder="패스워드를 다시 입력해 주세요."
                value={passwordRe}
                onBlur={passwordReValidBlur}
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
                className={`address ${addressValid ? 'validBorder' : null}`}
                placeholder="주소를 입력해주세요."
                value={address}
                onBlur={addressValidBlur}
              />
            </li>
            {addressValid && (
              <li>
                <span className="validText">배송주소를 입력해주세요.</span>
              </li>
            )}
            <li>
              <span className="signTip">
                * 만 14세 미만은 회원 가입 및 서비스 이용이 불가합니다.
              </span>
            </li>
            <li>
              <button type="button" className="submitBtn" onClick={submit}>
                가입하기
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

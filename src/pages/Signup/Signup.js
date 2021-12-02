import React, { useState, useCallback } from 'react';
import './Signup.scss';
import TERMS_DATA from './SignupData';

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

  //전체 체크
  const onCheckedAll = useCallback(checked => {
    if (checked) {
      const checkedListArray = [];

      TERMS_DATA.forEach(term => checkedListArray.push(term.id));
      setCheckedList(checkedListArray);
    } else {
      setCheckedList([]);
    }
  }, []);

  //개별 체크
  const onCheckedElement = useCallback(
    (checked, termId) => {
      if (checked) {
        setCheckedList([...checkedList, termId]);
      } else {
        setCheckedList(checkedList.filter(el => el !== termId));
      }
    },
    [checkedList]
  );

  const { email, password, passwordRe, address } = memberInput;

  function handleMemberInput(e) {
    const { name, value } = e.target;
    if (name === 'isVegan') {
      setMemberInput({ ...memberInput, isVegan: e.target.checked });
    } else {
      setMemberInput({ ...memberInput, [name]: value });
    }
  }

  function emailValidBlur(e) {
    const value = e.target.value;
    if (!value) {
      setEmailValid(true);
    } else if (!value.includes('@')) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
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
    return !value ? setAddressValid(true) : setAddressValid(false);
  }

  // function submit() {
  //   if (!emailValid && !passwordValid && !passwordReValid && isVegan !== null) {
  //     console.log('완료');
  //   } else {
  //     console.log('다시');
  //   }
  // }
  const isSameLength = checkedList.length === TERMS_DATA.length ? true : false;
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
          <input
            type="checkbox"
            id="allChk"
            className="allCheck"
            onChange={e => onCheckedAll(e.target.checked)}
            checked={checkedList.length === 0 ? false : isSameLength}
          />
          <label for="allChk" className="termsAllCheck">
            <i class="fas fa-check" /> &nbsp;필수 항목 및 선택 항목 모두
            동의합니다.
          </label>
          <div className="termsCheckWrap">
            <ul>
              {TERMS_DATA.map(term => {
                return (
                  <li key={term.id}>
                    <input
                      key={term.id}
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
              <h3>회원정보 입력</h3>
            </li>
            <li>
              <div className="email">
                <input
                  type="email"
                  className={`email ${emailValid ? 'validBorder' : null}`}
                  name="email"
                  placeholder="이메일"
                  value={email}
                  onBlur={emailValidBlur}
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
              <input
                type="checkbox"
                name="isVegan"
                id="veganCheck"
                className="veganCheckBox"
              />
              <label className="veganBtn" for="veganCheck">
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

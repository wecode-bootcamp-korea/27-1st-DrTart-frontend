import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { ReactComponent as Login } from '../../assets/login.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as HamburgerBar } from '../../assets/HamburgerBar.svg';
import { ReactComponent as Titlelogo } from '../../assets/Titlelogo.svg';
import './Nav.scss';
import { ReactComponent as Xbutton } from '../../assets/Xbutton.svg';

const Nav = () => {
  const [isExtended, setIsExtended] = useState(false);
  const [isButtonValid, setIsButtonValid] = useState(false);

  const onNavToggled = () => {
    setIsExtended(!isExtended);
  };

  let token = localStorage.getItem('TOKEN') || '';
  const navigate = useNavigate();

  const goToCart = () => {
    if (token) {
      navigate('/order/cart');
    } else {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  const onLoginButton = () => {
    if (token) {
      localStorage.clear();
      setIsButtonValid(() => !isButtonValid);
      alert('로그아웃 되었습니다');
    } else if (!token) {
      navigate('/login');
      setIsButtonValid(() => isButtonValid);
    }
  };

  useEffect(() => {
    token ? setIsButtonValid(true) : setIsButtonValid(false);
  }, [token]);

  const closedNav = () => {
    setIsExtended(false);
  };

  return (
    <nav className="sideNav">
      <div className={`basicNav ${isExtended && 'toggledNav'}`}>
        <Link to="/">
          <div className={isExtended && 'animationRight'}>
            <button className="navButton home ">
              <Logo />
            </button>
          </div>
        </Link>
        <button
          className="navButton hamburgerBar"
          type="checkbox"
          onClick={onNavToggled}
        >
          {isExtended ? <Xbutton /> : <HamburgerBar />}
        </button>
        <div className="dummyElement" />
        <div className="navButtonContainer">
          <button className="navButton" onClick={goToCart}>
            <p className="description">
              장바구니
              <div className="div" />
            </p>
            <Cart />
          </button>

          <button
            className={isButtonValid ? 'navButton signIn' : 'navButton signOut'}
            onClick={onLoginButton}
          >
            <p className="description">
              로그인
              <div className="div" />
            </p>
            {isButtonValid ? <Logout /> : <Login />}
          </button>
        </div>
      </div>
      <nav className={`extensionNav ${isExtended ? '' : 'toggledNav'}`}>
        <div className="extensionNavContainer">
          <Link to="/">
            <h1 className="tartLogo">
              <Titlelogo />
            </h1>
          </Link>
          <ul className="extensionNavButtonWrapper">
            <Link to="/product-list">
              <li className="extensionNavButton" onClick={closedNav}>
                제품
              </li>
            </Link>
            <li className="extensionNavButton" onClick={closedNav}>
              브랜드
            </li>
            <li className="extensionNavButton" onClick={closedNav}>
              스토리
            </li>
          </ul>
        </div>
      </nav>
      <div className={`maskOff ${isExtended && 'maskOn'}`} />
    </nav>
  );
};

export default Nav;

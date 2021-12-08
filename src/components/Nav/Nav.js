import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import './Nav.scss';

const Nav = () => {
  const [isExtended, setIsExtended] = useState(false);

  const onNavToggled = () => {
    setIsExtended(!isExtended);
  };

  return (
    <nav className="sideNav">
      <div className={`basicNav ${isExtended && 'toggledNav'}`}>
        <Link to="/">
          <button className="navButton home">
            <i className="fas fa-plus" />
          </button>
        </Link>

        <button className="navButton" type="checkbox" onClick={onNavToggled}>
          <i className="fas fa-bars" />
        </button>
        <div className="dummyElement" />
        <div className="navButtonContainer">
          <Link to="/order/cart">
            <button className="navButton cart">
              <img src="images/cart.svg" alt="" />
            </button>
          </Link>
          <Link to="/login">
            <button className="navButton signInOut">
              <i className="fas fa-sign-out-alt" />
            </button>
          </Link>
        </div>
      </div>
      <nav className={`extensionNav ${isExtended ? '' : 'toggledNav'}`}>
        <div className="extensionNavContainer">
          <h1 className="tartLogo">Dr.Tart+</h1>
          <ul className="extensionNavButtonWrapper">
            <Link to="/product-list">
              <li className="extensionNavButton">제품</li>
            </Link>
            <li className="extensionNavButton">브랜드</li>
            <li className="extensionNavButton">스토리</li>
          </ul>
        </div>
      </nav>
      <div className={`maskOff ${isExtended && 'maskOn'}`} />
    </nav>
  );
};

export default Nav;

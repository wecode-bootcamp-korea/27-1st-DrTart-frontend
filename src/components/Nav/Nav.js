import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [isExtended, setIsExtended] = useState(false);

  const onNavToggled = () => {
    setIsExtended(!isExtended);
  };

  return (
    <nav className="Nav">
      <div className={`sideNav ${isExtended ? 'toggledNav' : ''}`}>
        <button className="navButton home">
          <i className="fas fa-plus" />
        </button>
        <button
          className="navButton toggle"
          type="checkbox"
          onClick={onNavToggled}
        >
          <i className="fas fa-bars" />
        </button>
        <div className="dummyElement" />
        <div className="navButtonContainer">
          <button className="navButton">
            <i className="fas fa-shopping-cart" />
          </button>
          <button className="navButton">
            <i className="fas fa-search" />
          </button>
          <Link to="/login">
            <button className="navButton signInOut">
              <i className="fas fa-sign-out-alt" />
            </button>
          </Link>
        </div>
      </div>
      <nav className={`extentionNav ${isExtended ? '' : 'toggledNav'}`}>
        <div className="extentionNavContainer">
          <h1 className="tartLogo">Dr.Tart+</h1>
          <ul className="extentionNavButtonWrapper">
            <Link to="/product_list">
              <li className="extentionNavButton">제품</li>
            </Link>
            <li className="extentionNavButton">마이페이지</li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Nav;

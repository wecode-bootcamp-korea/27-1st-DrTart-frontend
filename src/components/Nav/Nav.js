import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onExtention = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="sideHeader">
      <nav className={`sideNav ${isToggled ? '' : 'toggledNav'}`}>
        <button className="navButton">
          <i className="fas fa-plus" />
        </button>
        <button
          className="navButton toggle"
          type="checkbox"
          onClick={onExtention}
        >
          <i className="fas fa-bars" />
        </button>
        <div className="blockElement" />
        <div className="navButtonContainer">
          <button className="navButton">
            <i className="fas fa-shopping-cart" />
          </button>
          <button className="navButton">
            <i className="fas fa-search" />
          </button>
          <Link to="/login">
            <button className="navButton">
              <i className="fas fa-sign-out-alt" />
            </button>
          </Link>
        </div>
      </nav>
      <nav className={`extentionNav ${isToggled ? 'toggledNav' : ''}`}>
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
    </header>
  );
};

export default Nav;

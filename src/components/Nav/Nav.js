import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <header className="sideHeader">
      <nav className="sideNav">
        <button className="navButton">
          <i className="fas fa-plus" />
        </button>
        <button className="navButton">
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
          <button className="navButton">
            <i className="fas fa-sign-out-alt" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContentWrapper">
        <div className="footerInfoContainer">
          <p>DrTart</p>
        </div>
        <div className="footerIconContainer">
          <button className="socialButton">
            <i className="fab fa-github" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

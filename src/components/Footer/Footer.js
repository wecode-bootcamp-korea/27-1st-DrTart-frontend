import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContentWrapper">
        <div className="footerInfoContainer">
          <h3 className="title">Dr.Tart</h3>
          <div className="subject">
            <h4 className="subTitle">개발기간</h4>
            <p className="description">2021/11/29~2021/12/10</p>

            <h4 className="subTitle">팀원</h4>
            <p className="description">FE : 길도연 홍유진 김상훈</p>
            <p className="description">BE : 성주호 박정현 유민혁</p>
          </div>
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

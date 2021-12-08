import React from 'react';
import '../Main/Main.scss';

const Main = () => {
  return (
    <div className="mainPage">
      <div className="introduce">
        <h3 className="subTitle">WECODE 1st PROJECT</h3>
        <h1 className="mainTitle">#닥터타르트</h1>
        <h1 className="mainTitle">#Dr.Tart</h1>
        <p className="description">
          우리를 당땡기게 만드는 일상의 자극들로부터 잠시나마 떠나
          <br />
          닥터타르트가 준비한 [건강한 디저트 솔루션]으로 당신에게 딱 맞는
          디저트를 처방해드립니다!
        </p>
      </div>
      <div className="back">
        <div className="background">
          <div className="mask" />
          <img
            className="backgroundImg"
            src="images/slide-image3.jpg"
            alt="main"
          />
        </div>
      </div>
    </div>
  );
};
export default Main;

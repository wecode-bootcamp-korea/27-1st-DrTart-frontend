import React from 'react';
import './OrderConfirm.scss';

const OrderConfirm = () => {
  return (
    <div className="order">
      <div className="pageTitleArea">
        <div className="progressNav">
          <ul className="progress">
            <li className="step">
              <p>01 장바구니</p>
            </li>
            <li className="step">
              <p>02 결제진행</p>
            </li>
            <li className="step">
              <p>03 주문완료</p>
              <span className="line" />
            </li>
          </ul>
        </div>
        <div className="pageTitle">
          <h1 className="orderTitle">주문 완료</h1>
        </div>
      </div>
      <div className="pageContent">x</div>
    </div>
  );
};

export default OrderConfirm;

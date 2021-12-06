import React from 'react';
import { useParams } from 'react-router-dom';
import './Order.scss';

const Order = () => {
  const { pageType } = useParams();

  return (
    <div className="order">
      <div className="pageTitleArea">
        <div className="progressNav">
          <ul className="progress">
            <li className="stepOne">
              <p>01 장바구니</p>
              {pageType === 'cart' && <span className="line" />}
            </li>
            <li className="stepTwo">
              <p>02 결제진행</p>
              {pageType === 'check' && <span className="line" />}
            </li>
            <li className="stepThree">
              <p>03 주문완료</p>
            </li>
          </ul>
        </div>
        <div className="pageTitle">
          <div className="title">
            <h1 className="orderTitle">
              {pageType === 'cart' && '장바구니'}
              {pageType === 'check' && '결제진행'}
            </h1>
          </div>
        </div>
      </div>
      <div className="pageContent">
        <div className="goodsList">
          <table className="goodsTable">
            <thead className="goodsTableHead">
              <th className="tableHeadElement tableHeadImage" />
              <th className="tableHeadElement tableHeadGoods">상품</th>
              <th className="tableHeadElement tableHeadQuantity">수량</th>
              <th className="tableHeadElement tableHeadPrice">금액</th>
              <th className="tableHeadElement tableHeadButton" />
            </thead>
            <tbody className="goodsTableBody">
              <tr className="goodsContainer">
                <td className="tableBodyImage">
                  <img className="goodsImage" alt="" src="/images/choco.jpg" />
                </td>
                <td className="tableBodyGoods">상품</td>
                <td className="tableBodyQuantity">수량</td>
                <td className="tableBodyPrice">금액</td>
                <td className="tableBodyButton" />
              </tr>
            </tbody>
          </table>
        </div>
        <div className="orderTotal">
          <div className="sec">
            <dl className="pdtPrice">
              <dt>총 상품 금액</dt>
              <dd>9000</dd>
            </dl>
          </div>
          <div className="sec">
            <dl className="payPrice">
              <dt>최종 결제 금액</dt>
              <dd className="payPriceNum">9000</dd>
            </dl>
          </div>
          <div className="sec">
            <div className="selectBox">
              <button className="selectedValue">신용카드</button>
              <ul className="valueList">
                <li>신용카드</li>
                <li>카카오페이</li>
                <li>네이버페이</li>
                <li>휴대폰결제</li>
                <li>포인트</li>
              </ul>
            </div>
            <div className="mustCheck">
              <input className="checkBox" type="checkbox" />
              <label className="label" htmlFor="agree">
                구매하실 상품의 판매조건을 명확히 확인하였으며, 이에 동의합니다.
                <br />
                (전자상거래법 제8조 2항)
              </label>
            </div>
          </div>
          <div className="secBtn">
            <button className="btn">결제하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;

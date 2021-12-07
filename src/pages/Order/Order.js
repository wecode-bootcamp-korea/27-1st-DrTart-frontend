import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Goods from './Goods/Goods';
import './Order.scss';

const Order = () => {
  const [cartList, setCartList] = useState([]);
  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const { pageType } = useParams();

  const fetchCartData = async () => {
    const data = await fetch('/data/cart.json');
    const res = await data.json();
    setCartList(res);
  };

  const deleteGoods = id => {
    console.log(id);
    setCartList(cartList.filter(product => product.id !== id));
  };

  const deleteAllGoods = () => {
    setCartList([]);
  };

  useEffect(() => {
    (async () => {
      setIsOrderLoading(true);
      await fetchCartData();
      setIsOrderLoading(false);
    })();
    fetchCartData();
  }, []);

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
          <h1 className="orderTitle">
            {pageType === 'cart' && '장바구니'}
            {pageType === 'check' && '결제진행'}
          </h1>
        </div>
      </div>
      <div className="pageContent">
        <section className="productSection">
          <table className="goodsTable">
            <thead className="goodsTableHead">
              <th className="tableHeadElement tableHeadImage" />
              <th className="tableHeadElement tableHeadGoods">
                <p>상품</p>
              </th>
              <th className="tableHeadElement tableHeadQuantity">
                <p>수량</p>
              </th>
              <th className="tableHeadElement tableHeadPrice">
                <p>금액</p>
              </th>
              <th className="tableHeadElement tableHeadButton" />
            </thead>
            {!isOrderLoading &&
              cartList.map(
                ({ id, korean_name, thumbnail_image_url, price }) => (
                  <Goods
                    key={id}
                    id={id}
                    korean_name={korean_name}
                    thumbnail_image_url={thumbnail_image_url}
                    price={price}
                    deleteGoods={deleteGoods}
                  />
                )
              )}
          </table>
          <div className="allDeleteButtonWrapper">
            <button className="allDeleteButton">장바구니 비우기</button>
          </div>
        </section>
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

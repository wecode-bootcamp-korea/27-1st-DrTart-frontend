import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Goods from './Goods/Goods';
// import { API_ADDRESS } from '../ProductList/apiConfig';
import './Order.scss';

const Order = () => {
  const [cartList, setCartList] = useState([]);
  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const { pageType } = useParams();

  const fetchCartData = useCallback(async () => {
    // const data = await fetch(API_ADDRESS.order_cart, {
    //   method: 'POST',
    //   body: JSON.stringify({}),
    // });
    const data = await fetch('/data/cart.json');
    const res = await data.json();
    setCartList(res);
    res.forEach(({ price, quantity }) => {
      setTotalPrice(prev => prev + price * quantity);
    });
  }, []);

  useEffect(() => {
    (async () => {
      setIsOrderLoading(true);
      await fetchCartData();
      setIsOrderLoading(false);
    })();
  }, [fetchCartData]);

  const deleteGoods = id => {
    setCartList(cartList.filter(product => product.id !== id));
  };

  const deleteAllGoods = () => {
    setCartList([]);
  };

  const adjustTotalPrice = (type, price) => {
    setTotalPrice(prev => (type === 'minus' ? prev - price : prev + price));
  };

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
              cartList.map(product => (
                <Goods
                  key={product.id}
                  product={product}
                  pageType={pageType}
                  deleteGoods={deleteGoods}
                  adjustTotalPrice={adjustTotalPrice}
                />
              ))}
          </table>
          {pageType === 'cart' && (
            <div className="allDeleteButtonContainer">
              <div className="allDeleteButtonWrapper">
                <Button btnOnClick={deleteAllGoods}>장바구니 비우기</Button>
              </div>
            </div>
          )}
        </section>
        <div className="orderTotal">
          <div className="orderInfoContainer">
            <dl className="pdtPrice">
              <dt>총 상품 금액</dt>
              <dd>{totalPrice}</dd>
            </dl>
          </div>
          <div className="orderInfoContainer">
            <dl className="payPrice">
              <dt>최종 결제 금액</dt>
              <dd className="payPriceNum">{totalPrice}</dd>
            </dl>
          </div>
          {pageType !== 'cart' && (
            <div className="orderInfoContainer">
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
                  구매하실 상품의 판매조건을 명확히 확인하였으며, 이에
                  동의합니다.
                  <br />
                  (전자상거래법 제8조 2항)
                </label>
              </div>
            </div>
          )}

          <div className="orderCheckButtonWrapper">
            <Button>
              {pageType === 'cart' ? '선택상품 주문하기' : '결제하기'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;

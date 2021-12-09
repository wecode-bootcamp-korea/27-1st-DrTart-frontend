import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Goods from './Goods/Goods';
import { API_ADDRESS } from '../../apiConfig';
import './Order.scss';

const Order = () => {
  const [cartList, setCartList] = useState([]);
  const [isOrderLoading, setIsOrderLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const { pageType } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  let token = localStorage.getItem('TOKEN') || '';

  const fetchCartData = useCallback(async () => {
    const data = await fetch(API_ADDRESS.order_cart, {
      headers: { Authorization: token },
    });
    const res = await data.json();
    if (res.cart_info) {
      setCartList(() => res.cart_info);
      setTotalPrice(() => 0);
      res.cart_info.forEach(({ price, quantity }) => {
        setTotalPrice(prev => prev + price * quantity);
      });
    } else {
      setCartList(() => []);
    }
  }, [token]);

  useEffect(() => {
    if (pageType === 'cart') {
      (async () => {
        setIsOrderLoading(true);
        await fetchCartData();
        setIsOrderLoading(false);
      })();
    } else {
      setCartList(location.state.cartList);
    }
  }, [fetchCartData, pageType, location]);

  const adjustCart = (id, quantity) => {
    let adjustedList = [];
    let differ = 0;
    let productId = 0;
    cartList.forEach(product => {
      if (product.cart_id === id) {
        differ = quantity - product.quantity;
        productId = product.product_id;
        adjustedList.push({ ...product, quantity: quantity });
      } else {
        adjustedList.push({ ...product });
      }
    });
    setCartList(adjustedList);

    fetch(API_ADDRESS.order_cart, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: differ,
      }),
    });
  };

  const adjustTotalPrice = (type, price) => {
    setTotalPrice(prev => (type === 'minus' ? prev - price : prev + price));
  };

  const deleteGoods = id => {
    const [targetToDelete] = cartList.filter(product => product.cart_id === id);
    adjustTotalPrice('minus', targetToDelete.price * targetToDelete.quantity);
    setCartList(cartList.filter(product => product.cart_id !== id));

    fetch(API_ADDRESS.order_cart, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        cart: id,
      }),
    });
  };

  const deleteAllGoods = async () => {
    const targetIndex = cartList.map(product => product.cart_id);
    for (let index of targetIndex) {
      deleteGoods(index);
    }
    setCartList([]);
  };

  const onOrder = async () => {
    if (isTermsChecked) {
      const orderTable = cartList.map(product => ({
        product_id: product.product_id,
        quantity: product.quantity,
      }));

      const data = await fetch(API_ADDRESS.order_checkout, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: JSON.stringify(orderTable),
      });

      const res = await data.json();

      navigate(`/order/confirm?order=${res.message}`);
    } else {
      window.alert('약관에 동의해주셔야 결제가 가능합니다.');
    }
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
          {cartList.length ? (
            !isOrderLoading && (
              <table className="goodsTable">
                <thead className="goodsTableHead">
                  <tr>
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
                  </tr>
                </thead>
                {cartList.map(product => (
                  <Goods
                    key={product.cart_id}
                    product={product}
                    pageType={pageType}
                    deleteGoods={deleteGoods}
                    adjustTotalPrice={adjustTotalPrice}
                    adjustCart={adjustCart}
                  />
                ))}
              </table>
            )
          ) : (
            <div className="nullContentTable">
              <p>장바구니에 담긴 상품이 없습니다.</p>
            </div>
          )}
          {pageType === 'cart' && (
            <div className="cartButtonContainer">
              <div className="cartButtonWrapper">
                {cartList.length ? (
                  <Button btnOnClick={deleteAllGoods}>장바구니 비우기</Button>
                ) : (
                  <Link to="/product-list">
                    <Button>쇼핑 계속하기</Button>
                  </Link>
                )}
              </div>
            </div>
          )}
        </section>
        <div className="orderTotal">
          <div className="orderInfoContainer">
            <dl className="pdtPrice">
              <dt>총 상품 금액</dt>
              <dd>{totalPrice}원</dd>
            </dl>
          </div>
          <div className="orderInfoContainer">
            <dl className="payPrice">
              <dt>최종 결제 금액</dt>
              <dd className="payPriceNum">{totalPrice}원</dd>
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
                <input
                  className="checkBox"
                  type="checkbox"
                  value={isTermsChecked}
                  onChange={() => setIsTermsChecked(prev => !prev)}
                />
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
            {pageType === 'cart' ? (
              <Link to="/order/check" state={{ cartList }}>
                <Button>장바구니 상품 주문</Button>
              </Link>
            ) : (
              <Button btnOnClick={onOrder}>결제하기</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;

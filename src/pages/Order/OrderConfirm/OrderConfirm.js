import React, { useEffect, useState } from 'react';
// import { API_ADDRESS } from '../../../apiConfig';
import './OrderConfirm.scss';
import OrderSheet from './OrderSheet/OrderSheet';

const OrderConfirm = () => {
  const [orderSheet, setOrderSheet] = useState([]);
  const { user, address, order_items } = orderSheet;
  const [totalPrice, setTotalPrice] = useState(0);
  // let token = localStorage.getItem('TOKEN') || '';

  const fetchOrderSheetData = async () => {
    // const data = await fetch(API_ADDRESS.order_checkout, {
    //   headers: { Authorization: token },
    // });
    const data = await fetch('/data/order_confirm.json');
    const res = await data.json();
    setOrderSheet(res.order_list[0]);
    res.order_list[0].order_items.forEach(({ quantity, price }) =>
      setTotalPrice(prev => prev + quantity * price)
    );
  };

  useEffect(() => {
    fetchOrderSheetData();
  }, []);

  return (
    <div className="orderConfirm">
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
          <h1 className="confirmTitle">주문 완료</h1>
        </div>
      </div>
      <div className="pageContent">
        <div className="orderConfirmMessage">
          <h3>
            <p className="userName">{user}</p>님에게 처방된 디저트가 배송될
            예정입니다!
          </h3>
        </div>
        <div className="orderAddressMessage">
          <h3>
            배송지 : <p className="address">{address}</p>
          </h3>
        </div>
        <div className="sheetContainer">
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
              </tr>
            </thead>
            {order_items &&
              order_items.map(product => (
                <OrderSheet key={product.product_id} product={product} />
              ))}
          </table>
        </div>
        <div className="totalPrice">
          <h3 className="priceContents">
            총<p className="price"> {Math.round(totalPrice)} </p> 원
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirm;

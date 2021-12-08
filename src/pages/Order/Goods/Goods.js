import React, { useState } from 'react';
import NumBtn from '../../../components/ProductInfoBox/NumBtn/NumBtn';
import './Goods.scss';

const Goods = ({
  product: { id, korean_name, thumbnail_image_url, price, quantity },
  pageType,
  deleteGoods,
  adjustTotalPrice,
  adjustCart,
}) => {
  const adjustQuantity = operator => {
    if (operator === 'minus') {
      if (quantity > 1) {
        adjustCart(id, quantity - 1);
        adjustTotalPrice(operator, price);
      }
    } else if (operator === 'plus') {
      adjustCart(id, quantity + 1);
      adjustTotalPrice(operator, price);
    }
  };

  return (
    <tbody className="goods">
      <tr className="tableRow">
        <td className="tableBody image">
          <div className="imageContainer">
            <img
              className="goodsImage"
              alt="example_goods"
              src={thumbnail_image_url}
            />
          </div>
        </td>
        <td className="tableBody goods">
          <p>{korean_name}</p>
        </td>
        <td className="tableBody quantity">
          {pageType === 'cart' ? (
            <NumBtn
              minusOne={() => adjustQuantity('minus')}
              plusOne={() => adjustQuantity('plus')}
              numValue={quantity}
            />
          ) : (
            quantity
          )}
        </td>
        <td className="tableBody price">
          <p>{price * quantity}원</p>
        </td>
        <td className="tableBody goodsButton">
          {pageType === 'cart' && (
            <button className="deleteButton" onClick={() => deleteGoods(id)}>
              <p>x</p>
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default Goods;

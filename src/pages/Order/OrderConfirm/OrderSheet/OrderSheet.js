import React from 'react';
import './OrderSheet.scss';

const OrderSheet = ({ product: { quantity, product } }) => {
  return (
    <tbody className="orderSheet">
      <tr className="tableRow">
        <td className="tableBody image">
          <div className="imageContainer">
            <img
              className="goodsImage"
              alt="example_goods"
              src="/images/choco.png"
            />
          </div>
        </td>
        <td className="tableBody">
          <p>{product}</p>
        </td>
        <td className="tableBody">
          <p>{quantity}개</p>
        </td>
      </tr>
    </tbody>
  );
};

export default OrderSheet;

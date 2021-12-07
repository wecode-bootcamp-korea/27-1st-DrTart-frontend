import React, { useState } from 'react';
import NumBtn from '../../../components/ProductInfoBox/NumBtn/NumBtn';
import './Goods.scss';

const Goods = () => {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  return (
    <tbody className="goods">
      <tr className="tableRow">
        <td className="tableBody image">
          <div className="imageContainer">
            <img
              className="goodsImage"
              alt="example_goods"
              src="/images/choco.jpg"
            />
          </div>
        </td>
        <td className="tableBody goods">
          <p>상품명</p>
        </td>
        <td className="tableBody quantity">
          <NumBtn
            minusOne={() =>
              setCurrentQuantity(prev => (prev - 1 > 0 ? prev - 1 : 1))
            }
            plusOne={() => setCurrentQuantity(prev => prev + 1)}
            numValue={currentQuantity}
          />
        </td>
        <td className="tableBody price">금액</td>
        <td className="tableBody button">x</td>
      </tr>
    </tbody>
  );
};

export default Goods;

import React, { useState } from 'react';
import NumBtn from '../../../components/ProductInfoBox/NumBtn/NumBtn';
import './Goods.scss';

const Goods = ({
  product: { id, korean_name, thumbnail_image_url, price, quantity },
  deleteGoods,
  adjustTotalPrice,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const adjustQuantity = operator => {
    if (operator === 'minus') {
      if (currentQuantity > 1) {
        setCurrentQuantity(prev => prev - 1);
        adjustTotalPrice(operator, price);
      }
    } else if (operator === 'plus') {
      setCurrentQuantity(prev => prev + 1);
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
          <NumBtn
            minusOne={() => adjustQuantity('minus')}
            plusOne={() => adjustQuantity('plus')}
            numValue={currentQuantity}
          />
        </td>
        <td className="tableBody price">
          <p>{price * currentQuantity}원</p>
        </td>
        <td className="tableBody goodsButton">
          <button className="deleteButton" onClick={() => deleteGoods(id)}>
            <p>x</p>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Goods;

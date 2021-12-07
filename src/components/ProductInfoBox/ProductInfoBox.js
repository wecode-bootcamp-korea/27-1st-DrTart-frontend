import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NumBtn from '../ProductInfoBox/NumBtn/NumBtn';
import Button from '../Button/Button';
import '../ProductInfoBox/ProductInfoBox.scss';

const ProductInfoBox = ({
  category,
  productId,
  koreanName,
  price,
  sugarLevel,
  isVegan,
  cartAndLikeBtn,
}) => {
  const [numValue, setNumValue] = useState(1);

  const minusOne = () => {
    numValue === 1 ? setNumValue(1) : setNumValue(numValue - 1);
  };

  const plusOne = () => {
    setNumValue(numValue + 1);
  };

  const totalPrice = price * numValue;

  const navigate = useNavigate();

  const addToCart = () => {
    fetch('API주소', {
      method: 'POST',
      body: JSON.stringify({
        productId: productId,
        korean_name: koreanName,
        price: totalPrice,
      }),
    })
      .then(response => response.json())
      .then(result => result.message === 'SUCCESS')
      .then(navigate('./'));
  };

  return (
    <div className="productInfoBox">
      <div className="stickerWrap">
        <div className="stickerBest">BEST</div>
        {isVegan && <div className="stickerVegan">VEGAN</div>}
      </div>
      <h3 className="productName">{koreanName}</h3>
      <p className="infoTag">{category}</p>
      <div className="price">
        <p className="originPrice">{Math.round(price)}</p>
      </div>
      <ul className="tabBar">
        <li className="infoToBuy">구매정보</li>
      </ul>
      <div className="tabContents">
        <dl className="list">
          <dt className="title">수량</dt>
          <dd className="defines">
            <NumBtn minusOne={minusOne} plusOne={plusOne} numValue={numValue} />
          </dd>
        </dl>
        <dl className="list">
          <dt className="title">당도</dt>
          <dt>{sugarLevel}</dt>
        </dl>
      </div>
      <div className="totalPriceInfo">
        <p className="totalPriceTitle">총 구매금액</p>
        <p className="totalPrice">{Math.round(price * numValue)}</p>
      </div>
      <div className="btnWrap">
        <Link
          to={{
            pathname: '/order',
            state: {
              productId: productId,
              koreanName: koreanName,
              price: price,
            },
          }}
        >
          <Button>바로구매</Button>
        </Link>
        <button className="productCartButton">
          <i className="fas fa-shopping-cart" />
        </button>
        <button className="productLikeButton">
          <i className="far fa-heart" />
        </button>
      </div>
    </div>
  );
};

export default ProductInfoBox;

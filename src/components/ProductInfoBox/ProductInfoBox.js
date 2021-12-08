import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NumBtn from '../ProductInfoBox/NumBtn/NumBtn';
import Button from '../Button/Button';
import { API_ADDRESS } from '../../pages/ProductList/apiConfig';
import '../ProductInfoBox/ProductInfoBox.scss';

const ProductInfoBox = ({
  productId,
  koreanName,
  sugarLevel,
  price,
  infoTag,
  isVegan,
  cartAndLikeBtn,
  thumbnailImg,
}) => {
  const [numValue, setNumValue] = useState(1);
  let token = localStorage.getItem('TOKEN');

  const minusOne = () => {
    numValue === 1 ? setNumValue(1) : setNumValue(numValue - 1);
  };

  const plusOne = () => {
    setNumValue(numValue + 1);
  };

  const totalPrice = price * numValue;

  const navigate = useNavigate();

  const addToCart = () => {
    if (token) {
      fetch(`${API_ADDRESS.order_cart}`, {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: numValue,
        }),
      })
        .then(response => response.json())
        .then(result => result.message === 'SUCCESS')
        .then(navigate('/order/cart'));
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  return (
    <div className="productInfoBox">
      <div className="stickerWrap">
        <div className="stickerBest">BEST</div>
        {isVegan && <div className="stickerVegan">VEGAN</div>}
      </div>
      <h3 className="productName">{koreanName}</h3>
      <p className="infoTag">{infoTag}</p>
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
        <p className="totalPrice">{Math.round(totalPrice)}</p>
      </div>
      <div className="btnWrap">
        <div className="buyBtn">
          <Link
            to="/order/check"
            state={{
              koreanName: koreanName,
              quantity: numValue,
              price: price,
              thumbnailImg: thumbnailImg,
            }}
          >
            <Button point={true}>바로구매</Button>
          </Link>
        </div>
        {cartAndLikeBtn && (
          <div className="cartAndLikeBtn">
            <Button btnOnClick={addToCart}>
              <i className="fas fa-shopping-cart" />
            </Button>
            <Button>
              <i className="far fa-heart" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfoBox;

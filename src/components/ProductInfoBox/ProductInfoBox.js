import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NumBtn from '../ProductInfoBox/NumBtn/NumBtn';
import Button from '../Button/Button';
import { API_ADDRESS } from '../../apiConfig';
import '../ProductInfoBox/ProductInfoBox.scss';

const ProductInfoBox = ({
  productId,
  koreanName,
  sugarLevel,
  price,
  infoTag,
  isVegan,
  is_like_True,
  cartAndLikeBtn,
  thumbnailImg,
  updateProductLiked,
}) => {
  const [numValue, setNumValue] = useState(1);
  let token = localStorage.getItem('TOKEN');

  const minusOne = () => {
    numValue === 1 ? setNumValue(1) : setNumValue(numValue - 1);
  };

  const plusOne = () => {
    setNumValue(numValue + 1);
  };

  const tokenValid = () => {
    return token ? '' : alert('로그인이 필요합니다.');
  };
  const goCheckValid = token ? '/order/check' : '/login';

  const totalPrice = price * numValue;

  const navigate = useNavigate();

  function goToCart() {
    if (window.confirm('장바구니로 이동하시겠습니까?')) navigate('/order/cart');
    else return;
  }

  const addToCart = () => {
    if (token) {
      fetch(API_ADDRESS.order_cart, {
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
        .then(result => result.message === 'SUCCESS' && goToCart());
    } else {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  const onLikeButton = () => {
    fetch(API_ADDRESS.products_like, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: productId,
      }),
    });
    updateProductLiked(productId);
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
            to={goCheckValid}
            state={{
              cartList: [
                {
                  product_id: productId,
                  korean_name: koreanName,
                  quantity: numValue,
                  price: price,
                  thumbnail_image_url: thumbnailImg,
                },
              ],
            }}
          >
            <Button point={true} btnOnClick={tokenValid}>
              바로구매
            </Button>
          </Link>
        </div>
        {cartAndLikeBtn && (
          <div className="cartAndLikeBtn">
            <Button btnOnClick={addToCart}>
              <i className="fas fa-shopping-cart" />
            </Button>
            <button
              className={is_like_True ? 'likeButton isLiked' : 'likeButton'}
              onClick={onLikeButton}
            >
              <i className="far fa-heart" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfoBox;

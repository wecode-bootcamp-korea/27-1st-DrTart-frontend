import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { API_ADDRESS } from '../../../apiConfig';
import './Product.scss';

const Product = ({ el, id, btnOnClick, onLikeButton, isLike }) => {
  let token = localStorage.getItem('TOKEN');

  const addCartElement = () => {
    fetch(API_ADDRESS.order_cart, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      }),
    });
  };

  return (
    <div className="product">
      <div className="stickerWrap">
        <div className="stickerBest">BEST</div>
        {el.vegan_or_not && <div className="stickerVegan">VEGAN</div>}
      </div>
      <div className="productContainer">
        <Link to={`/product/${id}`} className="goToProductDetail">
          <div className="productImageWrapper">
            <img
              className="productImage"
              alt={el.korean_name}
              src={el.thumbnail_image_url}
            />
          </div>
          <div className="pdtInfo">
            <p className="infoTag">{el.description}</p>
            <h3 className="productName">{el.korean_name}</h3>
            <div className="price">
              <p className="productPrice">{Math.round(el.price)}</p>
            </div>
          </div>
        </Link>
        <div className="productButtonContainer">
          <Button btnOnClick={event => btnOnClick(el)} point={true}>
            바로구매
          </Button>
          <div className="smallBtn" onClick={addCartElement}>
            <button className="productCartButton">
              <i className="fas fa-shopping-cart" />
            </button>
            <button
              className={
                isLike ? 'productLikeButton isLiked' : 'productLikeButton'
              }
              onClick={onLikeButton}
            >
              <p className="likeNum">
                좋아요 수
                <div className="div" />
              </p>
              <i className="far fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

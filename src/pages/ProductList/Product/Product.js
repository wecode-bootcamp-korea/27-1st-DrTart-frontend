import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { API_ADDRESS } from '../../../apiConfig';
import './Product.scss';

const Product = ({ el, id, btnOnClick, updateLike }) => {
  let token = localStorage.getItem('TOKEN');

  const navigate = useNavigate();

  function goToCart() {
    if (window.confirm('장바구니로 이동하시겠습니까?')) navigate('/order/cart');
    else return;
  }

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
    }).then(goToCart);
  };

  const onLikeButton = () => {
    fetch(API_ADDRESS.products_like, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: id,
      }),
    });
    updateLike(id);
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
          <div className="smallBtn">
            <button className="productCartButton" onClick={addCartElement}>
              <i className="fas fa-shopping-cart" />
            </button>
            <button
              className={
                el.is_like_True
                  ? 'productLikeButton isLiked'
                  : 'productLikeButton'
              }
              onClick={onLikeButton}
            >
              <p className="likeNum">
                {el.like_num}
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

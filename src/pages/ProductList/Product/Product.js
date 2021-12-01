import React from 'react';
import './Product.scss';

const Product = () => {
  return (
    <div className="product">
      <div className="productContainer">
        <div className="productImageWrapper">
          <img
            className="productImage"
            alt="example"
            src="/images/tartexam.jpg"
          />
        </div>
        <div className="productName">예제 타르트</div>
        <div className="productPrice">50원</div>
      </div>
      <div className="productEffectContainer">
        <div className="effectContents">
          <div className="productButtonContainer">
            <button className="productBuyButton">구매하기</button>
            <button className="productCartButton">
              <i class="fas fa-shopping-cart" />
            </button>
            <button className="productLikeButton">
              <i class="far fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

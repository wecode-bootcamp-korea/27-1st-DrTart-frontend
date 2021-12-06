import React from 'react';
import './Product.scss';

const Product = ({ productName, productPrice }) => {
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
        <div className="productName">{productName}</div>
        <div className="productPrice">{productPrice}원</div>
        <div className="productButtonContainer">
          <button className="productBuyButton">구매하기</button>
          <button className="productCartButton">
            <i className="fas fa-shopping-cart" />
          </button>
          <button className="productLikeButton">
            <i className="far fa-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

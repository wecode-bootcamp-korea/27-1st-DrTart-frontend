import React, { useState } from 'react';
import './Product.scss';

const Product = ({ productName, productPrice }) => {
  const [isProductHover, setIsProductHover] = useState(false);

  return (
    <div
      className="product"
      onMouseOver={() => setIsProductHover(true)}
      onMouseOut={() => setIsProductHover(false)}
    >
      <div className="productContainer">
        <div className="productImageWrapper">
          <img
            className="productImage"
            alt="example"
            src="/images/tartexam.jpg"
          />
        </div>
        <div className="productName">{productName}</div>
        <div className="productPrice">{productPrice}</div>
      </div>
      {isProductHover && (
        <div
          className={`productEffectContainer ${
            isProductHover ? 'mountAnimation' : ''
          }`}
        >
          <div className="effectContents">
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
      )}
    </div>
  );
};

export default Product;

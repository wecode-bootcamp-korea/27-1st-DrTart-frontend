import React from 'react';
import './Product.scss';
import Button from '../../../components/Button/Button';

const Product = ({
  vegan_or_not,
  infoTag,
  productName,
  productImg,
  productPrice,
  btnOnClick,
}) => {
  return (
    <div className="product">
      <div className="stickerWrap">
        <div className="stickerBest">BEST</div>
        {vegan_or_not && <div className="stickerVegan">VEGAN</div>}
      </div>
      <div className="productContainer">
        <div className="productImageWrapper">
          <img className="productImage" alt="example" src={productImg} />
        </div>
        <div className="pdtInfo">
          <p className="infoTag">{infoTag}</p>
          <h3 className="productName">{productName}</h3>
          <div className="price">
            <p className="productPrice">{Math.round(productPrice)}</p>
          </div>
        </div>
        <div className="productButtonContainer">
          <Button btnOnClick={btnOnClick} point={true}>
            바로구매
          </Button>
          <div className="smallBtn">
            <button className="productCartButton">
              <i className="fas fa-shopping-cart" />
            </button>
            <button className="productLikeButton">
              <i className="far fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

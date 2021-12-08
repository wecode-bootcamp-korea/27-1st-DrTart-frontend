import React from 'react';
import './Product.scss';
import Button from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

const Product = ({ el, id, btnOnClick }) => {
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
              alt="example"
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

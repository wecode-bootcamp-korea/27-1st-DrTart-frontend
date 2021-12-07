import React, { useState } from 'react';
import Product from '../Product/Product';
import './ProductsMain.scss';
import ImageSlide from './ImageSlide/ImageSlide';
import ModalBuyNow from '../ModalBuyNow/ModalBuyNow';

function ProductsMain({ productsList }) {
  const [isPopModal, setIsPopModal] = useState(false);

  const PopUpModalBuyNow = () => {
    setIsPopModal(true);
  };

  return (
    <div className="productsMain">
      {isPopModal && (
        <ModalBuyNow
          setIsPopModal={setIsPopModal}
          infoTag={productsList.description}
        />
      )}
      <div className={isPopModal ? 'mask' : 'maskOff'} />
      <ImageSlide />
      <h2 className="productListHead">현재 판매하는 제품</h2>
      <div className="productListContainer">
        {productsList.map(
          ({
            id,
            vegan_or_not,
            description,
            korean_name,
            thumbnail_image_url,
            price,
          }) => (
            <Product
              key={id}
              vegan_or_not={vegan_or_not}
              infoTag={description}
              productName={korean_name}
              productImg={thumbnail_image_url}
              productPrice={price}
              btnOnClick={PopUpModalBuyNow}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductsMain;

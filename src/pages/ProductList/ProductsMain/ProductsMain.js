import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ImageSlide from './ImageSlide/ImageSlide';
import ModalBuyNow from '../ModalBuyNow/ModalBuyNow';
// import { API_ADDRESS } from '../apiConfig';
import './ProductsMain.scss';

function ProductsMain() {
  const [isProductMainLoading, setIsProductMainLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [isPopModal, setIsPopModal] = useState(false);

  const PopUpModalBuyNow = () => {
    setIsPopModal(true);
  };

  const fetchData = async () => {
    // const data = await fetch(API_ADDRESS.product_main);
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    setProductsList(res.product_list);
  };

  useEffect(() => {
    (async () => {
      setIsProductMainLoading(true);
      await fetchData();
      setIsProductMainLoading(false);
    })();
  }, []);

  return (
    !isProductMainLoading && (
      <div className="productsMain">
        {isPopModal && (
          <ModalBuyNow
            setIsPopModal={setIsPopModal}
            infoTag={productsList.description}
          />
        )}
        <div className={isPopModal ? 'mask' : 'maskOff'} />
        <ImageSlide />
        <div className="productListHead">현재 판매하는 제품</div>
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
    )
  );
}

export default ProductsMain;

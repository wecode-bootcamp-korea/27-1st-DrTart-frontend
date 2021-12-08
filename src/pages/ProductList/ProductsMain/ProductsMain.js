import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ImageSlide from './ImageSlide/ImageSlide';
import ModalBuyNow from '../ModalBuyNow/ModalBuyNow';
import { API_ADDRESS } from '../../../apiConfig';
import './ProductsMain.scss';

function ProductsMain() {
  const [isProductMainLoading, setIsProductMainLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [isPopModal, setIsPopModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const PopUpModalBuyNow = product => {
    setIsPopModal(true);
    setSelectedProduct(product);
  };

  const fetchData = async () => {
    const data = await fetch(API_ADDRESS.product_main);
    // const data = await fetch('/data/product_data.json');
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
            product={selectedProduct}
          />
        )}
        <div className={isPopModal ? 'mask' : 'maskOff'} />
        <ImageSlide />
        <div className="productListHead">베스트셀러 TOP 5</div>
        <div className="productListContainer">
          {productsList.map(el => (
            <Product
              el={el}
              key={el.id}
              id={el.id}
              btnOnClick={PopUpModalBuyNow}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default ProductsMain;

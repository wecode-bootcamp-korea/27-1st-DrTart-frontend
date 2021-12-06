import React, { useEffect, useState } from 'react';
import { API_ADDRESS } from '../apiConfig';
import Product from '../Product/Product';
import ImageSlide from './ImageSlide/ImageSlide';
import './ProductsMain.scss';

function ProductsMain() {
  const [isProductMainLoading, setIsProductMainLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(API_ADDRESS.product_main);
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
        <ImageSlide />
        <div className="productListHead">현재 판매하는 제품</div>
        <div className="productListContainer">
          {productsList.map(({ id, korean_name, price }) => (
            <Product key={id} productName={korean_name} productPrice={price} />
          ))}
        </div>
      </div>
    )
  );
}

export default ProductsMain;

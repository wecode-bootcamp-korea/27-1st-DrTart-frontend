import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ImageSlide from './ImageSlide/ImageSlide';
import SortListArea from '../../../components/SortSelectArea/SortSelectArea';
import './ProductsMain.scss';

function ProductsMain() {
  const [isProductMainLoading, setIsProductMainLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);

  const fetchData = async () => {
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    setProductsList(res);
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
          <SortListArea />
          {productsList.map(({ id, korean_name, price }) => (
            <Product key={id} productName={korean_name} productPrice={price} />
          ))}
        </div>
      </div>
    )
  );
}

export default ProductsMain;

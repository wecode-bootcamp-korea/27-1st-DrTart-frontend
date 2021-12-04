import React from 'react';
import Product from '../Product/Product';
import './ProductsMain.scss';
import ImageSlide from './ImageSlide/ImageSlide';
import SortListArea from './SortListArea/SortListArea';

function ProductsMain({ productsList }) {
  return (
    <div className="productsMain">
      <ImageSlide />
      <div className="productListHead">현재 판매하는 제품</div>
      <SortListArea />
      <div className="productListContainer">
        {productsList.map(({ id, korean_name, price }) => (
          <Product key={id} productName={korean_name} productPrice={price} />
        ))}
      </div>
    </div>
  );
}

export default ProductsMain;

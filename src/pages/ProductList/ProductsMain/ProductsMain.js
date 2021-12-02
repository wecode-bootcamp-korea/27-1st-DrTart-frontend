import React from 'react';
import Product from '../Product/Product';
import './ProductsMain.scss';
import ImageSlide from './ImageSlide/ImageSlide';

function ProductsMain({ productsList }) {
  return (
    <div className="productsMain">
      <ImageSlide />
      <div className="productListHead">현재 판매하는 제품</div>
      <div className="productListContainer">
        {productsList.map(product => (
          <Product
            key={product.id}
            productName={product.korean_name}
            productPrice={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsMain;

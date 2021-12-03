import React from 'react';
import Product from '../Product/Product';
import './SortedProducts';

const SortedProducts = ({ catename, small_category, productsList }) => {
  return (
    <div className="sortedProducts">
      <div className="sortedProductsHead" />
      <div className="sortedProductsListContainer">
        {productsList
          .filter(
            product =>
              product.category.name === catename &&
              product.category.small_category === small_category
          )
          .map(({ id, korean_name, price }) => (
            <Product key={id} productName={korean_name} productPrice={price} />
          ))}
      </div>
    </div>
  );
};

export default SortedProducts;

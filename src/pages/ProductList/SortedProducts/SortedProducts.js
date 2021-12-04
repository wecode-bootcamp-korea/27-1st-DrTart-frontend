import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { TRANSELATE } from '../Transelate';
import './SortedProducts.scss';

const SortedProducts = ({ productsList }) => {
  const { mainCategory, subCategory } = useParams();

  return (
    <div className="sortedProducts">
      <div className="sortedProductsHead">
        <div className="sortedProductsTitle">{`${TRANSELATE[mainCategory]} > ${TRANSELATE[subCategory]}`}</div>
      </div>
      <div className="sortedProductsContainer">
        {productsList
          .filter(
            product =>
              product.category.name === mainCategory &&
              product.category.category === subCategory
          )
          .map(({ id, korean_name, price }) => (
            <Product key={id} productName={korean_name} productPrice={price} />
          ))}
      </div>
    </div>
  );
};

export default SortedProducts;

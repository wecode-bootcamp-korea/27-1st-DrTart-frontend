import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { TRANSELATE } from '../Transelate';
import './SortedProducts.scss';

const SortedProducts = () => {
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const { mainCategory, subCategory } = useParams();

  const fetchData = async () => {
    const data = await fetch('/data/product_data.json');
    const res = await data.json();
    setProductsList(res);
  };

  useEffect(() => {
    (async () => {
      setIsProductLoading(true);
      await fetchData();
      setIsProductLoading(false);
    })();
  }, []);

  return (
    !isProductLoading && (
      <div className="sortedProducts">
        <div className="sortedProductsHead">
          <div className="sortedProductsTitle">
            {`${TRANSELATE[mainCategory]}`}
            {!!subCategory && ` > ${TRANSELATE[subCategory]}`}
          </div>
        </div>
        <div className="sortedProductsContainer">
          {(mainCategory !== 'all_product'
            ? productsList.filter(product =>
                !!subCategory
                  ? product.category.name === mainCategory &&
                    product.category.category === subCategory
                  : product.category.name === mainCategory
              )
            : productsList
          ).map(({ id, korean_name, price }) => (
            <Product key={id} productName={korean_name} productPrice={price} />
          ))}
        </div>
      </div>
    )
  );
};

export default SortedProducts;

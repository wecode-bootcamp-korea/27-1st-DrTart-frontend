import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SortSelectArea from '../../../components/SortSelectArea/SortSelectArea';
import Product from '../Product/Product';
import ModalBuyNow from '../ModalBuyNow/ModalBuyNow';
import { TRANSELATE } from '../Transelate';
import { API_ADDRESS } from '../../../apiConfig';
import './SortedProducts.scss';

const SortedProducts = () => {
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const { mainCategory, subCategory } = useParams();
  const [isPopModal, setIsPopModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const PopUpModalBuyNow = product => {
    setIsPopModal(true);
    setSelectedProduct(product);
  };

  const fetchData = useCallback(async () => {
    let address;
    if (mainCategory === 'all') {
      address = API_ADDRESS.product_all;
    } else {
      address = !!subCategory
        ? `${API_ADDRESS.products_category}${subCategory}`
        : `${API_ADDRESS.products_menu}${mainCategory}`;
    }
    const data = await fetch(address);
    // const data = await fetch('/data/product_data.json');
    const res = await data.json();

    setProductsList(
      res.product_list.sort(
        (a, b) => Date.parse(b.create_at) - Date.parse(a.create_at)
      )
    );
  }, []);

  useEffect(() => {
    (async () => {
      setIsProductLoading(true);
      await fetchData();
      setIsProductLoading(false);
    })();
  }, [fetchData, subCategory, mainCategory]);

  const adjustList = products => {
    setProductsList(products);
  };

  return (
    !isProductLoading && (
      <div className="sortedProducts">
        {isPopModal && (
          <ModalBuyNow
            setIsPopModal={setIsPopModal}
            infoTag={adjustList.description}
            product={selectedProduct}
          />
        )}
        <div className={isPopModal ? 'mask' : 'maskOff'} />
        <div className="sortedProductsHead">
          <div className="sortedProductsTitle">
            {`${TRANSELATE[mainCategory]}`}
            {!!subCategory && ` > ${TRANSELATE[subCategory]}`}
          </div>
          <SortSelectArea adjustList={adjustList} productsList={productsList} />
        </div>
        <div className="sortedProductsContainer">
          {(mainCategory !== 'all'
            ? productsList.filter(product =>
                !!subCategory
                  ? product.category.name === mainCategory &&
                    product.category.category === subCategory
                  : product.category.name === mainCategory
              )
            : productsList
          ).map(el => (
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
};

export default SortedProducts;

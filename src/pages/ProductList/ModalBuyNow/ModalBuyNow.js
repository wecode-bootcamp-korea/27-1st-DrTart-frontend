import React, { useEffect, useState } from 'react';
import '../ModalBuyNow/ModalBuyNow.scss';
import ProductInfoBox from '../../../components/ProductInfoBox/ProductInfoBox';

const ModalBuyNow = ({ setIsPopModal, infoTag }) => {
  const [dataOfBuyNow, setDataOfBuyNow] = useState([]);

  const clickRemoveModal = () => {
    setIsPopModal(prev => !prev);
  };

  useEffect(() => {
    fetch('/data/productData.json')
      .then(response => response.json())
      .then(data => {
        setDataOfBuyNow(data);
      });
  }, []);

  return (
    <div className="popUp">
      <button className="closeBtn" type="button" onClick={clickRemoveModal}>
        <i className="fas fa-times" />
      </button>
      <div className="inner">
        <div className="imageBox">
          <img className="imageMain" src="images/x-Mas.jpg" alt="product" />
          <div className="smallImagesLine">
            <div className="smallImageBox">
              <img
                className="smallImage"
                src="images/x-Mas.jpg"
                alt="product to small"
              />
            </div>
          </div>
        </div>

        {dataOfBuyNow
          .filter(e => e.id === 0)
          .map(product => (
            <ProductInfoBox
              koreanName={product.korean_name}
              infoTag={infoTag}
              price={product.price}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
};
export default ModalBuyNow;

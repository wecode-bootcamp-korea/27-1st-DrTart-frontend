import React from 'react';
import '../ModalBuyNow/ModalBuyNow.scss';
import ProductInfoBox from '../../../components/ProductInfoBox/ProductInfoBox';

const ModalBuyNow = ({ isPopModal, setIsPopModal }) => {
  const imgUrl = 'images/x-Mas.jpg';
  const originPrice = 28000;
  const productName = '닥터 타르트';
  const productSubTag = '#가심비갑';

  const clickRemoveModal = () => {
    setIsPopModal(!isPopModal);
  };

  return (
    <div className="popUp">
      <button className="closeBtn" type="button" onClick={clickRemoveModal}>
        <i className="fas fa-times" />
      </button>
      <div className="inner">
        <div className="imageBox">
          <img className="imageMain" src={imgUrl} alt="product" />
          <div className="smallImagesLine">
            <div className="smallImageBox">
              <img className="smallImage" src={imgUrl} alt="product to small" />
            </div>
          </div>
        </div>
        <ProductInfoBox
          productName={productName}
          productSubTag={productSubTag}
          originPrice={originPrice}
        />
      </div>
    </div>
  );
};
export default ModalBuyNow;

import React, { useState } from 'react';
import './../ProductList/ProductList.scss';
import ModalBuyNow from './ModalBuyNow/ModalBuyNow';

export default function ProductList() {
  const [isPopModal, setIsPopModal] = useState(false);

  const PopUpModalBuyNow = () => {
    setIsPopModal(true);
  };

  return (
    <div className="productList">
      <ModalBuyNow isPopModal={isPopModal} setIsPopModal={setIsPopModal} />
      <div className={isPopModal ? 'mask' : 'maskOff'} />
      <button className="btn" type="button" onClick={PopUpModalBuyNow}>
        바로구매
      </button>
    </div>
  );
}

import React from 'react';
import './../ProductList/ProductList.scss';
import ModalBuyNow from './ModalBuyNow/ModalBuyNow';

export default function ProductList() {
  const goToBuyNow = () => {};
  return (
    <div>
      <ModalBuyNow />
      <button className="Btn" type="button" onClick={goToBuyNow}>
        바로구매
      </button>
    </div>
  );
}

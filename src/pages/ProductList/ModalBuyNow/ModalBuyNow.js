import React, { useState } from 'react';
import '../ModalBuyNow/ModalBuyNow.scss';

const ModalBuyNow = ({ isPopModal, setIsPopModal }) => {
  const clickRemoveModal = () => {
    setIsPopModal(!isPopModal);
  };
  return (
    <div className="modalBuyNow">
      <div className={isPopModal ? 'popUp' : 'displayNone'}>
        <button className="closeBtn" type="button" onClick={clickRemoveModal}>
          <i className="fas fa-times" />
        </button>
        <div className="inner">
          <div className="imageBox">
            <img
              className="imageMain"
              src="images/favoriteCake.jpg"
              alt="product"
            />
            <div className="smallImagesLine">
              <div className="smallImageBox">
                <img
                  className="smallImage"
                  src="images/favoriteCake.jpg"
                  alt="product to small"
                />
              </div>
            </div>
          </div>
          <div className="infoBox">
            <div className="stickerWrap">
              <div className="stickerNew">BEST</div>
              <div className="stickerGift">GIFT</div>
              <div className="stickerSale">SALE</div>
            </div>
            <h3 className="productName">닥터 타르트</h3>
            <p className="infoTag">#가심비갑</p>
            <div className="price">
              <p className="originPrice">108,000</p>
              <div className="strikeThrough" />
              <p className="discountPrice">68,000</p>
            </div>
            <ul className="infoBar">
              <li className="infoToBuy">구매정보</li>
              <li className="infoGift">추가 사은품</li>
            </ul>
            <div className="tabContents">
              <dl className="list">
                <dt className="title">적립금</dt>
                <dd className="defines">950원</dd>
              </dl>
              <dl className="list">
                <dt className="title">수량</dt>
                <dd className="defines">
                  <div className="numBtn">
                    <button className="numBtnMinus">
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      className="numValue"
                      type="text"
                      value="1"
                      readOnly
                    />
                    <button className="numBtnPlus">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </dd>
              </dl>
              <dl className="list">
                <dt className="title">사은품</dt>
                <dd className="definesSpecial">생일축하해양~초!</dd>
                <dd className="defines">1 set</dd>
              </dl>
            </div>
            {/* <div className="infoGiftBox">
            <ul>
              <li className="infoList">
                <div className="infoImage">
                  <img src="images/favoriteCake.jpg" alt="gift" />
                </div>
                <div className="info">
                  <p className="defines">시카페어크림 15ml</p>
                  <p className="defines">1개</p>
                </div>
              </li>
            </ul>
          </div> */}
            <div className="totalPriceInfo">
              <p className="totalPriceTitle">총 구매금액</p>
              <p className="totalPrice">36,000</p>
            </div>
            <button
              className="buyNowBtn"
              type="button"
              // onClick={goToPaymentProcess}
            >
              바로구매
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalBuyNow;

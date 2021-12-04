import React, { useState } from 'react';
import { DETAIL_DATA } from './ProductDetailData';
import SlickThumbnail from './SlickThumbnail';
import ProductListNav from '../ProductList/ProductListNav/ProductListNav';
import ProductReview from './ProductReview/ProductReview';
import './ProductDetail.scss';
export default function ProductDetail() {
  const [currentSlideId, setCurrentSlideId] = useState(0);

  const changeSlide = slideId => {
    setCurrentSlideId(slideId);
  };

  return (
    <>
      <ProductListNav />
      <div className="slideAndInfoWrap">
        <div className="slide">
          <div className="imgSlide">
            {DETAIL_DATA.filter(({ id }) => id === currentSlideId).map(el => (
              <img key={el.id} src={el.imageUrl} alt={el.id} className="img" />
            ))}
          </div>
          <ul className="thumbnailWrap">
            {DETAIL_DATA.map(el => (
              <SlickThumbnail
                key={el.id}
                currentSlideId={currentSlideId}
                slideId={el.id}
                imgUrl={el.imageUrl}
                changeSlide={() => changeSlide(el.id)}
              />
            ))}
          </ul>
        </div>
        <div className="productInfo">제품 인포 컴포넌트</div>
      </div>
      <ProductReview />
    </>
  );
}

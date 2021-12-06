import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { DETAIL_DATA } from './ProductDetailData';
import SlickThumbnail from './SlickThumbnail';
import ProductListNav from '../ProductList/ProductListNav/ProductListNav';
import ProductReview from './ProductReview/ProductReview';
import ProductInfoBox from '../../components/ProductInfoBox/ProductInfoBox';
import './ProductDetail.scss';

export default function ProductDetail() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${'aa'}/${params.id}`)
      .then(res => res.json())
      .then(res => setData(res));
  });

  const [currentSlideId, setCurrentSlideId] = useState(0);

  const changeSlide = slideId => {
    setCurrentSlideId(slideId);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (currentSlideId === DETAIL_DATA.length - 1)
        setCurrentSlideId(prev => 0);
      else setCurrentSlideId(prev => prev + 1);
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlideId]);

  return (
    <>
      <ProductListNav />
      <div className="slideAndInfoWrap">
        <div className="slide">
          {DETAIL_DATA.filter(({ id }) => id === currentSlideId).map(el => (
            <div className="imgSlide" key={el.id}>
              <img src={el.imageUrl} alt={el.id} className="img" />
            </div>
          ))}
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
        <div className="productInfo">
          <ProductInfoBox
            koreanName={data.koreanName}
            category={data.category}
            price={data.price}
          />
        </div>
      </div>
      <ProductReview />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SlickThumbnail from './SlickThumbnail';
import ProductListNav from '../ProductList/ProductListNav/ProductListNav';
import ProductReview from './ProductReview/ProductReview';
import ProductInfoBox from '../../components/ProductInfoBox/ProductInfoBox';
import { API_ADDRESS } from '../ProductList/apiConfig';
import './ProductDetail.scss';

export default function ProductDetail() {
  const params = useParams();
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(API_ADDRESS.products + params.id)
      // fetch('/data/product_detail_data.json')
      .then(res => res.json())
      .then(res => {
        setData(res.product_list);
      });
  }, [params.id]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      currentIndex >= data.image_list?.length - 1 || 0
        ? setCurrentIndex(0)
        : setCurrentIndex(prev => prev + 1);
    }, 4000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex, data]);

  const changeSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <>
      <ProductListNav />
      <div className="slideAndInfoWrap">
        <div className="slide">
          {data.image_list &&
            data.image_list
              .filter((el, index) => index === currentIndex)
              .map(el => (
                <div className="imgSlide" key={el.id}>
                  <img src={el.url} alt={el.id} className="img" />
                </div>
              ))}
          <ul className="thumbnailWrap">
            {data.image_list &&
              data.image_list.map((el, index) => (
                <SlickThumbnail
                  key={el.id}
                  currentSlideId={currentIndex}
                  slideId={index}
                  imgUrl={el.url}
                  changeSlide={() => changeSlide(index)}
                />
              ))}
          </ul>
        </div>
        <div className="productInfo">
          <ProductInfoBox
            productId={params.id}
            koreanName={data.korean_name}
            sugarLevel={data.sugar_level}
            price={data.price}
            infoTag={data.description}
            isVegan={data.vegan_or_not}
            thumbnailImg={data.thumbnail_image_url}
            cartAndLikeBtn={true}
          />
        </div>
      </div>
      <ProductReview />
    </>
  );
}

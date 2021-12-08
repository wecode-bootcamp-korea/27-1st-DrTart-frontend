import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SlickThumbnail from './SlickThumbnail';
import ProductListNav from '../ProductList/ProductListNav/ProductListNav';
import ProductReview from './ProductReview/ProductReview';
import ProductInfoBox from '../../components/ProductInfoBox/ProductInfoBox';
// import { API_ADDRESS } from '../ProductList/apiConfig';
import './ProductDetail.scss';

export default function ProductDetail() {
  const params = useParams();
  const [data, setData] = useState({});
  const [currentSlideId, setCurrentSlideId] = useState(0);

  useEffect(() => {
    let len = 0;
    // fetch(`${API_ADDRESS.products + params.id}`);
    fetch('/data/product_detail_data.json')
      .then(res => res.json())
      .then(res => {
        let arr = [];
        for (let i = 0; i < res.product_list.image_list.length; i++) {
          arr.push({
            id: i,
            url: res.product_list.image_list[i].url,
          });
        }
        const tmp = { ...res.product_list, image_list: arr };
        setData(tmp);
        len = tmp.image_list.length - 1;
      });

    const slideInterval = setInterval(() => {
      currentSlideId >= len
        ? setCurrentSlideId(prev => 0)
        : setCurrentSlideId(prev => prev + 1);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlideId]);

  const changeSlide = slideId => {
    setCurrentSlideId(slideId);
  };

  return (
    <>
      <ProductListNav />
      <div className="slideAndInfoWrap">
        <div className="slide">
          {data.image_list &&
            data.image_list
              .filter(({ id }) => id === currentSlideId)
              .map(el => (
                <div className="imgSlide" key={el.id}>
                  <img src={el.url} alt={el.id} className="img" />
                </div>
              ))}
          <ul className="thumbnailWrap">
            {data.image_list &&
              data.image_list.map(el => (
                <SlickThumbnail
                  key={el.id}
                  currentSlideId={currentSlideId}
                  slideId={el.id}
                  imgUrl={el.url}
                  changeSlide={() => changeSlide(el.id)}
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

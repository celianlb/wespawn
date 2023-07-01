/* "use client"

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper/core';
import articles from './articles';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const ArticleCards = () => {
  const slidesPerView = 'auto';
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const articleChunks = [];
  for (let i = 0; i < articles.length; i += 3) {
    const chunk = articles.slice(i, i + 3);
    articleChunks.push(chunk);
  }

  return (
    <div className="overflow-x-auto">
      
      {articleChunks.map((chunk, index) => (
        <div key={index} className={isDesktop ? 'hidden' : ''}>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={0}
            loop={false}
            grabCursor={isDesktop}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            nested={true}
          >
            {chunk.map((article, index) => (
              <SwiperSlide key={index}>
                <div className="w-full max-w-xs mx-auto mb-5">
                  <div className="w-60 bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                      className="w-full h-48 object-cover"
                      src={article.image}
                      alt={article.title}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-800">
                        {article.title}
                      </h3>
                      <p className="text-gray-600">{article.text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
        
      ))}
    </div>
  );
};

export default ArticleCards;
 */
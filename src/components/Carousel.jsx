import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  const images = [
    '/images/home/photo1.webp',
    '/images/home/photo2.jpeg',
    '/images/home/photo1.jpeg',
    '/images/home/photo5.jpeg',
    '/images/home/photo6.webp',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-lg shadow-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        autoHeight={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            {/* Contenedor con altura fija responsive */}
            <div className="relative w-full h-56 sm:h-72 md:h-[420px] lg:h-[520px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

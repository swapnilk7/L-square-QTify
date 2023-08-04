import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AlbumCard from "../AlbumCard/AlbumCard";

const Carousel = ({ title, data = [] }) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 2,
          },
          550: {
            slidesPerView: 3,
          },
          715: {
            slidesPerView: 4,
          },
          870: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 7,
          },
        }}
      >
        {data?.map((album) => (
          <SwiperSlide key={album.id}>
            <AlbumCard title={title} album={album} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;

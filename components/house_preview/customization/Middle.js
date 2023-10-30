import React, { useEffect, useState } from 'react'
import ReactImageGallery from 'react-image-gallery';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles

// import required modules
import { A11y, Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from 'next/image';
const Middle = ({ project }) => {
     const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
      if (project) {
        const thumbnails = project?.images?.map((image) => ({
          thumbnailTitle: "House Builder",
          original: image,
          thumbnail: image,
        }));

        if (thumbnails && thumbnails.length > 0) {
          setThumbnails(thumbnails);
        }
      }
    }, [project]);
  return (
    <div>
      <div className="max-w-[90vw] md:max-w-[100%] h-[70vh]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          autoplay={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination, A11y]}
          className="mySwiper2"
          zoom={true}
        >
          {project?.images?.map((v, i) => (
            <SwiperSlide key={i}>
              <Image
                src={v}
                height={1000}
                width={1000}
                alt={project?.address}
                className="object-cover object-center rounded-md"
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Pagination, A11y]}
          className="mySwiper"
          zoom
        >
          {project?.images?.map((v, i) => (
            <SwiperSlide key={i}>
              <Image
                src={v}
                height={1000}
                width={1000}
                alt={project?.address}
                className="object-cover object-center"
                loading="eager"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Middle
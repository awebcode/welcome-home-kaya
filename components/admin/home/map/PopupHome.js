import React from "react";
import { Card, ImageListItem, ImageListItemBar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useValue } from "@/context/ContextProvider";

const PopupHome = ({ popupInfo }) => {
  const { title, description, price, images } = popupInfo;
  const { dispatch } = useValue();

  return (
    <Card className="max-w-md mx-auto mt-4">
      <div className="relative">
        <ImageListItem className="block">
          <ImageListItemBar
            className="z-2"
            title={price === 0 ? "Free Stay" : `$${price}`}
            position="top"
          />
          <ImageListItemBar
            title={title}
            subtitle={description.substr(0, 30) + "..."}
            className="z-2"
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay
            lazy
            pagination={{ clickable: true }}
            className="h-96 bg-white"
          >
            {images.map((url) => (
              <SwiperSlide key={url}>
                <img
                  src={url}
                  alt="room"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => dispatch({ type: "UPDATE_ROOM", payload: popupInfo })}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ImageListItem>
      </div>
    </Card>
  );
};

export default PopupHome;

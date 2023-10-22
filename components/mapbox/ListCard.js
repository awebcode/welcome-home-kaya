import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Divider } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const ListCard = ({ placeName, price, images, location, name }) => {
  const router = useRouter();
  const cardId = `card_${name}`;

  const isLocalStorageAvailable = typeof window !== "undefined" && window.localStorage;

  const [isFavorite, setIsFavorite] = useState(() => {
    if (isLocalStorageAvailable) {
      const storedFavorite = localStorage.getItem(cardId);
      return storedFavorite ? JSON.parse(storedFavorite) : false;
    }
    return false;
  });

  useEffect(() => {
    if (isLocalStorageAvailable) {
      const storedFavorite = localStorage.getItem(cardId);
      setIsFavorite(storedFavorite ? JSON.parse(storedFavorite) : false);
    }
  }, [cardId, isLocalStorageAvailable]);

  const handleFavoriteClick = () => {
    if (isLocalStorageAvailable) {
      const newFavorite = !isFavorite;
      setIsFavorite(newFavorite);
      localStorage.setItem(cardId, JSON.stringify(newFavorite));
    }
  };

  const handleButtonClick = () => {
    router.push(`/house/single/${name}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm w-full">
      <div className="relative h-48 w-full">
        <Image
          src={images[0]}
          layout="responsive"
          width={1000}
          height={1000}
          objectFit="cover"
          alt={placeName}
        />
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{placeName}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 mb-2">Price: {price}</p>
          {isFavorite ? (
            <HeartFilled
              className="cursor-pointer text-xl md:text-2xl text-red-500"
              onClick={handleFavoriteClick}
            />
          ) : (
            <HeartOutlined
              className="cursor-pointer text-xl md:text-2xl"
              onClick={handleFavoriteClick}
            />
          )}
        </div>
        <p className="text-gray-700 mb-4">Location: {location}</p>
        <Divider className="bg-gray-300" />
        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="custom-btn w-full font-thin h-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;

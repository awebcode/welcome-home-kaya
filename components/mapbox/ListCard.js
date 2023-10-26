import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Divider } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const ListCard = ({ address, price, images, location, title, _id, homeType,acress }) => {
  const router = useRouter();
  const cardId = `card_${title}`;

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
    router.push(`/house/single/${_id}`);
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
          alt={address}
        />
      </div>
      <Divider className="bg-gray-300" />
      <div className="p-6">
        <h4 className="text-sm  mb-2">{address}</h4>
        <div className="flex justify-between items-center">
          <h3 className="text-gray-900 text-xl mb-2">Price: {price} $</h3>
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
        <Divider className="bg-gray-300" />
        <div className="flex justify-between items-center">
          <p className="text-gray-700 mb-2">type: {homeType}</p>
          <p className=" text-gray-700 mb-2">acress: {acress}</p>
        </div>
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

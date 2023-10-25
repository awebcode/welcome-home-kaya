import React from "react";
import { Modal, Divider, Button, Image } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";

const PlaceCard = ({
  placeName,
  price,
  images,
  location,
  isVisible,
  onClose,
  name,
  desc,id,acress
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/house/single/${id}`);
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={350}
      style={{ background: "black", margin: "10px" }} // Set an appropriate width for the modal
    >
      <div className="flex flex-col" onMouseLeave={onClose}>
        <div className="mb-2">
          <Image
            src={images[0]}
            width="100%"
            height={150}
            className="object-cover object-center"
            layout="fixed"
            alt={placeName}
          />
        </div>
        {/* <h2 className="text-sm font-semibold mb-2">{placeName?.slice(0, 60) + " ..."}</h2> */}
        <p className="text-gray-900 mb-2 font-bold text-2xl">{price}$</p>
        <h3>all-in price</h3>
        <p className="text-gray-700 mb-2">
          {/* <b>Location:</b>*/} {location}{" "}
        </p>
        <p className="text-gray-600 cursor-pointer my-1">
          Oasis 3 Flex + fits 8 more models
        </p>
        {/* <Divider style={{ width: "80%" }} className="bg-gray-400" />{" "} */}
        {/* Ant Design Divider */}
        {/* <Link href={`/house/single/${id}`} className=" text-gray-600 cursor-pointer">
          {desc?.slice(0, 100) + "..."}
        </Link> */}
        <p className=" text-gray-600 cursor-pointer my-1">acress {acress }</p>
        <Button onClick={handleButtonClick} className="mt-4 custom-btn w-full h-full">
          View Place & Homes
        </Button>
      </div>
    </Modal>
  );
};

export default PlaceCard;

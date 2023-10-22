import React from "react";
import { Modal, Divider, Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const PlaceCard = ({
  placeName,
  price,
  images,
  location,
  isVisible,
  onClose,
  name,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/house/single/${name}`);
  };

  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={400} // Set an appropriate width for the modal
    >
      <div className="flex flex-col" onMouseLeave={onClose}>
        <div className="mb-4">
          <Image
            src={images[0]}
            width={150}
            height={150}
            layout="responsive"
            alt={placeName}
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{placeName}</h2>
        <p className="text-gray-700 mb-2">Price: {price}</p>
        <p className="text-gray-700 mb-4">Location: {location}</p>
        <Divider style={{ width: "80%" }} /> {/* Ant Design Divider */}
        <p className="text-center text-gray-700">
          Additional information or description can go here.
        </p>
        <Button onClick={handleButtonClick} className="mt-4 custom-btn w-full h-full">
          Go to {placeName}
        </Button>
      </div>
    </Modal>
  );
};

export default PlaceCard;

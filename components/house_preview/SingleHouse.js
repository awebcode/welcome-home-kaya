import React, { useState } from "react";
import { useRouter } from "next/router";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { preBuiltPlaces } from "@/components/mapbox/data";
import { FaBath, FaBed, FaTree } from "react-icons/fa";
import { Divider } from "antd";
import { BsArrowRight, BsChat } from "react-icons/bs";
import { CheckCircleOutlined, ScheduleOutlined } from "@ant-design/icons";


import "react-image-gallery/styles/css/image-gallery.css";

const SingleHouse = () => {
  const router = useRouter();
  const { name } = router.query;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const preBuiltPlace = preBuiltPlaces.find((place) => place.name === name);

  if (!preBuiltPlace) {
    return <div>Place not found</div>;
  }

  const { price, location, images } = preBuiltPlace;

    const galleryImages = images || [];
    

    // generate thubnail

    const thumbnails = images.map((image) => ({
        thumbnailTitle:"House Builder",
      original: image,
      thumbnail: image,
    }));

    console.log(thumbnails)

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <div className="flex justify-center p-3 md:p-8 flex-wrap gap-4">
      {/* Left Side */}
      <div className="max-w-full md:max-w-[60%]">
        {/* <Image
          src={selectedImage || galleryImages[0]}
          alt={name}
          width={800}
          height={500}
          className="mb-8 max-h-[500px]"
          objectFit="cover"
          layout="reponsive"
        /> */}
        {/* Image Gallery */}
        {/* Image Gallery */}
        {/* <SlideshowLightbox
          style={{ overflowX: "scroll" }}
          lightboxIdentifier="lightbox1"
          images={galleryImages}
          slideshowInterval={true}
          className="container flex justify-center items-center gap-2 "
          imgAnimation="fade"
          showThumbnails={true}
          thumbnailBorder="silver"
        >
          {galleryImages.map((img, index) => (
            <img
              data-lightboxjs="lightbox1"
              src={img}
              alt={name}
              onClick={() => handleImageClick(img)}
              className="w-12 h-12 md:w-24 md:h-24 rounded-md cursor-pointer border border-gray-300"
            />
          ))}
        </SlideshowLightbox> */}
        <ImageGallery
          thumbnailTitle={true}
          showBullets
          slideDuration={1000}
          autoPlay={true}
          swipingTransitionDuration={300}
          sizes={["large"]}
          thumbnailHeight={500}
          thumbnailWidth={700}
          items={thumbnails}
          slideOnThumbnailOver={true}
        />
        {/*House Details  */}
        <div className="my-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            House Details
          </h2>
          <Divider className="bg-gray-300" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{name}</h2>
          <div className="flex justify-between items-center p-2">
            <p className="text-gray-700 mb-6">{location}</p>
            <p className="text-lg mb-4">{price}</p>
          </div>
          {/* Col */}
          <Divider className="bg-gray-300" />
          <div className="flex flex-wrap justify-between items-center gap-1">
            <div className="shadow-md p-4 rounded-md">
              <h2>Bed</h2>
              <FaBed className="inline mx-2" /> 4
            </div>
            <div className="shadow-md p-4 rounded-md">
              <h2>Bath</h2>
              <FaBath className="inline mx-2" /> 2
            </div>
            <div className="shadow-md p-4 rounded-md">
              <h2>Acress</h2>
              <FaTree className="inline mx-2" /> 0.33%
            </div>
            <div className="shadow-md p-4 rounded-md">
              <h2>SO.FT</h2>
              <FaBed className="inline mx-2" /> 1667
            </div>
          </div>
        </div>

        {/*  key featurs*/}
        <Divider className="bg-gray-300" />
        <div className="my-2 p-2 flex flex-col">
          <h1 className="p-1 py-2 text-gray-900 font-bold text-2xl">Key Features</h1>
          <div className="flex mx-2">
            <CheckCircleOutlined className="mx-2" />
            <p>14-18 month to move-in.</p>
          </div>
          <div className="flex mx-2">
            <CheckCircleOutlined className="mx-2" />
            <p>Furnace, geothermal and boilers available</p>
          </div>
          <div className="flex mx-2">
            <CheckCircleOutlined className="mx-2" />
            <p>Central air, geothermal available</p>
          </div>
          <div className="flex mx-2">
            <CheckCircleOutlined className="mx-2" />
            <p>1 garage space</p>
          </div>
          <div className="flex mx-2">
            <CheckCircleOutlined className="mx-2" />
            <p>Solar available</p>
          </div>
          <div className="flex mx-2">
            <CheckCircleOutlined className="mx-2" />
            <p>9&apos; & 10&apos; ceilings</p>
          </div>
        </div>
        {/* Customization */}
        <Divider className="bg-gray-300" />
        <div>
          <h1 className="p-1 py-2 text-gray-900 font-bold text-2xl">Price Breakdown</h1>
          <button
            onClick={() => router.push("/house/customization")}
            className="custom-btn w-full h-full"
          >
            Customize & Start offer
          </button>
          <div className="flex justify-between items-center p-2 m-2">
            <h3>Property Listing Price</h3>
            <span>$ 2253200</span>
          </div>
          <div className="flex justify-between items-center p-2 m-2">
            <h3>Construction Estimate</h3>
            <span>$ 1845600</span>
          </div>
          <Divider className="bg-gray-300" />
          <p className="text-gray-900">
            This property has been evaluated by our land vetting AI technology. Upon
            submitting an offer, a Welcome land expert will perform an additional
            feasibility check.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/3 p-4 my-4  border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <div className="flex justify-between items-center p-2">
          <p className="text-gray-700 mb-6">{location}</p>
          <p className="text-lg mb-4">{price}</p>
        </div>
        {/* Col */}
        <Divider className="bg-gray-300" />
        <div className="flex flex-wrap justify-between items-center gap-1">
          <div className="shadow-md p-4 rounded-md">
            <h2>Bed</h2>
            <FaBed className="inline mx-2" /> 4
          </div>
          <div className="shadow-md p-4 rounded-md">
            <h2>Bath</h2>
            <FaBath className="inline mx-2" /> 2
          </div>
          <div className="shadow-md p-4 rounded-md">
            <h2>Acress</h2>
            <FaTree className="inline mx-2" /> 0.33%
          </div>
          <div className="shadow-md p-4 rounded-md">
            <h2>SO.FT</h2>
            <FaBed className="inline mx-2" /> 1667
          </div>
        </div>
        <Divider className="bg-gray-300" />
        {/* col 2 start */}

        <div className="flex flex-wrap justify-between items-center gap-1">
          <div className="shadow-md p-4 rounded-md flex-[36%]">
            <h2>Project Phase</h2>
            <span>Phase 2: Foundation</span>
          </div>
          <div className="shadow-md p-4 rounded-md flex-[36%]">
            <h2>Target Completation Date</h2>
            <span> March 25,2024</span>
          </div>
          <div className="shadow-md p-4 rounded-md flex-[36%]">
            <h2>Costs vs Budget</h2>
            <span>$ 88000 / $120000</span>
          </div>
          <div
            onClick={() => router.push("/house/documents")}
            className="shadow-md cursor-pointer p-4 rounded-md flex-[36%]"
          >
            <h2>View Project Documents:</h2>
            <BsArrowRight className="float-right   rounded-full " />
            <span>Floor Plan, Drawings, Contract </span>
          </div>
        </div>
        <Divider className="bg-gray-300" />
        {/* col 2 end */}
        <p className="mb-6">
          Description of the property goes here. Provide information about features,
          amenities, etc.
        </p>
        {/* buttons */}
        <div className="flex mx-1">
          <button className="custom-btn mx-1 text-[14px] font-thin  p-1">
            Project approval workflow
          </button>{" "}
          <button className="custom-btn mx-1 text-[14px] font-thin  p-1">
            Procure Materials
          </button>
        </div>
        {/* help/contact */}
        <Divider className="bg-gray-300" />
        <div className="p-2 m-3">
          <h3 className="text-center my-2">Questions? Our team here to help.</h3>
          <div className="flex justify-around items-center">
            <div
              onClick={() => router.push("/contact_us")}
              className="flex justify-between cursor-pointer"
            >
              <BsChat className="inline" /> Contact Us
            </div>
            <div className="flex justify-between">
              <ScheduleOutlined className="inline" /> Shedule Consulation
            </div>
          </div>
        </div>

        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default SingleHouse;

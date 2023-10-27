import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { preBuiltPlaces } from "@/components/mapbox/data";
import { FaBath, FaBed, FaTree } from "react-icons/fa";
import { Divider, Skeleton } from "antd";
import { BsArrowRight, BsChat } from "react-icons/bs";
import { CheckCircleOutlined, ScheduleOutlined } from "@ant-design/icons";

import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { clearProjectErrors, getOneProject } from "@/redux/actions/projectsActions";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import moment from "moment/moment";
import Loader from "../Loader";

const SingleHouse = () => {
  const { project, error, loading } = useSelector((s) => s.project);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (id) {
      dispatch(getOneProject(id));
    }
  }, [dispatch, id]);

  // generate thubnail

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

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center p-3 md:p-8 flex-wrap gap-4">
      {/* Left Side */}
      <div className="max-w-[90vw] md:max-w-[84%]">
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
          lazyLoad={true}

          // onImageLoad={<Skeleton/>}
        />
        {/*House Details  */}
        <div className="my-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Project Details
          </h2>
          <Divider className="bg-gray-300" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{project?.title}</h2>
          <div className="flex justify-between items-center p-2">
            <p className="text-gray-700 mb-6">{project?.address}</p>
            <p className="text-lg mb-4">${project?.price}</p>
          </div>
          {/* Col */}
          <Divider className="bg-gray-300" />
          <div className="flex flex-wrap justify-around items-center gap-1">
            <div className="shadow-md p-4 rounded-md w-[45%] text-center">
              <h2>Bed</h2>
              <FaBed className="inline mx-2" /> {project?.bed || 0}
            </div>
            <div className="shadow-md p-4 rounded-md w-[45%] text-center">
              <h2>Bath</h2>
              <FaBath className="inline mx-2" /> {project?.bath || 0}
            </div>

            <div className="shadow-md p-4 rounded-md w-[45%] text-center">
              <h2>Acress</h2>
              <FaTree className="inline mx-2" /> {project?.acress || "0.50%"}
            </div>
            <div className="shadow-md p-4 rounded-md w-[45%] text-center">
              <h2>SO.FT</h2>
              <FaBed className="inline mx-2" /> {project?.so_ft || "0.30%"}
            </div>
          </div>
        </div>

        {/*  key featurs*/}
        <Divider className="bg-gray-300" />
        <div className="my-2 p-2 flex flex-col">
          <h1 className="p-1 py-2 text-gray-900 font-bold text-2xl">Key Features</h1>

          {project?.keyFeatures?.length > 0 ? (
            project?.keyFeatures?.map((v, i) => {
              return (
                <div className="flex mx-2" key={i}>
                  <CheckCircleOutlined className="mx-2" />
                  <p>{v}</p>
                </div>
              );
            })
          ) : (
            <>
              {" "}
              <div className="flex mx-2">
                <CheckCircleOutlined className="mx-2" />
                <p>key 1 </p>
              </div>
              <div className="flex mx-2">
                <CheckCircleOutlined className="mx-2" />
                <p>key 2</p>
              </div>
              <div className="flex mx-2">
                <CheckCircleOutlined className="mx-2" />
                <p>key 3</p>
              </div>
            </>
          )}
        </div>
        <Divider className="bg-gray-300" />
        <div className="my-2 p-2 flex flex-col">
          <h1 className="p-1 py-2 text-gray-900 font-bold text-2xl">Key Project Notes</h1>

          {project?.keyProjectNotes?.length > 0 ? (
            project?.keyProjectNotes?.map((v, i) => {
              return (
                <div className="flex mx-2" key={i}>
                  <CheckCircleOutlined className="mx-2" />
                  <p>{v}</p>
                </div>
              );
            })
          ) : (
            <>
              {" "}
              <div className="flex mx-2">
                <CheckCircleOutlined className="mx-2" />
                <p>key 1 </p>
              </div>
              <div className="flex mx-2">
                <CheckCircleOutlined className="mx-2" />
                <p>key 2</p>
              </div>
              <div className="flex mx-2">
                <CheckCircleOutlined className="mx-2" />
                <p>key 3</p>
              </div>
            </>
          )}
        </div>
        {/* Customization */}
        <Divider className="bg-gray-300" />
        <div>
          <h1 className="p-1 py-2 text-gray-900 font-bold text-2xl">Price Breakdown</h1>
          <button
            onClick={() => router.push(`/house/customization/${project?._id}`)}
            className="custom-btn w-full h-full"
          >
            Customize & Start offer
          </button>
          <div className="flex justify-between items-center p-2 m-2">
            <h3>Property Listing Price</h3>
            <span>$ {project?.propertyListingPrice}</span>
          </div>
          <div className="flex justify-between items-center p-2 m-2">
            <h3>Construction Estimate</h3>
            <span>$ {project?.constructionEstimate}</span>
          </div>
          <Divider className="bg-gray-300" />
          <p className="text-gray-900">{project?.description}</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/3 p-4 my-4  border border-gray-300">
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

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import { preBuiltPlaces } from "@/components/mapbox/data";
import { FaBath, FaBed, FaTree } from "react-icons/fa";
import { Divider, Progress, Skeleton } from "antd";
import { BsArrowRight, BsChat } from "react-icons/bs";
import { CheckCircleOutlined, ScheduleOutlined } from "@ant-design/icons";

import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";
import { clearProjectErrors, getOneProject } from "@/redux/actions/projectsActions";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import moment from "moment/moment";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// Import Swiper styles

// import required modules
import { A11y, Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Loader from "../Loader";
import { CircularProgress } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useValue } from "@/context/ContextProvider";
import ReactImageGallery from "react-image-gallery";
const SingleMain = () => {
  const { project, error, loading } = useSelector((s) => s.project);

  const {
    dispatch: dispatchContext,
    state: { location },
    mapRef
  } = useValue();
  
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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center p-3 md:p-8 flex-wrap gap-4">
      {/* Left Side */}
       <div className="max-w-[94vw] md:max-w-[40vw] flex-col h-[80vh] flex justify-center items-center">
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
                className="object-cover object-center"
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
      {/* <div className="max-w-[90vw] md:max-w-[60%]">
        <ReactImageGallery
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
        /> */}
      </div>

      {/* Right Side */}
      <div className="custom-scroll flex-[35%] p-4 my-4  border border-gray-300 ">
        <div className="flex justify-between items-center gap-4 h-auto  md:h-[270px] flex-wrap md:flex-nowrap">
          <div>
            <h2 className="text-lg  text-gray-700 mb-4">{project?.address}</h2>
            <p>Oasis 4 Fit</p>
            <Divider className="bg-gray-300" />
            <div className="flex justify-between items-center gap-4 md:gap-1">
              <div className="text-sm shadow-md p-2 rounded-md ">
                <p className="text-sm">Bed</p>
                <FaBed className="inline mx-1" /> {project?.bed || 0}
              </div>
              <div className="text-sm shadow-md p-2 rounded-md">
                <p className="text-sm">Bath</p>
                <FaBath className="inline mx-1" /> {project?.bath || 0}
              </div>

              <div className="text-sm shadow-md p-2 rounded-md">
                <p className="text-sm">Acress</p>
                <FaTree className="inline mx-1" /> {project?.acress || "0.50%"}
              </div>
              <div className="text-sm shadow-md p-2 rounded-md">
                <p className="text-sm">SO.FT</p>
                <FaBed className="inline mx-1" /> {project?.so_ft || "0.10%"}
              </div>
            </div>
            <Divider className="bg-gray-300 " />
          </div>
          <div
            className="h-auto  md:h-[270px] w-full"
            onClick={() => {
              dispatchContext({
                type: "UPDATE_LOCATION",
                payload: { lng: project.lng, lat: project.lat },
              });

              router.push("/");
            }}
          >
            <img
              src="/house/map/map.png"
              alt="map"
              className="h-full w-full object-cover cursor-pointer"
            />
          </div>
        </div>

        <Divider className="bg-gray-300" />
        {/* col 2 start */}

        <div className="flex border border-1 flex-wrap justify-between items-center gap-1">
          <div className="shadow-md p-4 rounded-md flex-[26%]">
            <h3 className="text-sm py-2">Project Phase</h3>
            <span className="text-lg">{project?.currentPhase}</span>
          </div>
          <div className="shadow-md p-4 flex justify-between items-center rounded-md flex-[26%]">
            <h3 className="text-sm py-2">Overall Completation</h3>
            <span className="text-sm center">
              <Progress type="circle" percent={75} size={50} />
            </span>
          </div>
          <div className="shadow-md p-4 rounded-md flex-[26%]">
            <h3 className="text-sm py-2">Project Budget</h3>
            <span className="text-lg">${project?.budget}</span>
          </div>
          <div className="shadow-md p-4 rounded-md flex-[26%]">
            <h3 className="text-sm py-2">Target Completation</h3>
            <span className="text-lg"> {project?.targetCompletationDate}</span>
          </div>
          <div
            onClick={() => router.push("/house/documents")}
            className="shadow-md cursor-pointer p-4 rounded-md flex-[26%]"
          >
            <h3 className="text-sm py-2">View Project Documents:</h3>
            <Download className="float-right   rounded-full  text-gray-500" />
            <span className="text-xs">{project?.documents || "Floor Plans,Desings"}</span>
          </div>
          <div className="shadow-md p-4 rounded-md flex-[26%]">
            <h3 className="text-sm py">Commited Spend</h3>
            <span className="text-lg">$ {project?.cost}</span>
          </div>
        </div>
        <Divider className="bg-gray-300" />

        {/* buttons */}
        <div className="flex mx-1">
          <button
            onClick={() => router.push(`/house/customization/${project?._id}`)}
            className="custom-btn mx-1 text-[14px] font-thin  p-1 cursor-pointer w-full"
          >
            Project approval workflow
          </button>{" "}
          <button
            onClick={() => router.push(`/house/details/${project?._id}`)}
            className="custom-btn mx-1 text-[14px] font-thin  p-1 cursor-pointer w-full"
          >
            Procure Materials
          </button>
        </div>
        {/* help/contact */}
        <Divider className="bg-gray-300" />
        <div className="p-2 m-3 flex justify-between  flex-wrap md:flex-nowrap  gap-3">
          <div className=" py-2 flex flex-col flex-[45%] ">
            <h1 className="p-1 py-2 text-gray-900 text-2xl">Key Project Notes</h1>

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
                  <p>key 1 hello world</p>
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
          <div className="flex-[45%]">
            <h1 className="p-1 py-4 text-gray-900 text-2xl">Project Stackeholders</h1>
            <div className="flex justify-between flex-wrap  gap-1">
              <div className="shadow-md p-4 rounded-md flex-[46%]">
                <h3 className="text-sm py-2">General Contractor</h3>
                <span className="text-lg"> {project?.generalContractor}</span>
              </div>
              <div className="shadow-md p-4 rounded-md flex-[46%]">
                <h3 className="text-sm py-2">Construction Manager</h3>
                <span className="text-lg"> {project?.constructionManager}</span>
              </div>
              <div className="shadow-md p-4 rounded-md flex-[46%]">
                <h3 className="text-sm py-2">Project Manager</h3>
                <span className="text-lg"> {project?.projectManager}</span>
              </div>
              <div className="shadow-md p-4 rounded-md flex-[46%]">
                <h3 className="text-sm py-2">Client</h3>
                <span className="text-lg"> {project?.client}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default SingleMain;

import React from "react";
import Image from "next/image";
import { Divider } from "antd";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist, updateTotalPrice } from "@/redux/actions/cartActions";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const CustomHouseCard = ({ data, project }) => {
   const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((s) => s.cart);
  const {  wishlistItems } = useSelector((s) => s.wishlist);
  const isInWishlist = wishlistItems.some((item) => item._id === data._id);
  const isInCart = cartItems.some((item) => item._id === data._id);

  const wishListClick = (data) => {
   
    if (isInWishlist) {
      dispatch(removeFromWishlist(data._id))
      toast.warn("Item removed from wishlist!");
    } else {
      dispatch(
        addToWishlist({
          ...data,
          project: {
            _id: project?._id,
            title: project?.title,
            phase: project?.currentPhase,
            images: project?.images,
            homeType: project?.homeType,
            address: project?.address,
            budget: project?.budget,
            price: project?.price,
          },
        })
      );
      toast.success("Item Added to wishlist!");
    }
  };

  const cardClick = (data) => {
    if (isInCart) {
      dispatch(removeFromCart(data._id));
      toast.warn("Item Removed from cart!");
    } else {
      dispatch(updateTotalPrice(parseFloat(data?.price)));
      dispatch(
        addToCart({
          ...data,
          project: {
            _id: project?._id, 
            title: project?.title,
            phase: project?.currentPhase,
            images: project?.images,
            homeType: project?.homeType,
            address: project?.address,
            budget: project?.budget,
            price: project?.price,
          },
        })
      );
      toast.success("Item Added to cart!");
    }
  };

  return (
    <div className="min-w-max rounded-s mx-auto bg-white shadow-lg rounded-md overflow-hidden my-2">
      <div
        onClick={() => router.push(`/products/view/${data._id}`)}
        className="relative h-32 rounded-md cursor-pointer"
      >
        <Image src={data?.images[0]} alt={data?.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2
          onClick={() => router.push(`/products/view/${data._id}`)}
          className="text-gray-900 text-sm font-bold cursor-pointer"
        >
          {data?.title}
        </h2>
        <div className="flex items-center mb-1 py-2">
          <p className="text-lg font-bold text-gray-700">
            {(data?.price - data?.price * (data?.discount / 100)).toFixed(2)}{" "}
          </p>

          <p className="text-sm text-gray-600 mx-1 mt-2">({data?.discount}%)</p>
          <sup className="text-sm text-violet-400 ml-2 line-through">{data.price}</sup>
        </div>

        <h3 className="text-gray-800 flex justify-between items-end text-xs md:text-sm font-semibold mb-1 border-t-2">
          {data?.companyName}{" "}
          {isInWishlist ? (
            <HeartFilled style={{ color: "red" }} onClick={() => wishListClick(data)} />
          ) : (
            <HeartOutlined onClick={() => wishListClick(data)} />
          )}
        </h3>
        <p className="text-gray-600 mb-2 text-[11px]">
          Minimum ${data?.price - data?.price * (data?.discount / 100)?.toFixed(2)}{" "}
        </p>
        <button
          onClick={() => cardClick(data)}
          className={`border ${
            isInCart ? "bg-gray-800 text-white" : "border-gray-800"
          } rounded-md mt-2 w-full h-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300`}
        >
          {isInCart ? "Item in Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default CustomHouseCard;

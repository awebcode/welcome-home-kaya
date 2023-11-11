import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { deleteProductReview, getProductReviews } from "@/redux/actions/reviewActions";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Divider } from "antd";

const ReviewCard = ({ review, getReview, setOpen }) => {
  const dispatch = useDispatch();
  const { user: userData } = useSelector((u) => u.user);
  const { id } = useRouter().query;

  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  const deleteReviewHandler = async () => {
    try {
      if (window.confirm("Are you sure?")) {
        const data = await dispatch(deleteProductReview(id, review._id));
        if (data.success) {
          toast.success("Review Deleted successfully");
          dispatch(getProductReviews(id));
        }
      }
    } catch (error) {
      toast.error("Error Deleting review");
    }
  };

  const canDeleteReview =
    userData?.role === "admin" ||
    userData?.role === "sub_admin" ||
    review?.user?._id === userData?._id;

  const editReviewHandler = () => {
    setOpen(true);
  };

  return (
    <div className="flex items-center border border-gray-300 p-6 my-2 rounded-md">
      <Avatar src={review?.user?.avatar} alt="User" className="mr-4" />
      <div>
        <div className="flex items-center mb-2">
          <Link
            href={`/dashboard/customers/single/${review?.user?._id}`}
            className="font-bold text-blue-500"
          >
            {review?.user?.username}
          </Link>
          {canDeleteReview && (
            <>
              <span onClick={editReviewHandler} className="cursor-pointer ml-2">
                <EditFilled className="text-sm text-blue-500" />
              </span>
              <span
                onClick={deleteReviewHandler}
                className="text-red-500 cursor-pointer ml-2"
              >
                <DeleteFilled className="text-sm" />
              </span>
            </>
          )}
              </div>
              {/* <Divider/> */}
        <Rating {...options} className="text-yellow-500 mb-2" />
        <div className="text-gray-800 text-xs">{review.comment}</div>
      </div>
    </div>
  );
};

export default ReviewCard;

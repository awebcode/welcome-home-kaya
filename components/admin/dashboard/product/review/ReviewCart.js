import { Rating } from "@material-ui/lab";
import React from "react";
import { Avatar } from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
const ReviewCard = ({ review, getReview }) => {
    const dispatch = useDispatch();
  const { user: userData } = useSelector((u)=>u.user)
  const { id } = useRouter().query; // Renamed 'data' to 'userData'
  console.log(review)
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };
  const deleteReviewHandler = async () => {
   
    try {
      if (window.confirm("Are you sure?")) {
        const data=await dispatch(deleteReview(id,review._id))
        if (data.success) {
          toast.success("Review Deleted success");
          //    getReview()
        } // Replace with your API endpoint
      }
    } catch (error) {
     
      toast.error("Error Deleting review");
    }
  };
  const canDeleteReview =
    userData?.role === "admin" ||
    userData?.role === "sub_admin" ||
    review?._id === userData?._id;

  return (
    <div className="reviewCard">
      <Avatar src={review?.user?.avatar} alt="User" />
      <Link href={`/user/single/${review?.user?._id}`}>{review.username}</Link>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
      {canDeleteReview && (
        <span onClick={deleteReviewHandler} className="text-red-500 cursor-pointer">
          <DeleteIcon />
        </span>
      )}
    </div>
  );
};

export default ReviewCard;

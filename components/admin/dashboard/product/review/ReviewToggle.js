import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createProductReview } from "@/redux/actions/reviewActions";

const Review = ({ open, setOpen, product }) => {
     const dispatch = useDispatch();
  const { user: userData } = useSelector((s) => s.user);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [existingReview, setExistingReview] = useState(null);

  useEffect(() => {
    const userReview = product?.reviews?.find((review) => review?.user === userData?._id);
    if (userReview) {
      setExistingReview(userReview);
      setRating(userReview.rating);
      setComment(userReview.comment);
    } else {
      setExistingReview(null);
      setRating(0);
      setComment("");
    }
  }, [product?.reviews, userData?._id]);

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = async () => {
    const myForm = {
      rating,
      comment,
    };

      const data = await dispatch(createProductReview(product._id, myForm));
      
    if (data?.success) {
        toast.success("Review Submitted successfully!");
        setOpen(false)
    }
  };

  return (
    <>
      <h3 className="reviewsHeading">REVIEWS</h3>
      {/* {console.log("exisreview", product?.reviews)} */}
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={submitReviewToggle}
      >
        <DialogTitle>Submit Review</DialogTitle>
        <DialogContent className="submitDialog">
          <Rating
            onChange={(e, newValue) => setRating(newValue)}
            value={rating}
            size="large"
            precision={0.5}
          />

          <textarea
            className="submitDialogTextArea"
            cols="30"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitReviewToggle} color="secondary">
            Cancel
          </Button>
          <Button onClick={reviewSubmitHandler} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Review;

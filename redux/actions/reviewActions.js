import axios from "axios";
import {
  CREATE_PRODUCT_REVIEW_REQUEST,
  CREATE_PRODUCT_REVIEW_SUCCESS,
  CREATE_PRODUCT_REVIEW_FAIL,
  GET_PRODUCT_REVIEWS_REQUEST,
  GET_PRODUCT_REVIEWS_SUCCESS,
  GET_PRODUCT_REVIEWS_FAIL,
  DELETE_PRODUCT_REVIEW_REQUEST,
  DELETE_PRODUCT_REVIEW_SUCCESS,
  DELETE_PRODUCT_REVIEW_FAIL,
} from "../constants/productConstants";
import { Base_url } from "@/utils/base_url";

// Reviews
// Create Product Review
export const createProductReview =
  (productId, formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REVIEW_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

     

      const { data } = await axios.post(
        `${Base_url}/product/${productId}/reviews`,
        formData,
        config
      );

      dispatch({ type: CREATE_PRODUCT_REVIEW_SUCCESS, payload: data.review });
        return data;
    } catch (error) {
      dispatch({
        type: CREATE_PRODUCT_REVIEW_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

// Get Product Reviews
export const getProductReviews = (productId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REVIEWS_REQUEST });

    const { data } = await axios.get(`${Base_url}/product/reviews/${productId}`, {
      withCredentials: true,
    });
    console.log(data)

    dispatch({ type: GET_PRODUCT_REVIEWS_SUCCESS, payload: data.reviews });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_REVIEWS_FAIL, payload: error.response?.data?.message });
  }
};

// Delete Product Review
export const deleteProductReview =
  (productId, reviewId) => async (dispatch, getState) => {
    try {
      dispatch({ type: DELETE_PRODUCT_REVIEW_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };

      const { data } = await axios.delete(
        `${Base_url}/product/${productId}/reviews/${reviewId}`,
        config
      );

        dispatch({ type: DELETE_PRODUCT_REVIEW_SUCCESS, payload: data });
        return data;
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_REVIEW_FAIL,
        payload: error.response?.data?.message,
      });
    }
  };

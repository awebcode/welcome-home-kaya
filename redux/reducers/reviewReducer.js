// reviewReducer.js

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

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REVIEW_REQUEST:
    case DELETE_PRODUCT_REVIEW_REQUEST:
    case GET_PRODUCT_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PRODUCT_REVIEW_SUCCESS:
      const existingReviewIndex = state.reviews.findIndex(
        (review) =>
          review.user._id === action.payload.user._id
          
      );

      if (existingReviewIndex !== -1) {
        const updatedReviews = [...state.reviews];
        updatedReviews[existingReviewIndex] = action.payload;

        return {
          ...state,
          reviews: updatedReviews,
          loading: false,
          error: null,
        };
      } else {
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
          loading: false,
          error: null,
        };
      }

    case GET_PRODUCT_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        loading: false,
        error: null,
      };
    case DELETE_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: state.reviews.filter((review) => review._id !== action.payload),
        loading: false,
        error: null,
      };
    case CREATE_PRODUCT_REVIEW_FAIL:
    case DELETE_PRODUCT_REVIEW_FAIL:
    case GET_PRODUCT_REVIEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;

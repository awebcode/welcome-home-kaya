import axios from "axios";
import {
  CREATE_PRODUCT_CLEAR_ERROR,
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  RESET_PRODUCT_STATE,
  UPDATE_SINGLE_PRODUCT_FAIL,
  UPDATE_SINGLE_PRODUCT_REQUEST,
  UPDATE_SINGLE_PRODUCT_SUCCESS,
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
  APPLY_COUPON_FAIL,
} from "../constants/productConstants";
import { Base_url } from "@/utils/base_url";

export const createNewProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data: responseData } = await axios.post(`${Base_url}/product/new`, data, config);

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: responseData.product });
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: error.response?.data?.message });
  }
};

//getAllProducts
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${Base_url}/products`, config);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.response?.data?.message });
  }
};

//getSingleProduct
export const getOneProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${Base_url}/product/${id}`, config);
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.product });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PRODUCT_FAIL, payload: error.response?.data?.message });
  }
};

//update product
export const updateProduct = (id,data) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SINGLE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
   

    const { data: responseData } = await axios.patch(
      `${Base_url}/product/${id}`,
      data,
      config
    );
    console.log(data)

    dispatch({ type: UPDATE_SINGLE_PRODUCT_SUCCESS, payload: responseData.product });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_SINGLE_PRODUCT_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

//delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    await axios.delete(`${Base_url}/product/${id}`, config);

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response?.data?.message,
    });
  }
};
//discount price
export const applyCoupon = (productId, couponCode) => async (dispatch) => {
  try {
    dispatch({ type: APPLY_COUPON_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `${Base_url}/product/apply-coupon`,
      {
        productId,
        couponCode,
      },
      config
    );

    dispatch({ type: APPLY_COUPON_SUCCESS, payload: data.product });
  } catch (error) {
    console.log(error);
    dispatch({ type: APPLY_COUPON_FAIL, payload: error.response?.data?.message });
  }
};
// RESET STATE
export const resetProductState = () => async (dispatch) => {
  dispatch({ type: RESET_PRODUCT_STATE });
};

// clear errors
export const clearProductErrors = () => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_CLEAR_ERROR });
};

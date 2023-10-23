import axios from "axios";
import {
  CREATE_ORDER_CLEAR_ERROR,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_SINGLE_ORDER_FAIL,
  GET_SINGLE_ORDER_REQUEST,
  GET_SINGLE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
} from "../constants/orderConstants";
import { Base_url } from "@/utils/base_url";

export const createNewOrder = (datax) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${Base_url}/order`, datax, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${Base_url}/orders`, config);

    dispatch({ type: GET_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ORDERS_FAIL, payload: error.response?.data?.message });
  }
};

export const getOneOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${Base_url}/order/${id}`, config);

    dispatch({ type: GET_SINGLE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({ type: GET_SINGLE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

export const updateOrder = (datax, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.patch(`${Base_url}/order/${id}`, datax, config);

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(`${Base_url}/order/${id}`, config);

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: DELETE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

export const updateOrderStatus = (id, newStatus) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.patch(
      `${Base_url}/order/${id}/status`,
      { status: newStatus },
      config
    );

    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: { orderId: id, newStatus } });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_ORDER_STATUS_FAIL, payload: error.response?.data?.message });
  }
};

export const clearOrderErrors = () => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_CLEAR_ERROR });
};

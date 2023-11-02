import axios from "axios";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  GET_MY_ORDERS_ORDER_REQUEST,
  GET_MY_ORDERS_ORDER_SUCCESS,
  GET_MY_ORDERS_ORDER_FAIL,
  GET_SINGLE_ORDER_REQUEST,
  GET_SINGLE_ORDER_SUCCESS,
  GET_SINGLE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
  RESET_ORDER_STATE,
  CREATE_ORDER_CLEAR_ERROR,
} from "../constants/orderConstants";
import { Base_url } from "@/utils/base_url";

// Create a new order
export const createNewOrder = (datax) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${Base_url}/order/new`, datax, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

// Get all orders
export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const { data } = await axios.get(`${Base_url}/orders`, {
      withCredentials:true
    });

    dispatch({ type: GET_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ORDERS_FAIL, payload: error.response?.data?.message });
  }
};

// Get orders by logged in user
export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MY_ORDERS_ORDER_REQUEST });

    const { data } = await axios.get(`${Base_url}/orders/myorders`, {
      withCredentials: true,
    });

    dispatch({ type: GET_MY_ORDERS_ORDER_SUCCESS, payload: data.orders });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_MY_ORDERS_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

// Get a single order by ID
export const getSingleOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_ORDER_REQUEST });

    const { data } = await axios.get(`${Base_url}/order/${id}`,{
      withCredentials:true
    });

    dispatch({ type: GET_SINGLE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_SINGLE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

// Delete an order by ID
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST });

    await axios.delete(`${Base_url}/order/${id}`, {
      withCredentials:true
    });

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: id });
  } catch (error) {
    console.log(error);
    dispatch({ type: DELETE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

// Update an order
export const updateOrder = (id, datax) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${Base_url}/order/${id}/update`, datax, config);

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_ORDER_FAIL, payload: error.response?.data?.message });
  }
};

// Update order status
export const updateOrderStatus = (id, status) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `${Base_url}/order/${id}/status`,
      { status },
      config
    );

    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: data.order });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPDATE_ORDER_STATUS_FAIL, payload: error.response?.data?.message });
  }
};

// Reset order state
export const resetOrderState = () => (dispatch) => {
  dispatch({ type: RESET_ORDER_STATE });
};

// Clear create order error
export const clearOrderClearError = () => (dispatch) => {
  dispatch({ type: CREATE_ORDER_CLEAR_ERROR });
};

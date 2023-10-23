import {
  CREATE_ORDER_CLEAR_ERROR,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
  GET_SINGLE_ORDER_REQUEST,
  GET_SINGLE_ORDER_SUCCESS,
  GET_SINGLE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
} from "../constants/orderConstants";

const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
  isCreated: false,
  isUpdated: false,
  isDeleted: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_ORDERS_REQUEST:
    case GET_SINGLE_ORDER_REQUEST:
    case UPDATE_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
    case UPDATE_ORDER_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        loading: false,
        isCreated: true,
        error: null,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        isCreated: false,
        isDeleted: false,
        isUpdated: false,
        error: null,
      };
    case GET_SINGLE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_ORDER_SUCCESS:
      const updatedOrder = action.payload;
      const updatedOrders = state.orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      );
      return {
        ...state,
        orders: updatedOrders,
        order: updatedOrder,
        loading: false,
        isUpdated: true,
        error: null,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== action.payload._id),
        loading: false,
        isDeleted: true,
        error: null,
      };
    case UPDATE_ORDER_STATUS_SUCCESS:
      const { orderId, newStatus } = action.payload;
      const updatedOrdersStatus = state.orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      );
      return {
        ...state,
        orders: updatedOrdersStatus,
        loading: false,
        isUpdated: true,
        error: null,
      };
    case CREATE_ORDER_FAIL:
    case GET_ORDERS_FAIL:
    case GET_SINGLE_ORDER_FAIL:
    case UPDATE_ORDER_FAIL:
    case DELETE_ORDER_FAIL:
    case UPDATE_ORDER_STATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_ORDER_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default orderReducer;

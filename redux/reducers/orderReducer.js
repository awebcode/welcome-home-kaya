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
  GET_MY_ORDERS_ORDER_FAIL,
  GET_MY_ORDERS_ORDER_REQUEST,
  GET_MY_ORDERS_ORDER_SUCCESS,
  GET_SINGLE_ORDER_FAIL,
  GET_SINGLE_ORDER_REQUEST,
  GET_SINGLE_ORDER_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  RESET_ORDER_STATE,
} from "../constants/orderConstants";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  isCreated: false,
  isUpdated: false,
  isDeleted: false,
  createLoading: false,
  updateLoading: false,
  deleteLoading: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        createLoading: true,
        error: null,
      };
    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        updateLoading: true,
        error: null,
      };
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        deleteLoading: true,
        error: null,
      };
    case GET_ORDERS_REQUEST:
    case GET_SINGLE_ORDER_REQUEST:
    case GET_MY_ORDERS_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createLoading: false,
        isCreated: true,
        error: null,
      };
    case UPDATE_ORDER_SUCCESS:
      const updatedOrder = action.payload;
      const updatedOrders = state.orders.map((order) =>
        order._id === updatedOrder._id ? updatedOrder : order
      );

      return {
        ...state,
        orders: updatedOrders,
        order: updatedOrder,
        loading: false,
        updateLoading: false,
        isUpdated: true,
        error: null,
      };
    case DELETE_ORDER_SUCCESS:
      const deletedOrderId = action.payload;
      return {
        ...state,
        orders: state.orders.filter((order) => order._id !== deletedOrderId),
        loading: false,
        isDeleted: true,
        error: null,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null,
        isCreated: false,
        isDeleted: false,
        isUpdated: false,
      };
   
//
    case GET_MY_ORDERS_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: null,
        isCreated: false,
        isDeleted: false,
        isUpdated: false,
      };

    // 

    case GET_SINGLE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        createLoading: false,
        error: action.payload,
      };
    case UPDATE_ORDER_FAIL:
      return {
        ...state,
        updateLoading: false,
        error: action.payload,
      };
    case DELETE_ORDER_FAIL:
      return {
        ...state,
        deleteLoading: false,
        error: action.payload,
      };
    case GET_ORDERS_FAIL:
    case GET_SINGLE_ORDER_FAIL:
    case GET_MY_ORDERS_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_ORDER_STATE:
      return {
        ...state,
        isCreated: false,
        isUpdated: false,
        isDeleted: false,
        updateLoading: false,
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

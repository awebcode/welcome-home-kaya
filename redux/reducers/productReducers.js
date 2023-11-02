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
  UPDATE_SINGLE_PRODUCT_FAIL,
  UPDATE_SINGLE_PRODUCT_REQUEST,
  UPDATE_SINGLE_PRODUCT_SUCCESS,
  APPLY_COUPON_REQUEST,
  APPLY_COUPON_SUCCESS,
  APPLY_COUPON_FAIL,
  RESET_PRODUCT_STATE,
} from "../constants/productConstants";

const initialState = {
  products: [],
  loading: false,
  error: null,
  isCreated: false,
  isUpdated: false,
  isDeleted: false,
  appliedCoupon: null,
  createLoading: false, // Separate loading state for create action
  updateLoading: false, // Separate loading state for update action
  deleteLoading: false, // Separate loading state for delete action
  applyCouponLoading: false, // Separate loading state for apply coupon action
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        createLoading: true,
        error: null,
      };
    case UPDATE_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        updateLoading: true,
        error: null,
      };
    case DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        deleteLoading: true,
        error: null,
      };
    case APPLY_COUPON_REQUEST:
      return {
        ...state,
        applyCouponLoading: true,
        error: null,
      };
    case GET_PRODUCTS_REQUEST:
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        createLoading: false,
        isCreated: true,
        error: null,
      };
    case UPDATE_SINGLE_PRODUCT_SUCCESS:
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );

      return {
        ...state,
        products: updatedProducts,
        product: updatedProduct,
        loading: false,
        updateLoading:false,
        isUpdated: true,
        error: null,
      };
    case DELETE_PRODUCT_SUCCESS:
      const deletedProductId = action.payload;
      return {
        ...state,
        products: state.products.filter((product) => product._id !== deletedProductId),
        loading: false,
        isDeleted: true,
        error: null,
      };

    case APPLY_COUPON_SUCCESS:
      return {
        ...state,
        applyCouponLoading: false,
        appliedCoupon: action.payload,
        error: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null,
        isCreated: false,
        isDeleted: false,
        isUpdated: false, // Reset isCreated flag when products are fetched
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        createLoading: false,
        error: action.payload,
      };
    case UPDATE_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        updateLoading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        deleteLoading: false,
        error: action.payload,
      };
    case APPLY_COUPON_FAIL:
      return {
        ...state,
        applyCouponLoading: false,
        error: action.payload,
      };
    case GET_PRODUCTS_FAIL:
    case GET_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_PRODUCT_STATE:
      return {
        ...state,
        isCreated: false,
        isUpdated: false,
        isDeleted: false,
        updateLoading:false
      };

    case CREATE_PRODUCT_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default productReducer;

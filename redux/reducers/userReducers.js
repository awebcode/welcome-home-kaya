import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  CLEAR_ERRORS,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_FAIL,
  RESET_STATE,
} from "../constants/userConstants";

// Assuming your initial state looks like this
const initialState = {
  user:
    JSON.parse(typeof window !== "undefined" ? localStorage.getItem("user") : null) ||
    null,

  loading: false,
  loadUserLoading: false,
  isAuthenticated: !!JSON.parse(
    typeof window !== "undefined" ? localStorage.getItem("user") : null
  ),

  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOAD_USER_REQUEST:
      return {
        loadUserLoading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        isSentEmail: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        isResetPassword: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        loadUserLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        loadUserLoading: false,
        isAuthenticated: true,
        user: action.payload,
        isRegistered: false,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
        isRegistered: false,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        isRegistered: false,
        user: null,
        error: action.payload,
      };
    //reset user fail
    case FORGOT_PASSWORD_FAIL:
      return {
        isSentEmail: false,
        error: action.payload,
      };
    case RESET_PASSWORD_FAIL:
      return {
        isResetPassword: false,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        loadUserLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //update profile

    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        profileUpdateLoading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profileUpdateLoading: false,
        user: action.payload,
        isAuthenticated: true,
        isUpdated: true, // Assuming updating the profile will maintain authentication
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        profileUpdateLoading: false,
        error: action.payload,
      };
    
    case RESET_STATE:
      return {
        isRegistered: false,
        isUpdated: false,
        isResetPassword: false,
        isSentEmail: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        isRegistered: false,
        isUpdated: false,
      };

    default:
      return state;
  }
};

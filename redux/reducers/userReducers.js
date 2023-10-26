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
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  RESET_PASSWORD_FAIL,
  RESET_STATE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
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
  users:[]
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case LOAD_USER_REQUEST:
      return {
        ...state,
        loadUserLoading: true,
      };
    // get all users

    case GET_USERS_REQUEST:
      return {
        ...state,
        getUsersLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        getUsersLoading: false,
        users: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        getUsersLoading: false,
        error: action.payload,
      };
    //
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isSentEmail: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
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
        ...state,
        loading: false,
        loadUserLoading: false,
        isAuthenticated: true,
        user: action.payload,
        isRegistered: false,
      };
    //get single user
    case GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        singleUserGetLoading: true,
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        singleUser: action.payload,
        singleUserGetLoading: false,
        error: null,
      };
    case GET_SINGLE_USER_FAIL:
      return {
        ...state,

        singleUserGetLoading: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
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
        ...state,
        isSentEmail: false,
        error: action.payload,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        isResetPassword: false,
        error: action.payload,
      };

    case LOAD_USER_FAIL:
      return {
        ...state,
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
    //update single user by admin

    //update profile

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        profileUpdateLoading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        profileUpdateLoading: false,
       
        
        isUpdated: true, // Assuming updating the profile will maintain authentication
      };

    case UPDATE_USER_FAIL:
      return {
        ...state,
        profileUpdateLoading: false,
        error: action.payload,
      };
    //delete single user
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state?.users?.filter((user) => user._id !== action.payload),
        loading: false,
        error: null,
        isDeleted: true,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,

        loading: false,
        error: action.payload,
      };
    //delete single users

    case RESET_STATE:
      return {
        ...state,
        isRegistered: false,
        isUpdated: false,
        isResetPassword: false,
        isSentEmail: false,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

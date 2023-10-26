import { Base_url } from "@/utils/base_url";
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
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  LOGOUT_REQUEST,
  CLEAR_ERRORS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAIL,
  RESET_STATE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

// Login
export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${Base_url}/login`, userData, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    // Store user data in local storage
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${Base_url}/register`, userData, config);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`${Base_url}/me`, {
      withCredentials: true,
    });

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
   
    dispatch({ type: LOAD_USER_FAIL, payload: error.response?.data?.message });
  }
};

//get single user
export const getSingleUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_USER_REQUEST });

    const { data } = await axios.get(`${Base_url}/user/${id}`, {
      withCredentials: true,
    });

    dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: data.user });
    
  } catch (error) {
    
    dispatch({ type: GET_SINGLE_USER_FAIL, payload: error.response?.data?.message });
  }
};

// Load User
export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });

    const { data } = await axios.get(`${Base_url}/users`, {
      withCredentials: true,
    });

    dispatch({ type: GET_USERS_SUCCESS, payload: data.users });
    
  } catch (error) {
   
    dispatch({ type: GET_USERS_FAIL, payload: error.response?.data?.message });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    await axios.get(`${Base_url}/logout`, {
      withCredentials: true,
    });
    localStorage.setItem("user", null);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};
//forget password email sent

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${Base_url}/forget-password`, {email}, config);

    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    
  } catch (error) {
    
    dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response?.data?.message });
  }
};
//reset password

//forget password email sent

export const resetPassword = (values,token) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(`${Base_url}/reset-password/${token}`, values, config);

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.message });
    
  } catch (error) {
    
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error.response?.data?.message });
  }
};
// Update Profile
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.patch(`${Base_url}/update-my-details`, userData, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//update updateSingleUser by admin

export const updateSingleUser = (userData,id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST});

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.patch(`${Base_url}/update-user-details/${id}`, userData, config);

    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response?.data?.message,
    });
  }
};
//// Logout User
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
     await axios.delete(`${Base_url}/delete-user/${id}`, {
       withCredentials: true,
     });
    
    dispatch({ type: DELETE_USER_SUCCESS,payload:id });
  } catch (error) {
    console.log(error)
    dispatch({ type: DELETE_USER_FAIL, payload: error.response?.data?.message });
  }
};
// REEST STATE
export const resetUserState = () => async (dispatch) => {
  dispatch({ type: RESET_STATE });
};
// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

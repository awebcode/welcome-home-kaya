import axios from "axios";
import {
  CREATE_PROJECT_CLEAR_ERROR,
  CREATE_PROJECT_FAIL,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  DELETE_SINGLE_PROJECT_FAIL,
  DELETE_SINGLE_PROJECT_REQUEST,
  DELETE_SINGLE_PROJECT_SUCCESS,
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_SINGLE_PROJECT_FAIL,
  GET_SINGLE_PROJECT_REQUEST,
  GET_SINGLE_PROJECT_SUCCESS,
  RESET_PROJECT_STATE,
  UPDATE_SINGLE_PROJECT_FAIL,
  UPDATE_SINGLE_PROJECT_REQUEST,
  UPDATE_SINGLE_PROJECT_SUCCESS,
} from "../constants/projectsConstants";
import { Base_url } from "@/utils/base_url";

export const createNewProject = (datax) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(`${Base_url}/project`, datax, config);

    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data.project });
    console.log("created project",data.project)
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_PROJECT_FAIL, payload: error.response?.data?.message });
  }
};

//getAllProjects
export const getProjects = (dispatchContext) => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECTS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${Base_url}/projects`, config);

    dispatch({ type: GET_PROJECTS_SUCCESS, payload: data.projects });

    // dispatchContext({type:"UPDATE_ROOMS",payload:data.projects})
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PROJECTS_FAIL, payload: error.response?.data?.message });
  }
};

//getSingleProject
export const getOneProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(`${Base_url}/project/${id}`, config);
    dispatch({ type: GET_SINGLE_PROJECT_SUCCESS, payload: data.project });
  } catch (error) {
    dispatch({ type: GET_SINGLE_PROJECT_FAIL, payload: error.response?.data?.message });
  }
};

//update project
export const updateProject = (datax, id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SINGLE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.patch(`${Base_url}/project/${id}`, datax, config);

    dispatch({ type: UPDATE_SINGLE_PROJECT_SUCCESS, payload: data.project });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_SINGLE_PROJECT_FAIL,
      payload: error.response?.data?.message,
    });
  }
};

//delete project
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_SINGLE_PROJECT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(`${Base_url}/projects/${id}`, config);

    dispatch({ type: DELETE_SINGLE_PROJECT_SUCCESS, payload: data.project });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_SINGLE_PROJECT_FAIL,
      payload: error.response?.data?.message,
    });
  }
};
// REEST STATE
export const resetProjectState = () => async (dispatch) => {
  dispatch({ type: RESET_PROJECT_STATE });
};
//clear errors
export const clearProjectErrors = () => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_CLEAR_ERROR });
};

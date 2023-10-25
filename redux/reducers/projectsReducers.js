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

const initialState = {
  projects: [],
  loading: false,
  error: null,
  isCreated: false,
  isUpdated: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
    case GET_PROJECTS_REQUEST:
    case GET_SINGLE_PROJECT_REQUEST:
    case UPDATE_SINGLE_PROJECT_REQUEST:
    case DELETE_SINGLE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: true,
        error: null,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: null,
        isCreated: false,
        isDeleted: false,
        isUpdated: false, // Reset isCreated flag when projects are fetched
      };
    case GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_SINGLE_PROJECT_SUCCESS:
      const updatedProject = action.payload;
      const updatedProjects = state.projects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      );

      return {
        ...state,
        projects: updatedProjects,
        project: updatedProject,
        loading: false,
        isUpdated: true,
        error: null,
      };
    case DELETE_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== action.payload),
        loading: false,
        error: null,
        isDeleted: true,
      };
    case CREATE_PROJECT_FAIL:
    case GET_PROJECTS_FAIL:
    case GET_SINGLE_PROJECT_FAIL:
    case UPDATE_SINGLE_PROJECT_FAIL:
    case DELETE_SINGLE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_PROJECT_STATE:
      return {
        isCreated: false,
        isUpdated: false,
        isDeleted: false,
      };
    case CREATE_PROJECT_CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default projectReducer;

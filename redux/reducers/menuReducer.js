import { Base_url } from "@/utils/base_url";
import axios from "axios";

// Create Redux files: actions.js, actionTypes.js, reducers.js
// actionTypes.js

export const SELECT_MENU_ITEM = "SELECT_MENU_ITEM";
export const FETCH_FILTERED_DATA_REQUEST = "FETCH_FILTERED_DATA_REQUEST";
export const FETCH_FILTERED_DATA_SUCCESS = "FETCH_FILTERED_DATA_SUCCESS";
export const FETCH_FILTERED_DATA_FAILURE = "FETCH_FILTERED_DATA_FAILURE";


// actions.js
export const selectMenuItem = (menuType, submenuValue) => {
  return async (dispatch) => {
    try {
        const response = await axios.get(
          `${Base_url}/get/customHouseData/${menuType}/${submenuValue}`,
          {
            withCredentials: "true",
          }
        );
      dispatch({
        type: SELECT_MENU_ITEM,
        payload: { menuType, submenuValue, data: response.data },
      });
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
};

// actionTypes.js

// reducers.js


const initialState = {
  selectedMenuItem: null,
  menuData: {},
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MENU_ITEM:
      return {
        ...state,
        selectedMenuItem: {
          menuType: action.payload.menuType,
          submenuValue: action.payload.submenuValue,
        },
        menuData: {
          ...state.menuData,
          [action.payload.menuType]: {
            ...state.menuData[action.payload.menuType],
            [action.payload.submenuValue]: action.payload.data,
          },
        },
      };
    default:
      return state;
  }
};

export default menuReducer;
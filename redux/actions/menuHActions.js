import axios from "axios";
import {
  FETCH_FILTERED_DATA_FAILURE,
  FETCH_FILTERED_DATA_REQUEST,
  FETCH_FILTERED_DATA_SUCCESS,
  SELECT_MENU_ITEM,
} from "../constants/customHConstants";
import { Base_url } from "@/utils/base_url";

// Action to fetch filtered data
export const fetchFilteredData = (menutype, subvalue) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FILTERED_DATA_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(
      `${Base_url}/get/customHouseData/${menutype}/${subvalue}`, // Make sure this URL is correct

      config
    );

    dispatch({ type: FETCH_FILTERED_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FETCH_FILTERED_DATA_FAILURE,
      payload: error.response?.data?.message,
    });
  }
};

// Action to select menu item
export const selectMenuItem = (menuItem) => ({
  type: SELECT_MENU_ITEM,
  payload: menuItem,
});

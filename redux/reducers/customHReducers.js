import { FETCH_FILTERED_DATA_FAILURE, FETCH_FILTERED_DATA_REQUEST, FETCH_FILTERED_DATA_SUCCESS, SELECT_MENU_ITEM } from "../constants/customHConstants";


const initialState = {
  selectedMenuItem: null,
  filteredData: [],
  loading: false,
  error: null,
};

const menuCustomizeHReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MENU_ITEM:
      return {
        ...state,
        selectedMenuItem: action.payload,
      };
    case FETCH_FILTERED_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FILTERED_DATA_SUCCESS:
      return {
        ...state,
        filteredData: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_FILTERED_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default menuCustomizeHReducer;

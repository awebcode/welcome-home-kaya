import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import reducer from "./reducers";

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: "info", message: "" },
  profile: { open: false, file: null, avatar: "" },
  images: [],
  details: {
    title: "",
    description: "",
    price: 0,
    keyFeatures: [],
    underHomeFeatures: [],
    bed: "",
    bath: "",
    soft: "",
    acress: "",
    targetCompletation: "",
    cost: 0,
    budget: 0,
    propertyListingPrice: 0,
    constructionEstimate: "",
    homeType: "",
    builder: "",
    status: "",
  },
  location: {
    lng: -74.006,
    lat: 40.7128,
    address: "Manhattan Borough President's Office, New York 10007, United States",
  },
  rooms: [],
  priceFilter: [0, 3000000],
  addressFilter: null,
  filteredRooms: [],
  room: null,
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mapRef = useRef();
  const containerRef = useRef();
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    if (currentUser) {
      dispatch({ type: "UPDATE_USER", payload: currentUser });
    }
  }, []);
  return (
    <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

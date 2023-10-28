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
    keyProjectNotes: [],
    underHomeFeatures: [],
    Count_of_Products_by_project: [],
    Order_Tracker: [],
    related_to_order: [],
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
    zip: "",
    city: "",
    state: "",
    
    project_size: "",
    site_contract: "",
    site_phone: "",
    customer_contract: "",
    customer_phone: "",
    order_trigger: "",
    order_trigger_stage: "",
    drawings: "",
    takeOfCompleted: "",
    bucket: "",

    b_vs_a: "",
    spent_to_date: "",
    actualCoDate: "",
    spend: "",
    homeType: "",
    builder: "",
    status: "",
    
    generalContractor: "",
    constractionManager: "",
    projectManager: "",
    client: "",
    documents: "",
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

  // update part

  updatedRoom: null,
  deletedImages: [],
  addedImages: [],

  room: null,
  users: [],
  section: 0,
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


  //update room

   useEffect(() => {
     if (state.currentUser) {
       const room = JSON.parse(localStorage.getItem(state.currentUser._id));
       if (room) {
         dispatch({ type: "UPDATE_LOCATION", payload: room.location });
         dispatch({ type: "UPDATE_DETAILS", payload: room.details });
         dispatch({ type: "UPDATE_IMAGES", payload: room.images });
         dispatch({ type: "UPDATE_UPDATED_ROOM", payload: room.updatedRoom });
         dispatch({
           type: "UPDATE_DELETED_IMAGES",
           payload: room.deletedImages,
         });
         dispatch({ type: "UPDATE_ADDED_IMAGES", payload: room.addedImages });
       }
     }
   }, [state.currentUser]);
  return (
    <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

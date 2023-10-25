const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true };
    case "END_LOADING":
      return { ...state, loading: false };
    case "UPDATE_ALERT":
      return { ...state, alert: action.payload };
    case "UPDATE_PROFILE":
      return { ...state, profile: action.payload };
    case "UPDATE_USER":
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };
    case "UPDATE_IMAGES":
      return { ...state, images: [...state.images, action.payload] };
    case "DELETE_IMAGE":
      return {
        ...state,
        images: state.images.filter((image) => image !== action.payload),
      };
    case "UPDATE_DETAILS":
      return { ...state, details: { ...state.details, ...action.payload } };
    case "UPDATE_LOCATION":
      return { ...state, location: action.payload };
    case "RESET_ROOM":
      return {
        ...state,
        images: [],
        details: { title: "", description: "", price: 0 },
        location: { lng: 0, lat: 0 },
      };
    case "UPDATE_ROOMS":
      return {
        ...state,
        rooms: action.payload,
        addressFilter: null,
        priceFilter: 50,
        filteredRooms: action.payload,
      };
    // case "FILTER_PRICE":
    //   return {
    //     ...state,
    //     priceFilter: action.payload,
    //     filteredRooms: applyFilter(state),
    //   };
    case "FILTER_ADDRESS":
      return {
        ...state,
        addressFilter: action.payload,
        filteredRooms: applyFilter(state),
      };
    case "UPDATE_FILTER":
      const { filterType, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterType]: value,
        },
        filteredRooms: applyFilter({
          ...state,
          filters: {
            ...state.filters,
            [filterType]: value,
          },
        }),
      };

    case "CLEAR_ADDRESS":
      return {
        ...state,
        addressFilter: null,
        priceFilter: 50,
        filteredRooms: state.rooms,
      };
    case "UPDATE_ROOM":
      return { ...state, room: action.payload };
    default:
      throw new Error("No matched action!");
  }
};

const applyFilter = (state) => {
  const {
    rooms,
    addressFilter,
    // priceFilter,
    filters: { price: priceFilter, status, builder, phase, homeType },
  } = state;

  let filteredRooms = [...rooms];

  if (addressFilter && addressFilter.lng && addressFilter.lat) {
    const { lng, lat } = addressFilter;
    filteredRooms = filteredRooms.filter((room) => {
      const lngDifference = Math.abs(lng - room.lng);
      const latDifference = Math.abs(lat - room.lat);
      return lngDifference <= 1 && latDifference <= 1;
    });
  }
console.log("price",priceFilter)
  if (priceFilter && priceFilter.length === 2) {
    const [minPrice, maxPrice] = priceFilter;
    filteredRooms = filteredRooms.filter(
      (room) => room.price >= minPrice && room.price <= maxPrice
    );
  }

  if (status) {
    filteredRooms = filteredRooms.filter((room) => room.status === status);
  }

  if (builder) {
    filteredRooms = filteredRooms.filter((room) => room.builder === builder);
  }

  if (phase) {
    filteredRooms = filteredRooms.filter((room) => room.phase === phase);
  }

  if (homeType) {
    filteredRooms = filteredRooms.filter((room) => room.homeType === homeType);
  }

  return filteredRooms;
};


export default reducer;

import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const updatedCart = [...state.cartItems, newItem];
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }
      return { ...state, cartItems: updatedCart };

    case REMOVE_FROM_CART:
      const productId = action.payload;
      const updatedCartItems = state.cartItems.filter((item) => item.id !== productId);
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      return { ...state, cartItems: updatedCartItems };

    default:
      return state;
  }
};

export default cartReducer;

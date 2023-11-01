// reducers/wishlistReducer.js

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../constants/cartConstants";

const initialState = {
  wishlistItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("wishlistItems")) || []
      : [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const newItem = action.payload;
      const updatedWishlist = [...state.wishlistItems, newItem];
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
      }
      return { ...state, wishlistItems: updatedWishlist };

    case REMOVE_FROM_WISHLIST:
      const productId = action.payload;
      const updatedWishlistItems = state.wishlistItems.filter(
        (item) => item._id !== productId
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
      }
      return { ...state, wishlistItems: updatedWishlistItems };

    default:
      return state;
  }
};

export default wishlistReducer;

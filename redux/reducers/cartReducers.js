// cartReducer.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
  UPDATE_TOTAL_PRICE,
  UPDATE_WISHLIST_ITEM,
} from "../constants/cartConstants";

const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [],
  totalPrice:
    typeof window !== "undefined"
      ? localStorage.getItem("totalPrice")
        ? parseFloat(localStorage.getItem("totalPrice"))
        : 0
      : 0,
};

const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0);
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItems = action.payload;
      const updatedCart = [...state.cartItems, newItems];
      const updatedTotalPrice = calculateTotalPrice(updatedCart);

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      }

      return { ...state, cartItems: updatedCart, totalPrice: updatedTotalPrice };

    case REMOVE_FROM_CART:
      const productId = action.payload;
      const updatedCartItems = state.cartItems.filter((item) => item._id !== productId);
      const updatedTotalPriceAfterRemoval = calculateTotalPrice(updatedCartItems);

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        totalPrice: updatedTotalPriceAfterRemoval,
      };

    case UPDATE_TOTAL_PRICE:
      const newTotalPrice = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("totalPrice", newTotalPrice.toString());
      }

      return { ...state, totalPrice: newTotalPrice };
    //update cart for cart component

    case UPDATE_CART_ITEM:
      const updatedCartItemss = action.payload;
      const updatedCartTotalPrice = calculateTotalPrice(updatedCartItemss);

      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItemss));
        localStorage.setItem("totalPrice", updatedCartTotalPrice.toString());
      }

      return {
        ...state,
        cartItems: updatedCartItemss,
        totalPrice: updatedCartTotalPrice,
      };

    case UPDATE_WISHLIST_ITEM:
      const updatedWishlistItems = action.payload;
      const updatedWishlistTotalPrice = calculateTotalPrice(updatedWishlistItems);

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
        localStorage.setItem("wishlistTotalPrice", updatedWishlistTotalPrice.toString());
      }

      return {
        ...state,
        wishlistItems: updatedWishlistItems,
        wishlistTotalPrice: updatedWishlistTotalPrice,
      };
    default:
      return state;
  }
};

export default cartReducer;

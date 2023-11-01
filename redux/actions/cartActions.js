// cartActions.js
import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, UPDATE_CART_ITEM, UPDATE_TOTAL_PRICE, UPDATE_WISHLIST_ITEM } from '../constants/cartConstants';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
export const updateCartItem = (updatedItems) => ({
  type: UPDATE_CART_ITEM, // Define this constant if not already defined
  payload: updatedItems,
});
//update price
export const updateTotalPrice = (newPrice) => {
  return {
    type: UPDATE_TOTAL_PRICE,
    payload: newPrice,
  };
};
// wishlistActions.js
export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
export const updateWishlistItem = (updatedItems) => ({
  type: UPDATE_WISHLIST_ITEM, // Define this constant if not already defined
  payload: updatedItems,
});
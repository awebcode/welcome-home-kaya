import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./redux/reducers/userReducers";
import projectReducer from "./redux/reducers/projectsReducers";
import productReducer from "./redux/reducers/productReducers";
import cartReducer from "./redux/reducers/cartReducers";
import orderReducer from "./redux/reducers/orderReducer";
import menuCustomizeHReducer from "./redux/reducers/customHReducers";
import reviewReducer from "./redux/reducers/reviewReducer";
import wishlistReducer from "./redux/reducers/wishListReducer";


const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  review: reviewReducer,
  project: projectReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  order: orderReducer,
  menu: menuCustomizeHReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

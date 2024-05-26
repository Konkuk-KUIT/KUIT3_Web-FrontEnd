import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import menuReducer from "./menu/reducers";
import orderReducer from "./order/reducers";
import cartReducer from "./cart/reducers";
import userReducer from "./user/reducers";

const rootReducer = combineReducers({
  menu: menuReducer,
  order: orderReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

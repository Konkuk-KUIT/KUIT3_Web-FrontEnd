import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import menuReducer from "./menu/reducers";
import orderReducer from "./order/reducers";
import cartReducer from "./cart/reducers";

const rootReducer = combineReducers({
  menu: menuReducer,
  order: orderReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers } from "redux";
import menuReducer from "./menu/reducers";
import orderReducer from "./order/reducers";
import cartReducer from "./cart/reducers";

const rootReducer = combineReducers({
  menu: menuReducer,
  order : orderReducer,
  cart : cartReducer,
});

const store = createStore(rootReducer);

export default store;

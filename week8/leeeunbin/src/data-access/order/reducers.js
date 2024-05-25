import { ADD_ORDER } from './actions';

const initialState = {
  address : "한남중앙로 40길 (한남 빌리지)",
  orders: [
    {
      id : 0,
      category : "",
      name : "",
      price : 0,
      ingredients : []
    },
  ],
  deliveryPrice : "",
  totalPrice : "",
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export default orderReducer;